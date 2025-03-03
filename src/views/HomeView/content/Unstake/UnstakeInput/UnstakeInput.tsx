import React from 'react'
import { useConfig } from 'config'
import { useStore } from 'hooks'

import { Input } from 'views/HomeView/common'
import { stakeCtx } from 'views/HomeView/StakeContext/util'


const storeSelector = (store: Store) => ({
  mintTokenBalance: store.account.balances.data.mintTokenBalance,
  maxWithdrawAssets: store.vault.user.balances.withdraw.maxAssets,
})

const UnstakeInput: React.FC = () => {
  const { sdk } = useConfig()
  const { field } = stakeCtx.useData()

  const { mintTokenBalance, maxWithdrawAssets } = useStore(storeSelector)

  return (
    <Input
      balance={mintTokenBalance}
      token={sdk.config.tokens.mintToken}
      // isLoading={unstake.isSubmitting}
      onMaxButtonClick={() => field.setValue(maxWithdrawAssets)}
    />
  )
}


export default React.memo(UnstakeInput)
