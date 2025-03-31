export default {
  // Date
  blocksInDay: 6646,
  secondsInBlock: 13,
  blocksInYear: 2427458,
  secondsInYear: 31536000,

  // Amounts
  amount0: 0n,
  gwei: 1000000000n,
  amount1: 1000000000000000000n,
  amount10: 10000000000000000000n,
  amount32: 32000000000000000000n,
  amount100: 100000000000000000000n,
  minimalAmount: 100000000000000n, // 0.0001
  maxUint128: 340282366920938463463374607431768211455n, // (2n ** 128n) - 1n
  maxUint256: 115792089237316195423570985008687907853269984665640564039457584007913129639935n, // (2n ** 256n) - 1n

  // Addresses
  emptyAddress: '0x1111111111111111111111111111111111111111',
  genesisVaultAddress: {
    mainnet: '0xAC0F906E433d58FA868F936E8A43230473652885',
    chiado: '0xF82f6E46d0d0a9536b9CA4bc480372EeaFcd9E6c',
    gnosis: '0x4b4406Ed8659D03423490D8b62a1639206dA0A7a',
  } as const,
}
