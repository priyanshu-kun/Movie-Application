import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Gallery from "./components/movieGallery";
import axios from "axios";

// global variables
const ENDPOINT = "https://imdb8.p.rapidapi.com/title/auto-complete";
const API_KEY = "eee8c93323msh82f01b0cf292754p1e61a0jsn0f1e16d3f021";


function App() {

  const [response, setResponse] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    setResponse("")
    const getApiCall = async () => {
      try {
        const options = {
          method: 'GET',
          url: ENDPOINT,
          params: { q: query },
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        const data = await response.data;
        console.log("get data: ", data)
        if (!data.d) {
          setError("Invalid movie name!")
        }
        else {
          setResponse(data);
        }


      }
      catch (e) {
        setError("Cannot load movie data an unexpeted error!");
      }
    }
    if (query !== "") {
      getApiCall()
    }

  }, [query])


  const getDataFromForm = (data) => {
    setQuery(data);
  }

  return (
    <div className="App">
      <Navbar />
      <Form getData={getDataFromForm} query={setQuery} response={setResponse} />
      <Gallery sendApiResponse={response} error={error} />
    </div>
  );
}

export default App;
