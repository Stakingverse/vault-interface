import React from 'react'
import methods from 'sw-methods'
import { useConfig } from 'config'
import { commonMessages } from 'helpers'

import { stakeCtx } from 'views/HomeView/StakeContext/util'

import Row from './Row/Row'

import messages from './messages'


const Data: React.FC = () => {
  const { sdk } = useConfig()
  const { data } = stakeCtx.useData()

  const depositToken = sdk.config.tokens.depositToken

  return (
    <>
      <Row
        className="pb-12"
        text={commonMessages.yourApy}
        tooltip={{
          ...messages.tooltips.apy,
          values: { depositToken },
        }}
        isFetching={data.isFetching}
        value={methods.formatApy(data.apy.user)}
        isMagicValue={Boolean(data.boost.shares)}
        dataTestId="user-apy"
      />
      <Row
        className="py-12 border-top border-moon/10"
        text={messages.stake}
        tooltip={{
          ...messages.tooltips.stake,
          values: { depositToken },
        }}
        isFetching={data.isFetching}
        dataTestId="user-stake"
        value={{
          amount: data.stakedAssets,
          token: sdk.config.tokens.depositToken,
        }}
      />
    </>
  )
}


export default React.memo(Data)
