import Loader from "@components/common/base/loader";
import {
  PayPalScriptProvider,
  BraintreePayPalButtons,
  BraintreePayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { BraintreeTokenizePayload } from "@paypal/react-paypal-js/dist/types/types/braintree/commonsTypes";
import { getGlobalConfig } from "@services/config";

import { paypalRequestService } from "@services/paypal.service";
import { useEffect, useState } from "react";

interface IPaypalPaymentProps
  extends Omit<
    BraintreePayPalButtonsComponentProps,
    "createOrder" | "onApprove"
  > {
  amount: string | number;
  onApprove?: (
    data: BraintreeTokenizePayload
  ) => void;
}

export default function PaypalPayment({
  amount,
  onApprove,
  ...otherProps
}: IPaypalPaymentProps) {
  const config = getGlobalConfig();
  const PAYPAL_CLIENT_ID = config.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const [clientToken, setClientToken] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    paypalRequestService.
    getPaypalClientToken(controller.signal)
      .then((clientToken) => setClientToken(clientToken))
      .catch(console.error);
    return () => {
      controller.abort();
    };
  }, []);

  if (!clientToken) return <Loader spinning={true} />;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        "data-client-token": clientToken,
        currency: "USD",
      }}
    >
      <BraintreePayPalButtons
        createOrder={async (_, actions) => {
          return actions.braintree.createPayment({
            flow: "checkout",
            amount,
            currency: "USD",
            intent: "capture",
          });
        }}
        onApprove={async (data, actions) => {
          const tokenizedData = await actions.braintree.tokenizePayment(data);
          onApprove(tokenizedData);
        }}
        {...otherProps}
      />
    </PayPalScriptProvider>
  );
}
