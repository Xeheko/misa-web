import React from "react";
import "./Perks.css";
import Kom from "./Kom";
import Krea from "./Krea";
import Spol from "./Spol";
import Flex from "./Flex";



function PerkCard() {

    return(
        <>
        <div className="perkCard">
            <div className="upperPerks">

                    <div className="PerkR">
                        <Kom />
                    </div>


                    <div className="PerkL">
                        <Krea />
                    </div>

            </div>
            <div className="lowerPerks">

                    <div className="PerkR">
                        <Spol />
                    </div>


                    <div className="PerkL">
                        <Flex />
                    </div>

            </div>
        </div>
        </>

    )
}

export default PerkCard