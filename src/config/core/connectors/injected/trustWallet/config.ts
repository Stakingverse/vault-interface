import { walletTitles } from 'helpers/constants'
import methods from 'helpers/methods'

import messages from '../../../messages'


const getSpecialErrors = (error: any) => {
  const errorMessage = typeof error === 'string' ? error : error.message

  if (/no ethereum provider/i.test(errorMessage)) {
    return messages.connectErrors.noProvider
  }

  if (/user rejected the request/i.test(errorMessage)) {
    return messages.connectErrors.authorize
  }

  return null
}

const target = () => ({
  id: 'trustwallet',
  name: 'Trust wallet Provider',
  provider: methods.getInjectedProvider('trustWallet'),
})

const getConnector = async () => {
  const InjectedConnector = (await import('../../custom-connectors/InjectedConnector')).default

  //ATTN https://github.com/wevm/wagmi/blob/main/packages/core/src/connectors/injected.ts#L168
  const connector = new InjectedConnector({ target, shimDisconnect: false })

  return connector
}


export default {
  activationMessage: messages.authMessages.waitingAuth,
  name: walletTitles.trustWallet,
  getSpecialErrors,
  getConnector,
} as const
