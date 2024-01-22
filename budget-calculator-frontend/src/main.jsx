import React from "react";
import ReactDOM from "react-dom/client";

//Importing CSS
import "./index.css";
import "./header.css";
import "./sidebar.css";
import "./panel.css";

//Importing Icons
import { SlMenu } from "react-icons/sl";

function App() {
    const [width, setWidth] = React.useState(72);
    var shift = () => {
        if (width === 72) {
            setWidth(300);
        } else {
            setWidth(72);
        }
    };
    return (
        <div>
            <Header shift={shift} />
            <div className="container-app">
                <Sidebar width={width} />
                <Panel />
            </div>
        </div>
    );
}

function Header(props) {
    return (
        <div className="container-header">
            <div className="container-front-header">
                <button
                    className="extension-button-header"
                    onClick={() => {
                        props.shift();
                    }}
                >
                    <SlMenu className="extension-icon-header" />
                </button>
                <div className="title-header">Budget Calculator</div>
                <input
                    className="search-header"
                    type="text"
                    placeholder="Search for Records"
                />
            </div>
        </div>
    );
}
function Sidebar(props) {
    var sidebarStyle = {
        minWidth: props.width,
    };
    return <div style={sidebarStyle} className="container-sidebar"></div>;
}

function Panel() {
    return <div className="container-panel">Under Construction!</div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
