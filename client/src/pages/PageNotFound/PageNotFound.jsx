import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./PageNotFound.css";
const PageNotFound = () => {

    return(
        <>
        <Navbar />
        <div className="bg-container-pagenotfound">
            <div className="text-container-pagenotfound">
                 <h1>Error 404</h1>

            <h2>Hide and Seek Time!</h2>
            <h3>And you're it!(Sorry, we can't find the page, too.)</h3>
            </div>
           
        </div>
        
    
        </>
    )

    
}

export default PageNotFound;