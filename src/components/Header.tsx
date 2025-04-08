import Currency from "./Currency"
import HeaderMain from "./HeaderMain"
import Lang from "./Lang"
import Navbar from "./Navbar"
import Socials from "./Socials"
const Header = () => {
    return (
        <>
            <div className="border-b border-gray-500 hidden sm:block">
                <div className="container py-4">
                    <div className="flex justify-between items-center">
                        <Socials />
                        <div className="text-gray-500 text-[14px]">
                            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                        </div>
                        <div className="flex gap-4">
                            <Currency />
                            <Lang />
                        </div>
                    </div>
                </div>
            </div>
            <HeaderMain />
            <Navbar />
        </>
    )
}

export default Header