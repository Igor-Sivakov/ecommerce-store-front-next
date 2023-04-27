import { IoMdNotifications } from 'react-icons/io'
import { ImNotification } from 'react-icons/im'
import { IconType } from 'react-icons'

export interface INotification {
  id: number
  color: string
  Icon: IconType
  title: string
  text: string
}

export const notifications: INotification[] = [
  {
    id: 1,
    Icon: IoMdNotifications,
    color: '#B11212',
    title: 'Spring SALE',
    text: 'Do not miss the spring sale, you will find discounts up to -50%, a lot of exciting surprises, gifts, and most importantly, a draw for a trip to Cuba for two!',
  },
  {
    id: 2,
    Icon: ImNotification,
    color: '#f4ba0b',
    title: 'Verify your profile',
    text: 'Verify your profile, this will help to better protect your account from hacking, as well as allow you to make payments for goods faster and more conveniently.',
  },
]
