import Link from 'next/link'
import styles from './mainCss.module.css'


const links = [
    { name: "HOME", href: "/" },
    { name: "CATEGORIES", href: "/" },
    { name: "MEN'S", href: "/" },
    { name: "WOMAN'S", href: "/" },
    { name: "JEWELRY", href: "/" },
    { name: "PERFUME", href: "/" },
    { name: "BLOG", href: "/" },
    { name: "HOT OFFERS", href: "/" },
]


const Links = () => {
    return (
        <>
            {links.map((item, index) => {
                return <Link
                    key={index}
                    className={`${styles.navbar__link} relative`}
                    href={item.href}
                >
                    {item.name}
                </Link>
            })}
        </>
    )
}

export default Links