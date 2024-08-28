import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Gallery from './Gallery';

function App() {
  let [search , setSearch] = useState("");
  let [data , setData] = useState([])
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then((res)=>{setData(res.data.photos.photo);
    })
    console.log(data);
    
  }
  return (
    <div className="App">
        <div>
          <h1>Gallery Snapshot</h1>
          <form onSubmit={handleSubmit}>
              <input type='text' value={search} onChange={handleChange}/>
              <input type='submit' name='Search'/>
          </form>
        </div>
        <div>
          {data.length >= 1?<Gallery data={data}></Gallery>:<h1>Data not found</h1>}
        </div>
    </div>
  );
}

export default App;
