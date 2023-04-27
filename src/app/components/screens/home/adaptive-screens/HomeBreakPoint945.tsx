import { FC } from 'react'
import Image from 'next/image'

import mainImg from '../../../../assets/img/main.png'

import { HotSale } from '../../../layout/main/hot-sale/HotSale'
import { HomeInformation } from '../../../layout/main/home-information/HomeInformation'
import { Column } from '../../../common/grid/Column'
import { Row } from '../../../common/grid/Row'
import { LatestNews } from '../../../layout/main/latest-news/LatestNews'
import { NewArrival } from '../../../layout/main/new-arrival/NewArrival'

import styles from '../Home.module.scss'

export const HomeBreakPoint945: FC = () => {
  return (
    <>
      <Row>
        <Column size={12}>
          <section className={styles.image}>
            <Image src={mainImg} alt='main photo' width={680} />
          </section>
        </Column>
      </Row>

      <Row>
        <Column size={12}>
          <HotSale />
          <HomeInformation />
        </Column>
      </Row>

      <Row>
        <NewArrival columnSize={12} />
      </Row>

      <Row>
        <LatestNews columnSize={12} />
      </Row>
    </>
  )
}
