import React from 'react'
import SearchFormReset from './searchFormReset';

const SearchForm = ({query}:{query:string}) => {
  
   
  return (
    <div>
      <form action="/" className="search-form">
        <input type="text" defaultValue="" placeholder="Search" className="search-input" />
        <div className="flex gap-2">
            {query &&(
              <SearchFormReset />
            )}
            <button type="submit" className="search-btn text-white">
                    S
                   </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
