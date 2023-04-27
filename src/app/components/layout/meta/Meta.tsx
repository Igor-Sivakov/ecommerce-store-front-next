import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { siteName, titleMerge } from './meta.config'

import { onlyText } from '@/app/utils/clear-text'

import { useRouter } from 'next/router'

export interface ISeo {
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article' | 'product'
}

export const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image = '../../../assets/img/logo.svg',
  children,
  type = 'website',
}) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.APP_URL}${asPath}`

  return (
    <>
      <Head>
        <title itemProp='headline'>{titleMerge(title)}</title>
        {description ? (
          <>
            <meta
              itemProp='description'
              name='description'
              content={onlyText(description, 152)}
            />
            <link rel='canonical' href={currentUrl} />
            <meta property='og:type' content={type} />
            <meta property='og:locale' content='en' />
            <meta property='og:title' content={titleMerge(title)} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={image} />
            <meta property='og:site_name' content={siteName} />
            <meta
              property='og:description'
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
      {children}
    </>
  )
}
