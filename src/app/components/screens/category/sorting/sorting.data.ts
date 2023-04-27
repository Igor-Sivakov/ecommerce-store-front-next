import { EnumSorting, ISortingItem } from "../../../../types/sorting.interface"

export const sortList: ISortingItem[] = [
  {
    label: 'price: low to hight',
    value: EnumSorting.PRICE_TO_HIGHT,
  },
  {
    label: 'price: hight to low',
    value: EnumSorting.PRICE_TO_LOW,
  },
  {
    label: 'newest',
    value: EnumSorting.NEWEST,
  },
  {
    label: 'oldest',
    value: EnumSorting.OLDEST,
  },
]