import React, { FC } from 'react'

import { Row } from '../../../common/grid/Row'
import { HeaderButtons } from '../buttons/HeaderButtons'
import { HeaderLogo } from '../logo/HeaderLogo'
import { HeaderMenu } from '../menu/HeaderMenu'
import { HeaderProfile } from '../profile/HeaderProfile'

type PropsType = {
  setIsOpenCart: (value: boolean) => void
  setIsOpenCabinet: (value: boolean) => void
  setIsOpenLogin: (value: boolean) => void
  setIsOpenSignUp: (value: boolean) => void
}

export const HeaderBreakPoint599: FC<PropsType> = ({
  setIsOpenCart,
  setIsOpenCabinet,
  setIsOpenLogin,
  setIsOpenSignUp,
}) => {
  return (
    <>
      <Row>
        <HeaderLogo columnSize={5} />
        <HeaderProfile
          columnSize={7}
          onClickOpenCabinet={setIsOpenCabinet}
          onClickOpenLogin={setIsOpenLogin}
          onClickOpenSignUp={setIsOpenSignUp}
        />
      </Row>

      <Row>
        <HeaderButtons columnSize={12} onClickOpenCart={setIsOpenCart} />
      </Row>

      <Row>
        <HeaderMenu columnSize={12} />
      </Row>
    </>
  )
}
