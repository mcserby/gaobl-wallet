export interface WalletCreationResponse {
  privateKey: string,
  publicKey: string
}

export interface SignWalletRequest {
  wallet: {
    nickname: string,
    publicKey: string
  },
  privateKey: string
}

export interface SignWalletResponse {
  signature: string
}

export interface WalletInfoResponse {
  jsonrpc: string,
  id: number,
  result: {
    response: {
      code: number,
      log: string,
      info: string,
      index: number,
      key: string,
      value: string,
      proofOps: any,
      height: string,
      codespace: string
    }
  }
}

export interface WalletInfoListElement {
  id: string,
  amount: number,
  nickname: string
}
