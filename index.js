import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width = "50" height = "50"/>
                </nav>
            </header>
            <h1>My awesome website in React</h1>
            <h3>Reasons I love React</h3>
            <ol>
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's a hireable skill</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
            <footer>    
                <small>© 2023 Ianwyt. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))