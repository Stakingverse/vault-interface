const shortenAddress = (address: string | null | undefined, size: number = -4) => (
  address ? `${address.slice(0, 4)}...${address.slice(size)}` : ''
)


export default shortenAddress
