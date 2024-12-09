import { Container } from "./styles";
import emailIcon from "../../files/email-icon.svg";
import phoneIcon from "../../files/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Let's get in touch!</p>
      </header>
      <div className="contacts">
        <div>
          <a href="Abdella.boutaarourt@hotmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
    </Container>
  );
}
