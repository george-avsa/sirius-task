import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="app">
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;