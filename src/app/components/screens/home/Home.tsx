import { FC, useEffect, useState } from 'react'

import { Layout } from '../../layout/Layout'
import { HomeBreakPoint945 } from './adaptive-screens/HomeBreakPoint945'
import { HomeFull } from './adaptive-screens/HomeFull'

const Home: FC = () => {
  const [matches945, setMatches945] = useState(
    window.matchMedia('(max-width: 945px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(max-width: 945px)')
      .addEventListener('change', (e) => setMatches945(e.matches))

    return () => {
      window
        .matchMedia('(max-width: 945px)')
        .removeEventListener('change', (e) => setMatches945(e.matches))
    }
  }, [])

  return (
    <Layout title='Home' description='Some description for SEO optimization.'>
      {matches945 ? <HomeBreakPoint945 /> : <HomeFull />}
    </Layout>
  )
}

export default Home
