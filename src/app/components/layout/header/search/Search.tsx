import { FC, useState } from 'react'
import cn from 'classnames'

import { BiSearch } from 'react-icons/bi'

import { onlyText } from '@/app/utils/clear-text'

import { useActions } from '@/app/hooks/useActions'
import { useRouter } from 'next/router'

import styles from './Search.module.scss'

type PropsType = {
  isOpen: boolean
  handleClose: () => void
}

export const Search: FC<PropsType> = ({ isOpen, handleClose }) => {
  const [searchValue, setSearchValue] = useState('')

  const router = useRouter()
  const { addSearchTerm } = useActions()

  const handleSubmit = () => {
    if (searchValue && searchValue !== ' ') {
      addSearchTerm(onlyText(searchValue))
      setSearchValue('')
      router.push('/search')
    }

    handleClose()
  }

  return (
    <div className={cn(styles.root, { [styles.root__open]: isOpen })}>
      <BiSearch />
      <input
        type='search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        autoFocus
        onBlur={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
      />
    </div>
  )
}
