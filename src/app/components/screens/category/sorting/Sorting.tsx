import { FC } from 'react'

import { sortList } from './sorting.data'

import { AiFillCaretDown } from 'react-icons/ai'

import { EnumSorting } from '../../../../types/sorting.interface'

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import styles from './Sorting.module.scss'

type PropsType = {
  sortType: EnumSorting
  setSortType: (value: EnumSorting) => void
}

export const Sorting: FC<PropsType> = ({ sortType, setSortType }) => {
  return (
    <div className={styles.root}>
      <Menu>
        <span className={styles.sort_type}>
          {sortList.find((sort) => sort.value === sortType)?.label}
          <span>:</span>
        </span>

        <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
          Sort by
        </MenuButton>

        <MenuList className={styles.popup}>
          {sortList.map((item) => (
            <MenuItem key={item.label} onClick={() => setSortType(item.value)}>
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}
