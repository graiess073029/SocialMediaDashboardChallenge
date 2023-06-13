import "./Header.css"

let index = 0

export function Header({theme,setTheme}){
    return (
        <header className={"top " + theme}>
            <div className="total">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <div className="toogle">
                <p>Dark Mode</p>
                <div>
                    <input type="checkbox" id="switch" />
                    <label onClick={ (event) => {index += 1 ; theme === "light" ? setTheme("dark") : setTheme("light") }} htmlFor="switch"></label>
                </div>
            </div>
        </header>
    )
}