import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Resume/Resume';
import MainPage from './Components/MainPage/MainPage';
import AvtorSvid from './Components/AvtorSvid/AvtorSvid';
import Obrazovanie from './Components/Obrazovanie/Obrazovanie';
import Zvanie from './Components/Zvanie/Zvanie';
import Organization from './Components/Organization/Organization';
import Awards from './Components/Awards/Awards';
import NauchTrud from './Components/NauchTrud/NauchTrud';
import Scopus from './Components/Scopus/Scopus';
import Monograftion from './Components/Monograftion/Monograftion';
import LessonBooks from './Components/LessonBooks/LessonBooks';
import GriffBooks from './Components/GriffBooks/GriffBooks';
import Dissertations from './Components/Dissertations/Dissertations';
import Tranings from './Components/Tranings/Tranings';
import Conferance from './Components/Conferance/Conferance';
import Opposition from './Components/Opposition/Opposition';
import NIRS from './Components/NIRS/NIRS';
import AcademyMobile from './Components/AcademyMobile/AcademyMobile';
import NavFooter from './Components/NavFooter/NavFooter';

function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/avtorsvid' element={<AvtorSvid />} />
        <Route path='/obrazovanie' element={<Obrazovanie />} />
        <Route path='/zvanie' element={<Zvanie />} />
        <Route path='/organization' element={<Organization />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/nauchtrud' element={<NauchTrud />} />
        <Route path='/scopus' element={<Scopus />} />
        <Route path='/monograftion' element={<Monograftion />} />
        <Route path='/lessonbooks' element={<LessonBooks />} />
        <Route path='/griffbooks' element={<GriffBooks />} />
        <Route path='/dissertations' element={<Dissertations />} />
        <Route path='/tranings' element={<Tranings />} />
        <Route path='/conferance' element={<Conferance />} />
        <Route path='/opposition' element={<Opposition />} />
        <Route path='/nirs' element={< NIRS />} />
        <Route path='/academymobile' element={< AcademyMobile />} />
      </Routes>
    <NavFooter />
    </Router>
  );
}

export default App;
