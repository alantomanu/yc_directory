import React from 'react'

const SearchForm = () => {
    const query = "test";
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if(form){
            form.reset();
        }
    }
  return (
    <div>
      <form action="/" className="search-form">
        <input type="text" defaultValue="" placeholder="Search" className="search-input" />
        <div className="flex gap-2">
            {query &&(
                <button type="submit" className="flex gap-2" onClick={reset}>
                   
                </button>
            )}
        </div>
      </form>
    </div>
  )
}

export default SearchForm
