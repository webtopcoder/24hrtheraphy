/* eslint-disable no-nested-ternary */
import { Row, Col, message, Modal } from "antd";
import PageHeader from "@components/common/layout/page-header";
import Head from "next/head";
import Loader from "src/components/common/base/loader";
import TokenCard from "src/components/common/base/token-card";
import PaypalPayment from "src/components/paypal/PaypalPayment";
import React, { PureComponent } from "react";
import "./index.less";
import { getResponseError } from "src/lib/utils";
import { tokenPackageService } from "@services/token-package.service";
import { ITokenPackage } from "src/interfaces";
import { buyTokenSuccess } from "src/redux/user/actions";
import { connect } from "react-redux";
import { paypalRequestService } from "@services/paypal.service";

interface IProps {
  buyTokenSuccess: Function;
}
interface IStates {
  tokens: ITokenPackage[];
  fetching: boolean;
  buying: string;
  open: boolean;
  selectedToken?: ITokenPackage;
}

class UserTokensPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = "primary";

  static getInitialProps({ ctx }) {
    const { query } = ctx;
    return {
      action: query.action,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      tokens: [],
      fetching: false,
      buying: null,
      open: false,
    };
  }

  componentDidMount() {
    this.getTokens();
  }

  async getTokens() {
    try {
      this.setState({ fetching: true });
      const resp = await tokenPackageService.search({
        sortBy: "ordering",
        sort: "asc",
      });
      this.setState({ tokens: resp.data.data || [] });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ fetching: false });
    }
  }

  render() {
    const { fetching, tokens, buying, open, selectedToken } = this.state;
    return (
      <>
        <Head>
          <title>Funds - Tokens</title>
        </Head>
        <div className="funds-tokens-box">
          <PageHeader title="Buy More Tokens" />
          <div className="tokens-section">
            <div className="tokens-card">
              <Row>
                {fetching ? (
                  <Loader />
                ) : tokens && tokens.length ? (
                  tokens.map((item) => (
                    <Col xs={12} md={8} xl={6} xxl={4} key={item._id}>
                      <TokenCard
                        name={item.name}
                        token={item.tokens}
                        price={item.price}
                        description={item.description}
                        onBuyToken={() => {
                          this.setState({ selectedToken: item });
                          this.setState({ open: true });
                        }}
                        buying={item._id === buying}
                      />
                    </Col>
                  ))
                ) : (
                  "There is no data"
                )}
              </Row>
              <Modal
                visible={open}
                title="Buy Now"
                onCancel={() => {
                  this.setState({ open: false });
                }}
                footer={[]}
              >
                {selectedToken ? (
                  <PaypalPayment
                    onApprove={async (tokenizedData) => {
                      const { nonce } = tokenizedData;
                      this.setState({ open: false });
                      await paypalRequestService.purchaseToken({
                        nonce,
                        tokenId: selectedToken._id,
                      });
                    }}
                    amount={selectedToken.price}
                    forceReRender={[selectedToken]}
                  />
                ) : (
                  "No selected token"
                )}
              </Modal>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatch = { buyTokenSuccess };
export default connect(mapStateToProps, mapDispatch)(UserTokensPage);
