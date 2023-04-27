import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import aboutImg1 from '../../../assets/img/woman-in-red.jpg'
import aboutImg2 from '../../../assets/img/woman-in-red2.jpg'
import aboutImg3 from '../../../assets/img/woman-in-red3.jpg'

import { Layout } from '../../layout/Layout'
import { SubscribeForm } from './subscribe-form/SubscribeForm'

import styles from './About.module.scss'

export const About: FC = () => {
  return (
    <Layout title='About' description='Some description for SEO optimization.'>
      <div className={styles.root}>
        <section className={styles.first_block}>
          <Image src={aboutImg1} width={1440} height={700} alt='woman in red' />
          <h1>About Lorian</h1>

          <div className={styles.description}>
            <h4>hardcore fashion</h4>
            <p>
              Dedicated to the cloth, the craft,
              <br />
              the culture and the history of fashion.
            </p>
          </div>
        </section>

        <section className={styles.second_block}>
          <div className={styles.text}>
            <p>
              Fashion. It’s our passion. It’s in our blood. But we are not just
              another fashion brand. We’re RAW. Since 1998, we have been pushing
              the boundaries of styled design, manifesting our own future of
              fashion.
            </p>
            <p>
              Hardcore Fashion is the philosophy that pushes us to invent,
              explore and take craftsmanship to another level. Down to the
              smallest detail and with a strong belief that there is no limit to
              what fashion can do. With innovation, sustainability and
              creativity at our core, we aim to bring pioneering styles and
              challenge industry standards, while constantly trying to improve
              our impact on people and planet.
            </p>
          </div>
        </section>

        <section className={styles.third_block}>
          <Image src={aboutImg2} width={1440} height={700} alt='woman in red' />

          <div className={styles.info_third}>
            <h1>the art of style</h1>
            <Link href=''>explore</Link>
          </div>
        </section>

        <section className={styles.fourth_block}>
          <Image src={aboutImg3} width={1440} height={700} alt='woman in red' />

          <div className={styles.info_fourth}>
            <h1>crossovers</h1>
            <Link href=''>explore</Link>
          </div>
        </section>

        <SubscribeForm />
      </div>
    </Layout>
  )
}
