import {React, useState} from "react";
import "./Content.css"
import SearchBar from "./Searchbar";
import Panel from "./Panel";

function Content() {
    const [color, setColor] = useState(0);

    return (
        <div class="container">
            <SearchBar color={color}/>
            <button onClick={changeColor}>Zmiana Koloru</button>
            <Panel color={color}/>
        </div>
    );

    function changeColor(){
        if (color === "yellow") {
            setColor("antiquewhite");
        }else {
            setColor("yellow");
        }
    }
}

export default Content;