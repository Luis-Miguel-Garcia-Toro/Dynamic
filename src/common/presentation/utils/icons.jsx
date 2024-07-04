import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaQuestionCircle,
  FaTwitter,
  FaUserCircle,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoDocumentTextOutline, IoWallet } from "react-icons/io5";
import { MdDashboard, MdEmail, MdOutlineManageHistory } from "react-icons/md";
import { RiCellphoneFill, RiLogoutBoxFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

const optionsIcons = {
  cel: <RiCellphoneFill />,
  dashboard: <MdDashboard />,
  document: <IoDocumentTextOutline />,
  email: <MdEmail />,
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
  twitter: <FaSquareXTwitter />,
  wallet: <IoWallet />,
  web: <TbWorld />,
  whatsapp: <FaWhatsapp />,
  youtube: <FaYoutube />,
};

export const getIcons = (iconName) => {
  return optionsIcons[iconName] || optionsIcons.help;
};
