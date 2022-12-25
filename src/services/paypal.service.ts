import { getGlobalConfig } from "@services/config";

interface IPaypalCheckoutRequest {
  amount: string | number;
  nonce: string;
}

const config = getGlobalConfig();
const BASE_URL = config.NEXT_PUBLIC_API_ENDPOINT;

export async function paypalCheckoutRequest({
  nonce,
  amount,
}: IPaypalCheckoutRequest) {
  const transaction = await (
    await fetch(`${BASE_URL}/paypal/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nonce,
        amount,
      }),
    })
  ).json();
  return transaction;
}

export async function getPaypalClientToken() {
  const request = await fetch(`${BASE_URL}/paypal/client_token`);
  const response = await request.json();
  return response.clientToken;
}
