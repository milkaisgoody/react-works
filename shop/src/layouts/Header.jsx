import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/products'>상품 목록</Link>
        </div>
    )
}

export default Header;