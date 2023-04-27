import { FC, useEffect, useState } from 'react'

import { CiEdit } from 'react-icons/ci'
import { BsPersonBoundingBox } from 'react-icons/bs'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useAuth } from '@/app/hooks/useAuth'
import { useActions } from '@/app/hooks/useActions'

import { profileAPI } from '@/app/api/profileAPI'

import { ICardUpdate } from '@/app/types/card.interface'

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import { UserData } from './user-data/UserData'
import { CardData } from './card-data/CardData'
import { UserForm } from '../../common/user-form/UserForm'
import { ModalHeader } from '../../common/modal-header/ModalHeader'
import { CardForm } from './card-form/CardForm'

import styles from './PersonalCabinet.module.scss'

type PropsType = {
  isOpen: boolean
  onClickCloseCabinet: (value: boolean) => void
}

export const PersonalCabinet: FC<PropsType> = ({
  isOpen,
  onClickCloseCabinet,
}) => {
  const [isEditedUserData, setEditUserData] = useState(false)
  const [isEditedCardData, setEditCardData] = useState(false)

  const queryClient = useQueryClient()
  const { user } = useAuth()
  const { addError } = useActions()

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: 'card',
    queryFn: async () => (await profileAPI.getCard())[0],
  })

  useEffect(() => {
    if (isError) refetch()
  }, [isError])

  const mutation = useMutation(
    ['card'],
    (cardData: ICardUpdate) => profileAPI.createUpdateCard(cardData),
    {
      onSuccess(data) {
        queryClient.setQueriesData(['card'], data)
      },
      onError(error) {
        addError(
          'Ups, something went wrong, failed to update or create card :('
        )
        console.warn(error)
      },
    }
  )

  return (
    <div className={styles.root}>
      <Drawer
        isOpen={user ? isOpen : false}
        placement='top'
        onClose={() => onClickCloseCabinet(false)}
      >
        <DrawerOverlay />
        {/*  @ts-ignore */}
        <DrawerContent>
          <ModalHeader
            title={'Personal cabinet'}
            Icon={BsPersonBoundingBox}
            onClickClose={onClickCloseCabinet}
          />

          <DrawerBody className={styles.body}>
            <div className={styles.person_data}>
              {isEditedUserData ? (
                <UserForm isSignUp={false} closeForm={setEditUserData} />
              ) : (
                <UserData user={user} />
              )}

              {!isEditedUserData && (
                <button
                  onClick={() => setEditUserData(true)}
                  className={styles.edit_btn}
                >
                  edit
                  <CiEdit />
                </button>
              )}
            </div>

            <div className={styles.card_data}>
              {isEditedCardData ? (
                <CardForm
                  card={data}
                  updateCardData={mutation.mutate}
                  closeForm={setEditCardData}
                />
              ) : (
                <CardData
                  card={data}
                  editData={setEditCardData}
                  isError={isError}
                  isLoading={isLoading || mutation.isLoading}
                />
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
