
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
                        <h1>Zásady Cookies</h1>
                    </div>
                    <div className="headerTxtCookies">
                        <p>Tyto Zásady cookies byly naposledy aktualizovány 2. 3. 2023 a vztahují se na občany
                             a osoby s trvalým pobytem v Evropském hospodářském prostoru.</p>
                    </div>
              </div>
              <div className="cookiesContent">
                <div className="cookiesNadpis">
                  <h2>
                    1. Úvod
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Naše webové stránky https://-----.cz (dále jen „web“) používají cookies a další související technologie
                   (pro usnadnění jsou všechny technologie označovány jako „cookies“). Cookies také vkládají třetí strany,
                    které jsme zapojili. V níže uvedeném dokumentu vás informujeme o používání cookies na našem webu.
                  </p>
                </div>

                <div className="cookiesNadpis">
                  <h2>
                  2. Co jsou soubory cookies?
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Soubor cookie je malý jednoduchý soubor, který je odeslán spolu se stránkami tohoto webu a uložen
                  prohlížečem na pevný disk počítače nebo jiného zařízení. Informace v nich uložené mohou být vráceny 
                  našim serverům nebo serverům příslušných třetích stran během následné návštěvy.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  3. Co jsou skripty?
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Skript je část programového kódu, který slouží k tomu, aby naše webové stránky fungovaly správně 
                  a interaktivně. Tento kód je spuštěn na našem serveru nebo na vašem zařízení.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  4. Co je to webový maják?
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Webový maják (nebo pixelová značka) je malý, neviditelný kus textu nebo obrázku na webu, 
                  který se používá ke sledování provozu na webu. Za tímto účelem jsou různá data o vás ukládána
                  pomocí webových majáků.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  5. Cookies
                  </h2>
                  <h3>5.1 Technické nebo funkční soubory cookies</h3>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Některé soubory cookies zajišťují, že určité části webu fungují správně a že vaše uživatelské preference 
                  zůstávají známé. Umístěním funkčních souborů cookies usnadňujeme návštěvu našich webových stránek.
                  Tímto způsobem nemusíte při návštěvě našich webových stránek opakovaně zadávat stejné informace a například 
                  položky zůstanou v nákupním košíku, dokud nezaplatíte. Tyto cookies můžeme umístit bez vašeho souhlasu.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h3>
                  5.2 Statistické cookies
                  </h3>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Statistické soubory cookies využíváme k optimalizaci webových stránek pro naše uživatele. 
                  Díky těmto statistickým cookies získáváme přehled o používání našich webových stránek. 
                  Žádáme vás o povolení k ukládání statistických souborů cookies.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h3>
                  5.3 Reklamní soubory cookies
                  </h3>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Na tomto webu používáme reklamní soubory cookies, což nám umožňuje přizpůsobit reklamy 
                  za vás a my (a třetí strany) získáváme informace o výsledcích kampaně. To se děje na základě profilu, který 
                  vytvoříme na základě vašeho kliknutí a surfování na https://------.cz a mimo něj. S těmito cookies jste jako 
                  návštěvník webu spojeni s jedinečným ID, takže se stejná reklama například nezobrazuje více než jednou.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h3>
                  5.4 Marketingové/Sledovací cookies
                  </h3>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Marketingové/sledovací cookies jsou soubory cookies nebo jakákoli jiná forma místního úložiště, které se 
                  používají k vytváření uživatelských profilů k zobrazování reklamy nebo ke sledování uživatele na tomto webu 
                  nebo na několika webech pro podobné marketingové účely.
                  <br />
                  <br />
                  Protože tyto soubory cookies jsou označeny jako sledovací, žádáme vás o jejich povolení.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  6. Souhlas
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Když poprvé navštívíte náš web, ukážeme vám vyskakovací okno s vysvětlením o cookies. Jakmile 
                  kliknete na "Uložit předvolby", vyjadřujete svůj souhlas s používáním kategorií souborů cookies a doplňků 
                  popsaných ve vyskakovacím okně a v těchto Zásadách cookies. Používání cookies můžete zakázat 
                  pomocí svého prohlížeče, ale mějte na paměti, že naše webové stránky již nemusí fungovat správně.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  7. Povolení/zakázání a odstranění cookies
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Pomocí internetového prohlížeče můžete automaticky nebo ručně mazat soubory cookies. Můžete také 
                  určit, že některé soubory cookies nemusí být umístěny. Další možností je změnit nastavení internetového 
                  prohlížeče tak, aby se vám při každém uložení souboru cookies zobrazila zpráva. Další informace o těchto 
                  možnostech naleznete v Nápovědě vašeho prohlížeče.
                  <br />
                  <br />
                  Vezměte prosím na vědomí, že náš web nemusí fungovat správně, pokud jsou deaktivovány všechny cookies. 
                  Pokud cookies smažete ve svém prohlížeči, budou znovu umístěny po vašem souhlasu, když znovu 
                  navštívíte naše webové stránky.
                  </p>
                </div>
                <div className="cookiesNadpis">
                  <h2>
                  8. Vaše práva týkající se osobních údajů
                  </h2>
                </div>
                <div className="cookiesTxt">
                  <p>
                  Pokud jde o vaše osobní údaje, máte následující práva:

              Máte právo vědět, proč jsou vaše osobní údaje potřebné, co se s nimi stane a jak dlouho budou uchovány..<br /><br />
              <ul>
                <li>
                Právo na přístup: Máte právo na přístup k vašim osobním údajům, které jsou nám známy.<br />
                </li>
                <li>
                Právo na opravu: Máte právo doplnit, opravit, odstranit nebo zablokovat vaše osobní údaje, kdykoli budete chtít.<br />
                </li>
                <li>
                Pokud nám udělíte souhlas se zpracováním vašich údajů, máte právo tento souhlas odvolat a nechat vaše osobní údaje smazat.<br />
                </li>
                <li>
                Právo na přenos vašich údajů: Máte právo vyžádat si od správce všechny vaše osobní údaje a v celém rozsahu je předat jinému správci.<br />
                </li>
                <li>
                Právo na námitku: proti zpracování vašich údajů můžete namítat. Řídíme se tím, pokud neexistují oprávněné důvody <br />
                ke zpracování.</li>
              </ul>  
              <br />
              <br />
                Pro uplatnění těchto práv nás prosím kontaktujte. Kontaktní údaje najdete ve spodní části těchto Zásad používání souborů cookies. Máte-li stížnost na to, jak nakládáme s vašimi údaji, rádi bychom se o tom dozvěděli, ale máte také právo podat stížnost kontrolnímu orgánu (Úřadu pro ochranu osobních údajů).
                </p>
                </div>
                <div className="cookiesNadpis">
                  <h3>
                  9. Kontaktní údaje
                  </h3>
                </div>
                <div className="cookiesTxt">
                  <p>
                  V případě dotazů nebo komentářů ohledně našich zásad týkajících se souborů cookies a tohoto prohlášení nás prosím kontaktujte pomocí následujících kontaktních údajů:
                  Michaela Mrázková
                  Chelčického 1145, Poděbrady 290 01 
                  Česká republika
                  Web: https://-----.cz
                  E-mail: ------
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