import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../../assets/img/logo.svg'

import { Column } from '@/app/components/common/grid/Column'

import styles from './HeaderLogo.module.scss'

type PropsType = {
  columnSize: number
}

export const HeaderLogo: FC<PropsType> = ({ columnSize }) => {
  return (
    <Column size={columnSize}>
      <Link href={'/'} className={styles.root}>
        <Image
          className={styles.image}
          src={logo}
          width={80}
          height={80}
          alt='Lorian logo'
        />
        <div>
          <div className={styles.logo_name_top}>LORIAN</div>
          <div className={styles.logo_name_bottom}>STORE</div>
        </div>
      </Link>
    </Column>
  )
}
