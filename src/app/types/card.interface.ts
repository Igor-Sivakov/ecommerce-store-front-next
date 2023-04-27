export interface ICard {
  id: number
  cardNumber: string
  month: string
  year: string
  cvv: string
  userId: number
}


export interface ICardUpdate extends Omit<ICard, 'id' | 'userId'> { }