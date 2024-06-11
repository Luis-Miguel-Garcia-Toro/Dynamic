import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaQuestionCircle,
  FaTwitter,
  FaUserCircle,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoDocumentTextOutline, IoWallet } from "react-icons/io5";
import { MdDashboard, MdOutlineManageHistory } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

const optionsIcons = {
  dashboard: <MdDashboard />,
  document: <IoDocumentTextOutline />,
  facebook: <FaFacebook />,
  faq: <TiMessages />,
  help: <FaQuestionCircle />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  logout: <RiLogoutBoxFill />,
  orders: <MdOutlineManageHistory />,
  phone: <FaPhoneAlt />,
  profile: <FaUserCircle />,
  term: <HiOutlineDocumentCheck />,
  twitter: <FaTwitter />,
  wallet: <IoWallet />,
  web: <TbWorld />,
  whatsapp: <FaWhatsapp />,
  youtube: <FaYoutube />,
};

export const getIcons = (iconName) => {
  return optionsIcons[iconName] || optionsIcons.help;
};
