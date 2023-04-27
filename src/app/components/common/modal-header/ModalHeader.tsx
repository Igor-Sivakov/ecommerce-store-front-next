import { FC } from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'
import { IconType } from 'react-icons'

import { DrawerHeader } from '@chakra-ui/react'

import styles from './ModalHeader.module.scss'

type PropsType = {
  title: string
  Icon: IconType
  onClickClose: (value: boolean) => void
}

export const ModalHeader: FC<PropsType> = ({ title, Icon, onClickClose }) => {
  return (
    <DrawerHeader className={styles.heading}>
      <div className={styles.title}>
        <Icon />
        <span>{title}</span>
      </div>

      <button onClick={() => onClickClose(false)} className={styles.close_btn}>
        <AiFillCloseCircle />
      </button>
    </DrawerHeader>
  )
}
