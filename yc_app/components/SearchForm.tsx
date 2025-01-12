import React from 'react'
import SearchFormReset from './searchFormReset';
import {Search} from 'lucide-react';
const SearchForm = ({query}:{query:string}) => {
  
   
  return (
    <div>
      <form action="/" className="search-form">
        <input type="text" defaultValue={query} placeholder="Search" className="search-input" />
        <div className="flex gap-2">
            {query &&(
              <SearchFormReset />
            )}
            <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                   </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
