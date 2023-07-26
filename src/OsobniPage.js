import React from "react";
import Navbar from "./components/Navbar";

import "./CookiesPage.css"
import ScrollToTop from "./ScrollToTop";
import Form from "./components/Form";
import Footer from "./components/Footer";

function Cookies() {


    return(
        <div className="cookiesPage">
          <ScrollToTop />
            <div className="Topbar">
                <Navbar />
              </div>

            <div className="cookiesImg">
                    <div className="headerCookies">
                        <h1 id="OsobniNadpis">Zásady ochrany osobních a dalších zpracovaných údajů</h1>
                    </div>
              </div>
              <div className="cookiesContent">
                <div className="cookiesNadpis">
                  <h2>
                  Kdo zpracovává Vaše údaje?
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Vaše osobní údaje dle níže uvedených podmínek bude zpracovávat 
                  Michaela Mrázková (IČO: 64853432, Chelčického 1145, 290 01 Poděbrady) provozovatel 
                  webových stránek www.------.cz  
                </p>
                </div>

                <div className="cookiesNadpis">
                  <h2>
                  Kontaktní formuláře
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Použitím kontaktního formuláře udělujete souhlas výše uvedené společnosti, aby zpracovávala následující osobní údaje:
                  <ul>
                       <li> jméno, příjmení</li>
                       <li>e-mail</li>
                       <li>telefon</li>
                  </ul>
                  Uvedené osobní údaje budou zpracovány za účelem vyřízení vašeho dotazu či 
                  poptávky, tyto údaje budou zpracovány po dobu trvání vašeho zájmu 
                  maximálně 5 let nebo po dobu trvání spolupráce. Dále souhlasíte s tím, že při 
                  odeslání kontaktního formuláře bude spuštěna služba Google reCAPTCHA, která 
                  ověřuje, že nejedná o robota, ale o skutečného návštěvníka našich webových stránek.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  Na základě Nařízení máte právo
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                    požadovat informaci, jaké (vaše) osobní údaje zpracovávám <br />
                    požadovat vysvětlení ohledně zpracování osobních údajů<br />
                    vyžádat si přístup k těmto údajům a patřičné údaje nechat aktualizovat nebo opravit<br />
                    požadovat po mě výmaz osobních údajů – výmaz bude mít za následek ukončení jednání o smlouvě
                    v případě vašich pochybností o dodržení povinností souvisejících se zpracováním osobních údajů se můžete obrátit na mě, 
                    nebo na Úřad pro ochranu osobních údajů
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  Zabezpečení osobních údajů
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                    Prohlašuji, že jsme přijali veškerá technická a organizační opatření k zabezpečení 
                    osobních údajů.
                    Přijali jsem technická opatření k zabezpečení datových úložišť a úložišť 
                    osobních údajů v listinné podobě, 
                    (ochrana vytištěných faktur, smluv)
                    Prohlašuji, že k osobním údajům mají přístup pouze mnou pověřené osoby.
                    Adam Klouda, sídlem Hodonínská 634/21, 617 00, Brno – Komárov, IČ: 06506771 má právo tyto podmínky kdykoli změnit. Nová verze podmínek ochrany osobních údajů bude zveřejněna na této stránce a zároveň mi bude po dobu zpracovávání zaslána nová verze těchto podmínek na poskytnutou e-mailovou adresu. Pro informace o cookies si prostudujte samostatnou informační stránku.
                  </p>
                </div>
              </div>
              <div className="formPage">
                <div className="cookiesContactForm">
                <Form />
                </div>
              </div>
              <Footer />
              
        </div>

    )
}

export default Cookies