import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>    
            <small>© 2023 Ianwyt. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>My awesome website in React</h1>
            <h3>Reasons I love React</h3>
            <ol>
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's a hireable skill</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))