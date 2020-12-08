import React, { useState } from 'react';
import MovieCard from "./MovieCard";
import "../styles/gallery.css";

export default function Gallery(props) {
    const { sendApiResponse, error } = props;
    console.log("from movie gallery: ", sendApiResponse.d)
    return (
        error ? <div className="error">{error}</div> : <section className="gallery">
            {
                typeof sendApiResponse.d !== "undefined" && sendApiResponse.d.map((movie, index) => {
                    return <MovieCard key={index} value={movie} />
                })
            }

        </section>
    )
}