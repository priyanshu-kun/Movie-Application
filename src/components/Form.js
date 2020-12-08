import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import "../styles/form.css"

export default function Form(props) {
    const { getData, query, response } = props;
    const [statevalue, setValue] = useState("");
    const [submitValue, setSubmitValue] = useState("");
    const changeInputState = (event) => {
        setValue(event.target.value);
    }
    const submitChange = (event) => {
        event.preventDefault();
        setSubmitValue(statevalue);
        setValue("")
    }
    useEffect(() => {
        query("");
        response("");
        if (submitValue !== "") {
            getData(submitValue);
        }
    }, [submitValue])

    return (
        <div className="formDiv">
            <form onSubmit={submitChange}>
                <input type="text" id="searchMovie" placeholder="Search Movie here..." onChange={changeInputState} value={statevalue} />
                <button><FaSearch className="searchBar" /></button>
            </form>
        </div>
    )
}