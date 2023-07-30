import React from "react";
import "./About.css";
import about from "./images/About.svg";


function About() {


    return(
        <>
        <div className="aboutPage">
            <div className="leftSide" id="leftSide">
                <h2>
                    Něco málo o mně
                </h2>
                <div className="aboutText">
                <p  className="break">
                    Ahoj, jmenuji se Míša a jsem grafická designérka. 
                    Studovala jsem uměleckou školu a nyní se pohybuji v oboru
                    čtyři roky. Práce s nástroji Adobe pro mě není nic nového
                    a využívám je denně k tvorbě návrhů pro různé klienty. 
                    Mou prací není pouze grafický design, ale také editace videí 
                    a správa sociálních sítí. Věnuji se i své vášni pro sport, 
                    která mi pomáhá vytvářet designy, které oslovují fanoušky 
                    sportovních týmů. <br /><br />
                    Mám ráda výzvy a nebojím se nových projektů, což mě vede 
                    ke kreativitě a inovativnosti. Komunikativnost a pečlivost 
                    jsou pro mě velmi důležité a ráda komunikuji s klienty a 
                    spolupracovníky, aby byly všechny jejich požadavky splněny 
                    na maximum.
                    Mám ráda, co dělám a těším se na další projekty, 
                    které mi přinesou nové výzvy a příležitosti pro růst.
                </p>
                </div>
            </div>
            <div className="aboutImg">
                <div  className="rightSide"> 
                    <img loading="lazy" src={about} id="about" alt="about"/>
                </div>
            </div>
        </div>
        </>

    )
}

export default About