import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import CookiesPage from "./CookiesPage";
import OsobniPage from "./OsobniPage";
import HurPage from "./HurPage";
import WinPage from "./WinPage";
import Agepage from "./Agepage";
import SpartaPage from "./SpartaPage";
import AlzaPage from "./AlzaPage";
import WcServisPage from "./WcServisPage";
import OnlinePage from "./OnlinePage";
import ObleceniPage from "./ObleceniPage";
import TiskPage from "./TiskPage";
import CalmPage from "./CalmPage";
import HurricanesMerch from "./HurricanesMerch";
import HousePage from "./HousePage";
import WedryPage from "./WedryPage";
import RaketaciPage from "./RaketaciPage";
import MenuPage from "./MenuPage";
import KalendarPage from "./KalendarPage";
import ScrapPage from "./ScrapPage";
import PlesPage from "./PlesPage";
import ShowRoomPage from "./ShowRoomPage";
import ColaPage from "./ColaPage";
import BotaPage from "./BotaPage";
import PFPage from "./PFPage";
import WcRent from "./WcRentPage";
import LikvidacePage from "./LikvidacePage";
import SpacePage from "./SpacePage";
import DevetsilPage from "./DevetsilPage";



function App() {

    return(
        <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Cookies" element={<CookiesPage />} />
            <Route path="/Osobni" element={<OsobniPage />} />


            <Route path="/OnlineGrafika" element={<OnlinePage />} />
            <Route path="/ObleceniPage" element={<ObleceniPage />} />
            <Route path="/TiskPage" element={<TiskPage />} />


            <Route path="/Hurricanes" element={<HurPage />} />
            <Route path="/Windstorms" element={<WinPage />} />
            <Route path="/MyAge" element={<Agepage />} />
            <Route path="/Sparta" element={<SpartaPage />} />
            <Route path="/Alza" element={<AlzaPage />} />
            <Route path="/WcServis" element={<WcServisPage />} />
            <Route path="/Calm2Be" element={<CalmPage />} />
            <Route path="/HurricanesMerch" element={<HurricanesMerch />} />
            <Route path="/HousePage" element={<HousePage />} />
            <Route path="/WedryPage" element={<WedryPage />} />
            <Route path="/Raketaci" element={<RaketaciPage />} />
            <Route path="/Menu" element={<MenuPage />} />
            <Route path="/Kalendar" element={<KalendarPage />} />
            <Route path="/BohemiaScrap" element={<ScrapPage />} />
            <Route path="/Ples" element={<PlesPage />} />
            <Route path="/IShowroom" element={<ShowRoomPage />} />
            <Route path="/Cola" element={<ColaPage />} />
            <Route path="/Shoes" element={<BotaPage />} />
            <Route path="/PF" element={<PFPage />} />
            <Route path="/WcRent" element={<WcRent />} />
            <Route path="/Likvidace" element={<LikvidacePage />} />
            <Route path="/SpaceMission" element={<SpacePage />} />
            <Route path="/Devetsil" element={<DevetsilPage />} />
        </Routes>
        </>

    )
}

export default App