import React from "react";
import "./Panel.css"
import Card from "./Card";

function Panel(props) {
    return (
        <div class="Panel" style={{backgroundColor: props.color}}>
            <Card title="Personal Information11" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information12" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information13" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information11" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information12" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information13" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information11" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information12" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
            <Card title="Personal Information13" image="https://www.svgrepo.com/show/499842/salesman.svg" text="Your Personal Information"/>
        </div>
    );
}

export default Panel;