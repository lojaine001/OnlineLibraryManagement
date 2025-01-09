'use client';

import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery) // Trigger the callback passed via props
  }

  return (
    <form className="search-bar flex items-center gap-2 border p-2 rounded-md shadow-sm" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for books..."
        className="flex-1 p-2 border-none outline-none"
      />
      <button type="submit" className="bg-primary-blue text-white px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  )
}

export default SearchBar
