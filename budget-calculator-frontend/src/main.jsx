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
    return (
        <div className="container-panel">
            <div className="info-container-panel">
                <div className="month-container-panel">
                    <div className="month-panel">December 2023</div>
                </div>
                <hr />
                <div className="previous-container-panel">
                    <div className="previous-panel">Previous Budget: </div>
                    <span>15000 PKR</span>
                </div>
                <div className="income-container-panel">
                    <div className="income-panel">Monthly Income: </div>
                    <span>1000 PKR</span>
                </div>
                <div className="current-container-panel">
                    <div className="current-panel">Current Budget: </div>
                    <span>1500 PKR</span>
                </div>
                <hr />
            </div>
            <hr />
            <div className="expense-container-panel">
                <div className="expense-panel">Expense Details</div>
                <div className="box-panel">No Expenses at the Moment :/</div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
