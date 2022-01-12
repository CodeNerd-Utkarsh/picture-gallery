import './App.css';
import {useEffect, useState} from 'react'
import ImageBlock from './components/ImageBlock';
function App() {
  const [images, setImages] = useState([]);
  const IMG_URI = "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
  async function getData() {
    const response = await fetch(IMG_URI);
    const data = await response.json();
    setImages(data);
  }
  // console.log(images)
  useEffect(() => {
    getData()
  }, [])
  return (
    < div className="app" >
      {images.map(img => (
        <ImageBlock key={img.id} url={img.urls.thumb}/>
      ))
    }
    </div >
    );
}

export default App;
