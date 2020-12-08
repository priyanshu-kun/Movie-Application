import React, { useState, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import "../styles/navbar.css";
import { ThemeContext } from "../context/Theme.Provider";


export default function Navbar() {
    const { open, setTheme } = useContext(ThemeContext);
    // console.log(value)
    const [state, setState] = useState({
        checkedA: false
    });

    const handleChange = (event) => {
        setTheme();
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    console.log(open)

    return (
        <nav className={`navbar ${open && "light"}`} >
            <h2>Movie App</h2>

            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </nav>
    )
}