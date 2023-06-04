import React, { useState } from "react";
import {searchMpvieData} from "./api";

const SearchBar = ({setMovies}) => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        searchMpvieData(searchInput).then((data)=>{
            let {result}=data;
            console.log(result);
            setMovies(result);
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
           onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} type="text" className="search-input"/>
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
};
export default SearchBar;