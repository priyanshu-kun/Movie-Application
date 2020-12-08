import React, { useState, useEffect, useContext } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Gallery from "./components/movieGallery";
import axios from "axios";
import { ThemeContext } from "./context/Theme.Provider";

// global variables
const ENDPOINT = "https://imdb8.p.rapidapi.com/title/auto-complete";
const API_KEY = "eee8c93323msh82f01b0cf292754p1e61a0jsn0f1e16d3f021";


function App() {

  const [response, setResponse] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [preloader, setpreloader] = useState(false);
  const { open, setTheme } = useContext(ThemeContext);


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
          setpreloader(false)
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
    setpreloader(true)
    setQuery(data);
  }

  return (
    <div className={`App ${open && "light"}`}>
      <Navbar />
      <Form getData={getDataFromForm} query={setQuery} response={setResponse} />
      {
        preloader ? <div className="preloader"><img src="https://media4.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e475cjnl5blc6id4iyvr6sm77ng902lie4o593f0y30&rid=giphy.gif" alt="preloader" /></div> : <Gallery sendApiResponse={response} error={error} />
      }
    </div>
  );
}

export default App;
