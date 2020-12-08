import React, { useState } from 'react';
import "../styles/movieCard.css"

export default function MovieCard(props) {
    const { value } = props;
    console.log("image url error: ", value.i)

    return (
        <div className="card">
            {typeof value.i === "undefined" ? <img className="errorImg" src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png" alt="error" /> : <img src={value.i.imageUrl} alt={value.l} />}
            <div className="cardOverlay">
                <h1>{value.l}</h1>
                <span>{value.s}</span>
                <small>{value.y}</small>
            </div>
        </div>
    )
}