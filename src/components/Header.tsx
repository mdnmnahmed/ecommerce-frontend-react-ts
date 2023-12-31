import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = {
    _id: "123",
    role: "admin"
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="header">
            <Link to={"/"}> Home </Link>
            <Link to={"/search"}> <FaSearch /> </Link>
            <Link to={"/Cart"}> <FaShoppingBag /> Cart </Link>

            {
                user?._id ? (
                    <>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <FaUser />
                        </button>
                        <dialog open={isMenuOpen} className="">
                            <div>
                                {user.role === "admin" && (
                                    <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(!isMenuOpen)}>Dashboard</Link>
                                )}
                                <Link to="/orders" onClick={() => setIsMenuOpen(!isMenuOpen)}>Orders</Link>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}> <FaSignOutAlt /> </button>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <>
                        <Link to={"/login"} > <FaSignInAlt /> Login </Link>
                    </>
                )
            }
        </nav>
    )
}

export default Header;