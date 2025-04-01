// ATTN Be sure to add the image to the images folder in the root of the project


export const logos = [
  'token/ETH',
  'token/GNO',
  'token/xDAI',
  'token/osETH',
  'token/osGNO',

  'connector/MMI',
  'connector/okx',
  'connector/rabby',
  'connector/taho',
  'connector/zengo',
  'connector/ledger',
  'connector/portis',
  'connector/coinbase',
  'connector/metamask',
  'connector/gnosisSafe',
  'connector/trustWallet',
  'connector/braveBrowser',
  'connector/walletConnect',
  'connector/monitorAddress',

  'image/file',
  'image/error',
  'image/magic',
  'image/success',
  'image/information',

  'language/en',
  'language/de',
  'language/fr',
  'language/es',
  'language/pt',
  'language/ru',
  'language/zh',

  'theme/sun',
  'theme/moon',

  // 'client/avado',
  // 'client/custom',
  // 'client/dappnode',
  // 'client/kubernetes',
  //
  // 'network/arbitrum',
] as const

export const icons = [
  'arrow/right',
  'arrow/down',
  'arrow/left',
  'arrow/up',

  // 'arrows/right',
  // 'arrows/down',
  // 'arrows/left',
  // 'arrows/up',

  // 'icon/dao',
  'icon/gas',
  // 'icon/off',
  // 'icon/flip',
  // 'icon/list',
  // 'icon/dots',
  // 'icon/lock',
  // 'icon/user',
  'icon/plus',
  'icon/info',
  // 'icon/edit',
  'icon/gear',
  'icon/copy',
  'icon/link',
  // 'icon/swap',
  // 'icon/logs',
  // 'icon/cube',

  // 'icon/trash',
  // 'icon/chats',
  // 'icon/email',
  // 'icon/money',
  // 'icon/earth',
  // 'icon/theme',
  'icon/close',
  'icon/check',
  // 'icon/users',
  // 'icon/minus',
  'icon/loader',
  // 'icon/search',
  // 'icon/filter',
  // 'icon/trophy',
  // 'icon/reSync',
  'icon/upload',
  // 'icon/restart',
  // 'icon/storage',
  // 'icon/actions',
  // 'icon/percent',
  // 'icon/control',
  // 'icon/rewards',
  'icon/warning',
  'icon/calendar',

  'currency/usd',
  'currency/eur',
  'currency/gbp',
  'currency/cny',
  'currency/jpy',
  'currency/krw',
  'currency/aud',
] as const


export const images = [
  ...icons,
  ...logos,
] as const

export default images
