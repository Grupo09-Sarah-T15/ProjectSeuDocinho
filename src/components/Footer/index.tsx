import { StyledFooter } from "./style";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="conteinerGeral">
        <img src={Logo} alt="" />
        <div className="footerImage">
          <a href="https://www.instagram.com/seudocinho.sc/" target="_blank">
            <AiFillInstagram className="image" />
          </a>
          <a href="https://wa.me/5548996252694" target="_blank">
            <IoLogoWhatsapp className="image" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
