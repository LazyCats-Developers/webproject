import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import Header from "components/products/Header";
import CasesList from "components/products/CasesList";


function Products(){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
           <div className="pt-28">
                <Header/>
                <CasesList/>
            </div> 
            <Footer/>
        </Layout>
    )
}
export default Products