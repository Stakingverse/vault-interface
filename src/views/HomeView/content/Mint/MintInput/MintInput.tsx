import React from 'react'
import { useConfig } from 'config'
import { useStore } from 'hooks'

import { stakeCtx } from 'views/HomeView/StakeContext/util'
import { Input } from 'views/HomeView/common'

import messages from './messages'


const storeSelector = (store: Store) => ({
  maxMintShares: store.vault.user.balances.mintToken.maxMintShares,
})

const MintInput: React.FC = () => {
  const { field } = stakeCtx.useData()

  const { sdk } = useConfig()
  const { maxMintShares } = useStore(storeSelector)

  return (
    <Input
      balance={maxMintShares}
      token={sdk.config.tokens.mintToken}
      balanceTitle={{
        ...messages.balanceTitle,
        values: { mintToken: sdk.config.tokens.mintToken },
      }}
      onMaxButtonClick={() => field.setValue(maxMintShares)}
    />
  )
}


export default React.memo(MintInput)
