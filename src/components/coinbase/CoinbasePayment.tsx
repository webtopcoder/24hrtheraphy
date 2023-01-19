import Loader from "@components/common/base/loader";
import { getGlobalConfig } from "@services/config";

import { coinbaseRequestService } from "@services/coinbase.service";
import { useEffect, useState } from "react";
import { Button, Image } from "antd";

import "./index.less";

interface ICoinbasePaymentProps {
  tokenPackage: string;
}

export default function CoinbasePayment({
  tokenPackage,
  ...otherProps
}: ICoinbasePaymentProps) {
  const config = getGlobalConfig();
  const controller = new AbortController();

  const createCharge = () =>
    coinbaseRequestService
      .createCharge({ tokenPackage }, controller.signal)
      .then((charge) => {
        window.open(charge.hosted_url);
      })
      .catch(console.error);

  return (
    <Button
      className="coinbase-payment-button"
      type="primary"
      onClick={createCharge}
    >
      <img
        src="/icons/coinbase-logo.svg"
        className="coinbase-payment-button-logo"
      />
      Pay with Coinbase
    </Button>
  );
}
