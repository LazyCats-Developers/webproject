import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import Header from "components/careers/Header";
import Testimonial from "components/careers/Testimonial";
import LogoCloud from "components/careers/LogoCloud";
import Features from "components/careers/Features";
import PositionsList from "components/careers/PositionsList";

function Careers(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Testimonial/>
                <LogoCloud/>
                <Features/>
                <PositionsList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Careers