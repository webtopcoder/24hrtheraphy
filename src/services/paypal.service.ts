import { APIRequest } from "./api-request";

interface IPaypalCheckoutRequest {
  nonce: string;
  tokenId: string;
}

class PaypalRequestService extends APIRequest {
  async purchaseToken(
    { nonce, tokenId }: IPaypalCheckoutRequest,
    signal?: AbortSignal
  ) {
    return this.post(
      `/paypal/checkout/token/${tokenId}`,
      { nonce },
      {},
      signal
    );
  }

  async getPaypalClientToken(signal?: AbortSignal) {
    const response = await this.get(`/paypal/client_token`, {}, signal);
    return response.data.clientToken;
  }
}

export const paypalRequestService = new PaypalRequestService();
