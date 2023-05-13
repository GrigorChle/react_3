import {React} from "react";
import "./Card.css";

function Card(props) {
    return (
        <div class="Card" style={{background: props.color}}>
            <h3>{props.title}</h3>
            <img src={props.image} alt="Person Info"/>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;