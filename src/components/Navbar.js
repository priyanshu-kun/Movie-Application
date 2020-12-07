import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import "../styles/navbar.css";


export default function Navbar() {
    const [state, setState] = useState({
        checkedA: false,
        open: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked, open: !state.open });
    };

    useEffect(() => {
        console.log(state.open)
    }, [state.open])

    return (
        <nav className="navbar">
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