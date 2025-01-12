"use client";

import { X } from 'lucide-react';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector<HTMLFormElement>(".search-form");
    if (form) {
      form.reset();
    }
    // Use `location` to reset the query parameter in the URL
    window.location.href = "/";
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
