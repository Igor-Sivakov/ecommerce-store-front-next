import { FC, PropsWithChildren } from 'react'

import { ISeo, Meta } from './meta/Meta'

import { Header } from './header/Header'
import { ErrorBanner } from '../common/error/ErrorBanner'

import styles from './Layout.module.scss'

interface ILayout extends ISeo {}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  ...rest
}) => {
  return (
    <>
      <Meta {...rest} />
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <main>
            <ErrorBanner />
            <Header />
            <section className={styles.content}>{children}</section>
          </main>
        </div>
      </div>
    </>
  )
}
