const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"I am the h1 latest2222 tag"),React.createElement("h2",{},"I am the h2 tag")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);