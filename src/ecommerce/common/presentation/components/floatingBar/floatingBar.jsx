import Styles from "./scss/floating.module.scss";
import { IoMdMenu, IoMdHome, IoMdPerson, IoIosHelpCircle, IoMdCart ,IoMdStar   } from "react-icons/io"
import { BiSolidDashboard } from "react-icons/bi";
import {usePageContext} from "../../../../common/infrastructure/store"
import { useAppStore } from "../../../../../common/infrastructure/store/app.store";
import { useEffect } from "react";
const menuItems = [
    {
        name: "Inicio",
        link: "home",
        icon: <IoMdHome />,
        option : "home", 
    },
    {
        name: "Categorias",
        link: "menu",
        icon: <BiSolidDashboard />, 
        option : "categories",
    },
    {
        name: "sugeridos",
        link: "suggested",
        icon: <IoMdStar />, 
        option : "suggested"
    },
    {
        name: "Ayuda",
        link: "menu",
        icon: <IoIosHelpCircle />, 
        option : "help"
    },
    {
        name: "Cart",
        link: "cart",
        icon: <IoMdCart />, 
    },
    {
        name: "Menú",
        link: "menu",
        icon: <IoMdMenu />,
        option : "orders"
    }
];
const FloatingBar = () => {
    const { user } = useAppStore();
    const {updateOptionActive, setOptionSelected} = usePageContext();
  
    const optionSelected = (item) => {
        if(user && user.business){
            updateOptionActive(item.link)
            setOptionSelected(item.option)
        }else{
            updateOptionActive("home")
            window.location.href = `/login`
        }
     
    }

    return (
        <div className={`${Styles.contentFloating}`}>

            <div className={`${Styles.menuFloating}`}>
                <nav >
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <div onClick={() =>  optionSelected(item)} >
                                    {item.icon}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>

    );

}

export default FloatingBar
