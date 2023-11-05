import { useRef, useState } from "react";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchButton = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);
  const handleClick = () => {
    setIsFocused(true);
    inputRef.current.focus();
    inputRef.current.select();
    console.log("%c search activated ", "background: black; color:lime");
  };

  const handleSearch = () => {
    const searchTerm = inputRef.current.value;
    const animationEndHandler = () => {
      inputRef.current.classList.remove("animate-shake");
      inputRef.current.removeEventListener("animationend", animationEndHandler);
    };
    if (!searchTerm) {
      // Handle empty search term
      return;
    }
    // Perform custom validation
    if (searchTerm.length < 3) {
      // Remove the animate-shake class after the animation ends
      inputRef.current.addEventListener("animationend", animationEndHandler);

      inputRef.current.classList.add(
        "animate-shake",
        "outline-red-500",
        "outline-5"
      );
      inputRef.current.classList.remove("outline-green-500");
    } else {
      inputRef.current.classList.add("outline-green-500");
      inputRef.current.classList.remove("outline-red-500");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {!isFocused && (
        <button
          className={`p-[2em] inline absolute z-10 rounded-lg bg-green-500 hover:opacity-80 ring-2 ring-black`}
          onClick={handleClick}
        >
          <AiOutlineSearch size={25} />
        </button>
      )}
      <input
        id="search-bar"
        ref={inputRef}
        type="search"
        required
        onKeyDown={handleKeyDown}
        maxLength={13}
        className={`border-2 rounded-full h-full border-solid px-[3em] ${
          isFocused
            ? "transition-w ease-in-out duration-300 w-[25rem]"
            : "w-0 transition-opacaity ease-in-out duration-300 opacity-0 z-0"
        } `}
        placeholder="Search"
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchButton;
