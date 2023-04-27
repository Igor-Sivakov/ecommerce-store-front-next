import { FC } from 'react'

import { BsFillPersonVcardFill } from 'react-icons/bs'

import { ModalHeader } from '../../common/modal-header/ModalHeader'
import { UserForm } from '../../common/user-form/UserForm'

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'

import styles from './SignUp.module.scss'

type PropsType = {
  isOpen: boolean
  onClickCloseSignUp: (value: boolean) => void
}

export const SignUp: FC<PropsType> = ({ isOpen, onClickCloseSignUp }) => {
  return (
    <div className={styles.root}>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={() => onClickCloseSignUp(false)}
      >
        <DrawerOverlay />
        {/* @ts-ignore */}
        <DrawerContent>
          <ModalHeader
            title={'Sign up'}
            Icon={BsFillPersonVcardFill}
            onClickClose={onClickCloseSignUp}
          />

          <DrawerBody className={styles.body}>
            <div className={styles.form_container}>
              <div className={styles.heading}>
                <h1>become a member</h1>
                <p>To become a Lorian member, please sign up for free.</p>
              </div>

              <UserForm isSignUp={true} closeForm={onClickCloseSignUp} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
