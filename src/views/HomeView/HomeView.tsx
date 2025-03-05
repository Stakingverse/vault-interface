'use client'
import React from 'react'

import { ConnectWalletModal, SwitchAccountModal, TokenTransactionsModal } from 'layouts/modals'

import StakeContext from './StakeContext/StakeContext'


const HomeView: React.FC = () => (
  <div className="width-container">
    <div className="max-w-[515rem] mx-auto mb-40 mt-96">
      <StakeContext />
      <ConnectWalletModal />
      <SwitchAccountModal />
      <TokenTransactionsModal />
    </div>
  </div>
)


export default HomeView
