import "./Footer.scss";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Gmail from "../../Assets/images/gmail.svg";
import Instagram from "../../Assets/images/Instagram_logo_2016.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-title">
        This netflix clone built by Gio Chomakhashvili for portfolio purpose.
      </p>

      <div className="footer--row">
        <div className="footer--row-column">
          <a
            href="https://github.com/koexygen"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub style={{ fill: "#fff" }} />
          </a>
        </div>
        <div className="footer--row-column">
          <a
            href="https://www.linkedin.com/in/gio-chomakhashvili-a739911b9/"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin style={{ fill: "#0e76a8" }} />
          </a>
        </div>
        <div className="footer--row-column">
          <a
            href="https://www.facebook.com/thekoexygen/"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            Facebook <FaFacebook style={{ fill: "#4267B2" }} />
          </a>
        </div>
        <div className="footer--row-column">
          <a
            href="https://www.instagram.com/koexygen/"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <img
              src={Instagram}
              alt=""
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
        <div className="footer--row-column">
          {" "}
          <a
            href="https://api.whatsapp.com/send?phone=995558888884&text=Hey%20Gio%2C%20"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <FaWhatsapp style={{ fill: "#25D366" }} />
          </a>{" "}
        </div>
        <div className="footer--row-column">
          {" "}
          <a
            href="mailto: ggiosweb@gmail.com"
            className="footer--row-column-link"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
            <img src={Gmail} alt="" style={{ width: "1em", height: "1em" }} />
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
