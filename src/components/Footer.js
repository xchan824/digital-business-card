import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faSquareTwitter} style={{fontSize: '40px', margin: '15px'}}/>
      <FontAwesomeIcon icon={faSquareFacebook} style={{fontSize: '40px', margin: '15px'}}/>
      <FontAwesomeIcon icon={faSquareInstagram} style={{fontSize: '40px', margin: '15px'}}/>
      <FontAwesomeIcon icon={faSquareGithub} style={{fontSize: '40px', margin: '15px'}}/>
    </div>
  )
}

export default Footer;