import { Route, Routes } from 'react-router-dom';

import { MarvelHeroes } from '../marvel/MarvelHeroes';
import { SearchScreen } from '../search/SearchScreen';
import { DcHeroes } from '../dc/DcHeroes';

import { Navbar } from '../ui/Navbar';
import { VerHero } from '../hero/VerHero';
export const AdminRoutes = () => {
  return <>
        <Navbar/>
        <div className='container-fluid mt-3'>
            <Routes>
                <Route path="/" element={<MarvelHeroes />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/dc" element={<DcHeroes />} />
                <Route path="/marvel" element={<MarvelHeroes />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/hero/:id" element={<VerHero/>}/>
            </Routes>

        </div>
  </>;
};
