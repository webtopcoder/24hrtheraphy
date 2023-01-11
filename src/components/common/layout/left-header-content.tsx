import React from "react";
import { Menu, Dropdown } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { updateUIValue } from "src/redux/ui/actions";
import {
  IPerformerCategogies,
  IDataResponse,
  IPerformer,
  IStudio,
  IUser,
  StreamSettings,
} from "src/interfaces";
import "./left-header-content.less";
import { SETTING_KEYS } from "src/constants";
import classnames from "classnames";
import { MoreOutlined } from "@ant-design/icons";
import { NavBar, NavItem } from "@components/common/base/nav";

interface Props {
  loggedIn?: boolean;
  currentUser?: IPerformer & IUser & IStudio;
  performerCategories?: IDataResponse<IPerformerCategogies>;
  settings?: StreamSettings;
  pluralTextModel?: string;
}

const LeftHeaderContent = ({
  loggedIn,
  currentUser,
  pluralTextModel,
  performerCategories,
  settings,
}: Props) => {
  const [selectedKey, setSelectedKey] = React.useState("");
  const path =
    settings[SETTING_KEYS.OPTION_FOR_GROUP] === "webrtc" ? "webrtc/" : "";
  const CategorySubMenu = (
    <Menu mode="inline" style={{ display: "flex", flexWrap: "wrap" }}>
      {performerCategories.data.length > 0 &&
        performerCategories.data.map((category: IPerformerCategogies) => (
          <Menu.Item
            key={`category-${category._id}`}
            onClick={() => {
              setSelectedKey("");
            }}
          >
            <Link
              href={{
                pathname: "/our-therapists",
                query: {
                  slug: category.slug,
                  category: JSON.stringify(category),
                },
              }}
              as={`/our-therapists/${category.slug}`}
            >
              <a>{category.name}</a>
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  );

  const StreamingSubMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setSelectedKey("");
        }}
      >
        <Link href="/live">
          <a>Go Live</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={`/live/${path}groupchat`}>
          <a>Group Chat</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <NavBar activeKey={selectedKey}>
      <NavItem
        key="home"
        onClick={() => {
          setSelectedKey("home");
        }}
        aria-hidden="true"
      >
        <Link href="/" shallow>
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem
        key="how it works"
        onClick={() => {
          setSelectedKey("howitworks");
        }}
        aria-hidden="true"
      >
        <Link href="/how-it-works" shallow>
          <a>How It Works</a>
        </Link>
      </NavItem>
      <NavItem
        key="allModel"
        onClick={() => {
          setSelectedKey("model");
        }}
        aria-hidden="true"
      >
        <Link href="/our-therapists" as="/our-therapists">
          <a>Our Therapists</a>
        </Link>
      </NavItem>
      {/* <NavItem
        key="livecam"
        onClick={() => {
          setSelectedKey('LiveCam');
        }}
        aria-hidden="true"
      >
        <Link href="/livecam" shallow>
          <a>Our Therapists</a>
        </Link>
      </NavItem> */}
      <NavItem
        key="aboutus"
        onClick={() => {
          setSelectedKey("AboutUs");
        }}
        aria-hidden="true"
      >
        <Link href="/about-us" shallow>
          <a>About Us</a>
        </Link>
      </NavItem>
      <NavItem
        key="contactus"
        onClick={() => {
          setSelectedKey("contactUS");
        }}
        aria-hidden="true"
      >
        <Link href="/contact-us" shallow>
          <a>Contact Us</a>
        </Link>
      </NavItem>
      {performerCategories.data.length > 0 && (
        <Dropdown
          overlay={CategorySubMenu}
          overlayClassName="cate-sub-menu-overlay"
        >
          <NavItem>
            <span>Categories</span>
          </NavItem>
        </Dropdown>
      )}

      {loggedIn && currentUser?._id && currentUser?.role === "performer" && (
        <>
          <NavItem
            key="live"
            className={classnames("hidden-sm", {})}
            onClick={() => {
              setSelectedKey("live");
            }}
            aria-hidden="true"
          >
            <Link href="/live">
              <a>Go Live</a>
            </Link>
          </NavItem>
          <NavItem
            key="groupchat"
            className={classnames("hidden-sm", {})}
            onClick={() => {
              setSelectedKey("groupchat");
            }}
            aria-hidden="true"
          >
            <Link href={`/live/${path}groupchat`}>
              <a>Group Chat</a>
            </Link>
          </NavItem>
          <Dropdown overlay={StreamingSubMenu}>
            <NavItem className="visible-sm">
              <MoreOutlined />
            </NavItem>
          </Dropdown>
        </>
      )}
    </NavBar>
  );
};

LeftHeaderContent.defaultProps = {
  loggedIn: false,
  currentUser: null,
  settings: null,
  pluralTextModel: "",
  performerCategories: {
    total: 0,
    data: [],
  },
};
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  ...state.performer.performers,
  ...state.ui,
});
const mapDispatch = { updateUIValue };
export default connect(mapStateToProps, mapDispatch)(LeftHeaderContent);
