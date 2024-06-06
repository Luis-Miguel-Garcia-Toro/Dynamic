import { FaQuestionCircle, FaTicketAlt, FaUserCircle } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export const getMenuIcons = (menuId) => {
  switch (menuId) {
    case "wallet":
      return <IoWallet />;
    case "dashboard":
      return <MdDashboard />;
    case "faq":
      return <TiMessages />;
    case "help":
      return <FaQuestionCircle />;
    case "logout":
      return <RiLogoutBoxFill />;
    case "orders":
      return <FaTicketAlt />;
    case "profile":
      return <FaUserCircle />;
    default:
      return <FaQuestionCircle />;
  }
};
