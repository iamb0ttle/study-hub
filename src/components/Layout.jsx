import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="appShell">
            <header className="appHeader">
                <div className="appTitle">Study Hub</div>

                <nav className="appNav">
                    <NavLink
                    to={"/"}
                    end
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        Home   
                    </NavLink>

                    <NavLink
                    to={"/about"}
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        About Me
                    </NavLink>

                    <NavLink
                    to={"/korean"}
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        Korean
                    </NavLink>

                    <NavLink
                    to={"/math"}
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        Math
                    </NavLink>

                    <NavLink
                    to={"/social"}
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        Social Studies
                    </NavLink>

                    <NavLink
                    to={"/science"}
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    >
                        Science
                    </NavLink>
                </nav>
            </header>

            <main className="appMain">
                <Outlet/>
            </main>
        </div>
    )
}