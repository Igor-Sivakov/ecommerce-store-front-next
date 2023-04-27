import { FC, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import styles from './AnimatedImage.module.scss'

type PropsType = {
  image: string | StaticImageData
  styleHeight?: number
  width: number
  height: number
}

export const AnimatedImage: FC<PropsType> = ({
  image,
  styleHeight,
  width,
  height,
}) => {
  const [animated, setAnimated] = useState(true)

  useEffect(() => {
    setAnimated(false)
    setTimeout(() => setAnimated(true), 100)
  }, [image])

  return (
    <div className={styles.root}>
      {animated && (
        <Image
          className={styles.image}
          style={
            styleHeight
              ? { height: `${styleHeight * 1.42}px` }
              : { height: '100%' }
          }
          src={image}
          width={width}
          height={height}
          alt='Product photo'
        />
      )}
    </div>
  )
}
