import { Route, Routes } from "react-router-dom";
import Layout from "App/layout/Layout";
import Login from "Pages/Login/ui/Login";
import Schedule from "Pages/Schedule/ui/Schedule";
import Main from "Pages/Main/ui/Main";

function App() {
    
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Layout />}>
                <Route index element={<Main />}></Route>
                <Route path="schedule" element={<Schedule />}></Route>
                {/* <Route path="*" element={<NotFound />}></Route> */}
            </Route>
        </Routes>
    );
}

export default App;