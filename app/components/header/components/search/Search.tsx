'use client'
import names from 'classnames'
import { useState } from 'react'
import cl from './Search.module.scss'
import { josefin } from '@/app/style/fonts'

const Search = () => {
  const [text, setText] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={names('flex', josefin.className)}
    >
      <input
        className={names(cl.input)}
        onChange={handleInput}
        value={text}
        type="search"
      />
      <input className={cl.submit} type="submit" value="" />
    </form>
  )
}

export default Search
