export interface CreateWalletResponse {
  jsonrpc: string,
  id: number,
  result: {
    check_tx: {
      code: number,
      data?: any,
      log: string
      info: string,
      gas_wanted: string
      gas_used: string
      events: CreateWalletEvent[]
      codespace: string
    }
    deliver_tx: {
      code: number,
      data?: any,
      log: string
      info: string,
      gas_wanted: string
      gas_used: string
      events: CreateWalletEvent[]
      codespace: string
    },
    hash: string,
    height: string
  }
}

export interface CreateWalletEvent {
  type: string,
  attributes: CreateWalletEventAttributes[]
}

export interface CreateWalletEventAttributes {
  key: string,
  value: string,
  index: boolean
}
