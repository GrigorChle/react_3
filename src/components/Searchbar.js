import {React} from "react";
function SearchBar(props) {
    return (
        <div style={{ backgroundColor: props.color}}>
            <form>
                <input type="text" placeholder="Search..." name="search"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
    

}

export default SearchBar;