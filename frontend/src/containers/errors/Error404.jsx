import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout";
function Error404(){
    return (
        <Layout>
            {/* aqui va el helmet */}
            <Navbar />
            <div className="pt-24">
                ERROR 404
            </div>
            <Footer />
        </Layout>
    )
}
export default Error404