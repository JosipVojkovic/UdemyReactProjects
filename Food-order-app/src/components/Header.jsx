import logo from "../assets/logo.jpg"

export default function Header({ numOfItems }){

    

    return(
        <div id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>React Food</h1>
            </div>
            <button>Cart ({numOfItems})</button>
        </div>
    )
}