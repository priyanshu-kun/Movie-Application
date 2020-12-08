import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Gallery from "./components/movieGallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Gallery />
    </div>
  );
}

export default App;
