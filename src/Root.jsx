import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}

export default Root;