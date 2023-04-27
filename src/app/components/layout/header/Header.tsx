import { FC, useEffect, useState } from 'react'

import { Cart } from '../cart/Cart'
import { PersonalCabinet } from '../personal-cabinet/PersonalCabinet'
import { SignUp } from '../sign-up/SignUp'
import { Login } from '../login/Login'
import { HeaderFull } from './adaptive-headers/HeaderFull'
import { HeaderBreakPoint945 } from './adaptive-headers/HeaderBreakPoint945'
import { HeaderBreakPoint599 } from './adaptive-headers/HeaderBreakPoint599'

import styles from './Header.module.scss'

export const Header: FC = () => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isOpenCabinet, setIsOpenCabinet] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenSignUp, setIsOpenSignUp] = useState(false)

  const [matches945, setMatches945] = useState(
    window.matchMedia('(max-width: 945px)').matches
  )
  const [matches599, setMatches599] = useState(
    window.matchMedia('(max-width: 599px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(max-width: 945px)')
      .addEventListener('change', (e) => setMatches945(e.matches))

    window
      .matchMedia('(max-width: 599px)')
      .addEventListener('change', (e) => setMatches599(e.matches))

    return () => {
      window
        .matchMedia('(max-width: 945px)')
        .removeEventListener('change', (e) => setMatches945(e.matches))
      window
        .matchMedia('(max-width: 599px)')
        .removeEventListener('change', (e) => setMatches599(e.matches))
    }
  }, [])

  return (
    <header className={styles.root}>
      {!matches945 && !matches599 ? (
        <HeaderFull
          setIsOpenCart={setIsOpenCart}
          setIsOpenCabinet={setIsOpenCabinet}
          setIsOpenLogin={setIsOpenLogin}
          setIsOpenSignUp={setIsOpenSignUp}
        />
      ) : matches945 && !matches599 ? (
        <HeaderBreakPoint945
          setIsOpenCart={setIsOpenCart}
          setIsOpenCabinet={setIsOpenCabinet}
          setIsOpenLogin={setIsOpenLogin}
          setIsOpenSignUp={setIsOpenSignUp}
        />
      ) : (
        <HeaderBreakPoint599
          setIsOpenCart={setIsOpenCart}
          setIsOpenCabinet={setIsOpenCabinet}
          setIsOpenLogin={setIsOpenLogin}
          setIsOpenSignUp={setIsOpenSignUp}
        />
      )}

      <Cart
        isOpen={isOpenCart}
        linkToSignUp={setIsOpenSignUp}
        onClickCloseCart={setIsOpenCart}
      />

      <PersonalCabinet
        isOpen={isOpenCabinet}
        onClickCloseCabinet={setIsOpenCabinet}
      />

      <Login
        isOpen={isOpenLogin}
        onClickCloseLogin={setIsOpenLogin}
        onClickLinkToSignUp={setIsOpenSignUp}
      />

      <SignUp isOpen={isOpenSignUp} onClickCloseSignUp={setIsOpenSignUp} />
    </header>
  )
}
