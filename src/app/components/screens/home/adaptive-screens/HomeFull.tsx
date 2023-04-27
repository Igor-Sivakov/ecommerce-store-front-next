import Image from 'next/image'
import { FC } from 'react'

import mainImg from '../../../../assets/img/main.png'

import { Column } from '../../../common/grid/Column'
import { Row } from '../../../common/grid/Row'
import { HotSale } from '../../../layout/main/hot-sale/HotSale'
import { HomeInformation } from '../../../layout/main/home-information/HomeInformation'
import { LatestNews } from '../../../layout/main/latest-news/LatestNews'
import { NewArrival } from '../../../layout/main/new-arrival/NewArrival'

import styles from '../Home.module.scss'

export const HomeFull: FC = () => {
  return (
    <>
      <Row>
        <Column size={7}>
          <section className={styles.image}>
            <Image src={mainImg} alt='main photo' width={680} />
          </section>
        </Column>

        <Column size={5}>
          <HotSale />
          <HomeInformation />
        </Column>
      </Row>

      <Row>
        <NewArrival columnSize={7} />
        <LatestNews columnSize={5} />
      </Row>
    </>
  )
}
