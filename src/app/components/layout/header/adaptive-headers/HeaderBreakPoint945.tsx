import { FC } from 'react'

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

export const HeaderBreakPoint945: FC<PropsType> = ({
  setIsOpenCart,
  setIsOpenCabinet,
  setIsOpenLogin,
  setIsOpenSignUp,
}) => {
  return (
    <>
      <Row>
        <HeaderLogo columnSize={4} />
        <HeaderButtons columnSize={4} onClickOpenCart={setIsOpenCart} />
        <HeaderProfile
          columnSize={4}
          onClickOpenCabinet={setIsOpenCabinet}
          onClickOpenLogin={setIsOpenLogin}
          onClickOpenSignUp={setIsOpenSignUp}
        />
      </Row>

      <Row>
        <HeaderMenu columnSize={12} />
      </Row>
    </>
  )
}
