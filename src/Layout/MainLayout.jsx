import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {

    return (
        <div  className="max-w-[1600px] mx-auto">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;