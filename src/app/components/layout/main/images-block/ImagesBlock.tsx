import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { AnimatedImage } from '@/app/components/common/animated-img/AnimatedImage'

import styles from './ImagesBlock.module.scss'

type PropsType = {
  images: string[]
}

export const ImagesBlock: FC<PropsType> = ({ images }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0)
  const [width, setWidth] = useState(380)
  const [height, setHeight] = useState(570)

  const mainImgRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setHeight((mainImgRef.current?.clientHeight as number) + 30)
    setWidth(mainImgRef.current?.clientWidth as number)
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setHeight(mainImgRef.current?.clientHeight as number)
      setWidth(mainImgRef.current?.clientWidth as number)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.small_images__container}>
        <div style={{ height: `${height}px` }} className={styles.small_images}>
          {images.map((image, i) => (
            <div
              onClick={() => setSelectedImgIndex(i)}
              key={image}
              className={styles.image}
            >
              <Image src={image} width={200} height={280} alt='product photo' />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.big_image__container}>
        <div ref={mainImgRef} className={styles.big_image}>
          <AnimatedImage
            width={400}
            height={570}
            styleHeight={width}
            image={images[selectedImgIndex] as string}
          />
        </div>
      </div>
    </div>
  )
}
