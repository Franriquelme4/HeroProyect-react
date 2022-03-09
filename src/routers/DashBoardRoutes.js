import React from 'react'
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import { HeroScreen } from '../components/hero/HeroScreen';
export const DashBoardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>

      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
        </div>
     

    </>
  )
}
