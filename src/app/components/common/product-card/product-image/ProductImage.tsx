import { FC, useState } from 'react'

import plugImg from '../../../../assets/img/plug.jpeg'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import { AnimatedImage } from '../../animated-img/AnimatedImage'

import styles from '../ProductCard.module.scss'

type PropsType = {
  isActive: boolean
  images: string[]
}

export const ProductImage: FC<PropsType> = ({ isActive, images }) => {
  const [showedPhoto, setShowedPhoto] = useState(0)

  const handelPrevPhoto = () => {
    setShowedPhoto((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handelNextPhoto = () => {
    setShowedPhoto((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.image_box}>
      {isActive && (
        <div onClick={handelPrevPhoto} className={styles.arrow_btn}>
          <AiOutlineLeft />
        </div>
      )}

      <div className={styles.image}>
        <AnimatedImage
          width={180}
          height={240}
          image={images.length < 2 ? plugImg : images[showedPhoto]}
        />
      </div>

      {isActive && (
        <div onClick={handelNextPhoto} className={styles.arrow_btn}>
          <AiOutlineRight />
        </div>
      )}
    </div>
  )
}
