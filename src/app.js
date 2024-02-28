import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const RestrauntCard =(props)=>{
    return(
        <div className="res-card">
            <img  
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/iivuhjc2mswi9lublktf" />
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 Minutes</h4>
        </div>
    );
}



const AppLayout = ()=>{
    return(
        <div className="app">
            <Header />
            <Body />


        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);