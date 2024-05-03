import { Outlet } from "react-router-dom"

export const Main = ({groupsList}) => {
    return (
        <div className="main">
            <aside className="navbar">
                {groupsList}
            </aside>
            <div>
                <Outlet />
            </div>
        </div>
    )
}   