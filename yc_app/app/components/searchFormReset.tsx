
"use client"

import Link from "next/link";

const searchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if(form){
            form.reset();
        }
    }
  return (
    <div>
       <button type="submit" onClick={reset}>
                   <Link href="/" className="search-btn text-white">
                   X</Link>
                   </button>
                   
    </div>
  )
}

export default searchFormReset
