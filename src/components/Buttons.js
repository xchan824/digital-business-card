import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Buttons() {
    return (
        <div className="buttons-container">
            <button className="email-button">
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '20px', marginRight: '15px'}}/>
                Email
            </button>
            <button className="linkedin-button">
                <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '20px', marginRight: '15px'}}/>
                LinkedIn
            </button>
        </div>
    )
}

export default Buttons;