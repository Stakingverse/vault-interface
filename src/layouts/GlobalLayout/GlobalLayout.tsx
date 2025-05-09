'use client'
import React, { useEffect, useMemo } from 'react'
import intl from 'modules/intl'
import theme from 'modules/theme'
import { polyfills } from 'helpers'
import { ConfigProvider } from 'config'
import { Provider as ReduxProvider } from 'react-redux'
import device, { onDeviceChange } from 'modules/device'
import { createVaultInterfaceStore } from 'store/entries/vault-interface'

import { ImagesProvider } from 'components'
import AppLayout from 'layouts/AppLayout/AppLayout'

import { allLanguages } from 'scripts/collectMessages/languages'


polyfills.promiseAllSettled()

// @ts-ignore: this crutch for fix redux-devtools
BigInt.prototype.toJSON = function () { return this.toString() }

type GlobalLayoutProps = {
  networkId: NetworkIds
  children: React.ReactNode
  locale: Intl.LanguagesKeys
  serverTheme: Theme.Input
  serverDevice: Device.Context
  vaultBase: Partial<Store['vault']['base']> | null
}

const GlobalLayout: React.FC<GlobalLayoutProps> = (values) => {
  const { children, networkId, locale: initialLocale, serverDevice, serverTheme, vaultBase } = values

  // Strange "_next" type values may come in
  const isValidLocale = allLanguages.includes(initialLocale)
  const locale = isValidLocale ? initialLocale : 'en'

  const themeContext = theme.useInit(serverTheme)

  const deviceContext = device.useInit({
    initialValue: serverDevice,
    onChange: onDeviceChange,
  })

  useEffect(() => {
    // reload page after 24 hours
    setTimeout(() => window.location.reload(), 60 * 60 * 24 * 1000)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [ locale ])

  const store = useMemo(() => {
    const skipSSR = typeof window !== 'undefined' && window.location.search
      ? new URLSearchParams(window.location.search).get('skipSSR') === 'true'
      : false

    if (vaultBase && !skipSSR) {
      return createVaultInterfaceStore({
        vault: {
          base: vaultBase,
        },
      })
    }

    return createVaultInterfaceStore()
  }, [ vaultBase ])

  return (
    <theme.Provider value={themeContext}>
      <device.Provider value={deviceContext}>
        <intl.IntlProvider
          locale={locale as Intl.LanguagesKeys}
          locales={allLanguages as unknown as Intl.LanguagesKeys[]}
        >
          <ReduxProvider store={store}>
            <ConfigProvider serverNetworkId={networkId}>
              <ImagesProvider>
                <div>
                  <AppLayout>
                    {children}
                  </AppLayout>
                  <div id="tooltips" />
                  <div id="bottomLoader" />
                  <output id="notifications" className="block" />
                </div>
              </ImagesProvider>
            </ConfigProvider>
          </ReduxProvider>
        </intl.IntlProvider>
      </device.Provider>
    </theme.Provider>
  )
}


export default GlobalLayout
