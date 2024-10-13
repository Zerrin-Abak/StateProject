import Image from "./Names"
import './App.css';
import {useState} from "react";
import Names from "./Names";

function getRandomImage() {
  const imageArray = ["Flowers","Heart","Summer","Sunset"];
  return imageArray[Math.floor(Math.random()*imageArray.length)];
}

function App() {
  const [images, setimages] = useState([]);

  const handleClick = () => {
    setimages([...images, getRandomImage()]);
  }

  const imageNameList = images.map((value, index) => {
    return <Names key = {index} imageName = {value}/>
  });

  return (
    <div className="App">
      <button className="appButton" onClick = {handleClick}>Add image</button>
      <div className="imageList">{imageNameList}</div>
    </div>
  );
}

export default App;
