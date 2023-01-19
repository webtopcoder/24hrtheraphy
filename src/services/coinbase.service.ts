import { APIRequest } from "./api-request";

interface ICoinbaseChargeRequest {
  tokenPackage: string;
}

class CoinbaseRequestService extends APIRequest {
  async createCharge(
    { tokenPackage }: ICoinbaseChargeRequest,
    signal?: AbortSignal
  ): Promise<any> {
    return this.post(`/coinbase/charge`, { tokenPackage }, {}, signal);
  }
}

export const coinbaseRequestService = new CoinbaseRequestService();
