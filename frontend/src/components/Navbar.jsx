import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header className="sticky top-0 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <Link to="/">
                    <h1 className="font-semibold text-3xl text-black tracking-wider">
                        Workout
                        <span className="text-blue-600">Buddy</span>
                    </h1>
                </Link>

                <nav className="flex items-center gap-6">
                    {user ? (
                        <div className="flex gap-4 items-center">
                            <span className="text-gray-700 font-medium">
                                Hello, {user.name}
                            </span>
                            <button
                                onClick={handleClick}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <Link to="/login" className="hover:underline">
                                Login
                            </Link>
                            <Link to="/signup" className="hover:underline">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
