import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="appShell">
            <header className="appHeader">
                <div className="appTitle">Study Hub</div>

                <nav className="appNav">
                    {/* NavLink는 react-router-dom 라이브러리에서 제공하는 컴포넌트로, 페이지 간 이동을 구현한다. */}
                    <NavLink 
                    to={"/"}
                    end
                    className={({isActive}) => (isActive ? "navLink active" : "navLink")}
                    /* isActive를 통해 NavLink 상태에 따른 클래스 이름을 설정한다. */
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
                {/* Outlet는 react-router-dom 라이브러리에서 제공하는 컴포넌트로, 현재 페이지의 하위 컴포넌트를 렌더링한다. 
                자식 Route 컴포넌트가 해당 위치로 렌더링되게 된다.*/}
                <Outlet/>
            </main>
        </div>
    )
}