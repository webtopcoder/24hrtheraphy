import {
  PayPalScriptProvider,
  BraintreePayPalButtons,
} from "@paypal/react-paypal-js";
import { getGlobalConfig } from "@services/config";

import {
  getPaypalClientToken,
  paypalCheckoutRequest,
} from "@services/paypal.service";
import { useEffect, useState } from "react";

interface IPaypalPaymentProps {
  amount: string | number;
}

const config = getGlobalConfig();
const PAYPAL_CLIENT_ID = config.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PaypalPayment({ amount }: IPaypalPaymentProps) {
  const [clientToken, setClientToken] = useState<string>();

  useEffect(() => {
    getPaypalClientToken().then(setClientToken).catch(console.error);
  }, []);

  if (!clientToken) return null;

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
          const { nonce } = await actions.braintree.tokenizePayment(data);
          await paypalCheckoutRequest({ nonce, amount });
        }}
      />
    </PayPalScriptProvider>
  );
}
