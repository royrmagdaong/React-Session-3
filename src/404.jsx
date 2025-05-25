import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 

        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
            <Link to="/blogs">Blogs</Link>
            PageNotFound
        </div>
     );
}
 
export default PageNotFound;