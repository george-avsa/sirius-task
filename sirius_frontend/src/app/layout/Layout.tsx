import { AppDispatch, RootState } from "App/store/store";
import { fetchStudents } from "Entities/Students/store/students.store";
import { fetchUserProfile } from "Entities/User/store/user.store";
import Loader from "Shared/Loader/ui/Loader";
import Header from "Widgets/Header/ui/Header";
import Sidebar from "Widgets/Sidebar/ui/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {

    const navigate = useNavigate();
    
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector((state: RootState) => state.user);

    const isLoading = useSelector((state: RootState) => state.user.loginInProcess);

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, []);

    useEffect(() => {
        if (user.loginFailed) {
            navigate('/login');
        }
    }, [user.loginFailed]);

    useEffect(() => {
        if (user.id) {
            dispatch(fetchStudents(user.id));
        }
    }, [user]);

    return (
        <div className="app">
            {isLoading ? (
                <Loader
                    isFullScreen
                ></Loader>

            ) : (
                <>
                    <Sidebar></Sidebar>
                    <div className="wrapper">
                        <Header></Header>
                        <Outlet></Outlet>
                    </div>
                </>
            )}
        </div>
    );
}

export default Layout;