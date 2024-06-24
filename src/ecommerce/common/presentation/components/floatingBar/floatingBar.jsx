import Styles from "./scss/floating.module.scss";
import { IoMdMenu, IoMdHome, IoMdPerson, IoIosHelpCircle, IoMdCart    } from "react-icons/io"
import { Link } from "react-router-dom"

const menuItems = [
    {
        name: "Inicio",
        link: "/products",
        icon: <IoMdHome />, 
    },
    {
        name: "Mi cuenta",
        link: "/menu?option=profile",
        icon: <IoMdPerson />, 
    }
    ,
    {
        name: "Ayuda",
        link: "/menu?option=help",
        icon: <IoIosHelpCircle />, 
    },
    {
        name: "Ayuda",
        link: "/cart",
        icon: <IoMdCart />, 
    },
    {
        name: "Menú",
        link: "/menu",
        icon: <IoMdMenu />,
    },
];
const FloatingBar = () => {
    return (
        <div className={`${Styles.contentFloating}`}>

            <div className={`${Styles.menuFloating}`}>
                <nav >
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.link}>
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>

    );

}

export default FloatingBar
