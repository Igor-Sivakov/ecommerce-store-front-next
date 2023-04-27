import { FC } from 'react'

import { AiOutlineLogin } from 'react-icons/ai'

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import { ModalHeader } from '../../common/modal-header/ModalHeader'
import { LoginForm } from './login-form/LoginForm'

import styles from './Login.module.scss'

type PropsType = {
  isOpen: boolean
  onClickCloseLogin: (value: boolean) => void
  onClickLinkToSignUp: (value: boolean) => void
}

export const Login: FC<PropsType> = ({
  isOpen,
  onClickCloseLogin,
  onClickLinkToSignUp,
}) => {
  const handleLinkToSignUp = () => {
    onClickCloseLogin(false)
    onClickLinkToSignUp(true)
  }

  return (
    <div className={styles.root}>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={() => onClickCloseLogin(false)}
      >
        <DrawerOverlay />
        {/* @ts-ignore */}
        <DrawerContent>
          <ModalHeader
            title={'Login'}
            Icon={AiOutlineLogin}
            onClickClose={onClickCloseLogin}
          />

          <DrawerBody className={styles.body}>
            <h1 className={styles.heading}>my account</h1>

            <div className={styles.form_container}>
              <LoginForm onClickCloseLogin={onClickCloseLogin} />

              <section className={styles.create_account_side}>
                <h4>New at Lorian.com</h4>
                <p>Registration is not obligated.</p>

                <button onClick={handleLinkToSignUp}>create account</button>
              </section>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
