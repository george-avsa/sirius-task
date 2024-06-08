import Header from "Widgets/Header/ui/Header";
import Sidebar from "Widgets/Sidebar/ui/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="app">
            <Sidebar></Sidebar>
            <div className="wrapper">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;