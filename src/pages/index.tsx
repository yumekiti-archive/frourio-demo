import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { data, error } = useAspidaSWR(apiClient.hoge)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>{data.hoge}</div>
}

export default Home
