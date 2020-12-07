import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "../styles/form.css"

export default function Form() {
    return (
        <div className="formDiv">
            <form>
                <input type="text" id="searchMovie" placeholder="Search Movie here..." />
                <button><FaSearch className="searchBar" /></button>
            </form>
        </div>
    )
}