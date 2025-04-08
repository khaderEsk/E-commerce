import Link from "next/link"
import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"

const socials = [
    { icon: <BsLinkedin />, path: '/' },
    { icon: <BsFacebook />, path: '/' },
    { icon: <BsInstagram />, path: '/' },
    { icon: <BsTwitter />, path: '/' }
]

function Socials() {
    return (
        <div className="hidden lg:flex gap-2">
            {socials.map((item, index) => {
                return <div className="header_top__icon_wrapper" key={index}>
                    <Link
                        href={item.path}>
                        {item.icon}
                    </Link>
                </div>
            })}
        </div>
    )
}

export default Socials