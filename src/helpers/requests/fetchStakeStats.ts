import methods from 'helpers/methods'


type StakeStatsQueryPayload = {
  osTokenHolder: {
    apy: string
    timestamp: string
    totalAssets: string
    earnedAssets: string
  }[]
}

type StakeStatsVariables = {
  first?: number
  where: {
    osTokenHolder: string
    timestamp_gte?: string
    timestamp_lte?: string
  }
}

const fetchStakeStats = ({ url, variables }: { url: string, variables: StakeStatsVariables }) => {
  return methods.fetch<StakeStatsQueryPayload>(url, {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query StakeStats(
          $where: OsTokenHolderStats_filter
          $first: Int
        ) {
          osTokenHolder: osTokenHolderStats_collection(
            interval: day
            first: $first
            where: $where
          ) {
            apy
            timestamp
            totalAssets
            earnedAssets
          }
        }
      `,
      variables,
    }),
  })
}


export default fetchStakeStats
