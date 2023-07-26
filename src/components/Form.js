import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css";
import tel from "./images/tel.svg"
import mail from "./images/mail.svg"
import loc from "./images/loc.svg"


function Form() {

        const [style, setStyle] = useState({ opacity: 0 });
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5d90fsc', 'template_dxlf4ak', form.current, '6oUGn4gYI4H_RHx2a')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setStyle({ opacity: 1 });
            }, (error) => {
                console.log(error.text);
            });
        };

    return(
<>       <form ref={form} onSubmit={sendEmail} name="form">
        <div className="formAll">
            <div className="formLeft">
                <div className="formHeader">
                    <h3>05</h3>
                    <h2>Kontaktuj mě</h2>
                    <h4>FORMULÁŘ</h4>
                    <div id="formLine"></div>
                </div>
                <div className="formContact">
                    <div className="formMail">
                        <img src={mail} alt="mail" />
                        <h2>m.mrazkova20@gmail.com</h2>
                    </div>
                    <div className="formTel">
                        <img src={tel} alt="telefon" />
                        <h2>+420 736 122 667</h2>
                    </div>
                    <div className="formLoc">
                        <img src={loc} alt="město" />
                        <h2>Poděbrady</h2>
                    </div>
                </div>
            </div>
            <div className="formInput">
                <input type="text" placeholder="Jméno a Příjmení" className="formMain" name="user_name" required/>
                <input type="email" placeholder="E-mail" className="formMain" name="user_email" required/>
                <input type="tel" placeholder="Telefon" className="formMain" name="user_phone" required/>
                <textarea className="formTxt" id="formTxt" placeholder="Text" cols="30" rows="10" name="message" required></textarea>
                <div className="sendbtn">
                    <input type="submit" value="Odeslat" id="formSend"/>
                    <div className="messSent" style={style}>
                        <input type="checkbox" id='sentMess' checked />
                        <p id='Sent'>Vaše zpráva byla v pořádku doručena.</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
      </>

    )
}

export default Form