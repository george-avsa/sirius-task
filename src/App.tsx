import { Route, Routes } from "react-router-dom";
import Layout from "App/layout/Layout";
import NotFound from "App/layout/NotFound";
import { useState } from "react";
import Login from "Pages/Login/ui/Login";
import Schedule from "Pages/Schedule/ui/Schedule";

function App() {
    const [keklol, lolkek] = useState();
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Layout />}>
                <Route index element={<Schedule />}></Route>
                {/* <Route path="*" element={<NotFound />}></Route> */}
            </Route>
        </Routes>
    );
}

export default App;