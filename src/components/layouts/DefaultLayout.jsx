import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import '../../assets/css/defaultlayout.css';

const DefaultLayout = () => {
    return (
        <div className="app-container" id='app-contianer'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
