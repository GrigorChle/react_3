import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
    return (
        <div class="flex">
            <ul>
                <BrowserRouter>
                    <Routes>
                        <Route path="#home"/>
                    </Routes>
                </BrowserRouter>
            </ul>
        </div>
    );
}

export default Sidebar;