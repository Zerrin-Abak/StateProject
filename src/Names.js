import Flowers from "./images/flowers.jpg";
import Heart from "./images/heart.jpg";
import Summer from "./images/summer.jpg";
import Sunset from "./images/sunset.jpg";
import "./Names.css"

const images = {
    Flowers,
    Heart,
    Summer,
    Sunset
}

function Names({imageName}) {
    return (
        <div className="imageDiv">
            <img className="image" src={images[imageName]}/>
        </div> 
    );
}

export default Names;