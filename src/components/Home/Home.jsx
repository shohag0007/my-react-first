
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import View from '../View/View';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            
         
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;