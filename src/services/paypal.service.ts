import { getGlobalConfig } from "@services/config";

interface IPaypalCheckoutRequest {
  amount: string | number;
  nonce: string;
}

export async function paypalCheckoutRequest(
  { nonce, amount }: IPaypalCheckoutRequest,
  signal?: AbortSignal
) {
  const BASE_URL = getGlobalConfig().NEXT_PUBLIC_API_ENDPOINT;
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
      signal,
    })
  ).json();
  return transaction;
}

export async function getPaypalClientToken(signal?: AbortSignal) {
  const BASE_URL = getGlobalConfig().NEXT_PUBLIC_API_ENDPOINT;
  const request = await fetch(`${BASE_URL}/paypal/client_token`, { signal });
  const response = await request.json();
  return response.clientToken;
}
