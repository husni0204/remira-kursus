import { Route, Routes } from 'react-router-dom';
import { FaqPage, HomePage, KelasPage, SyaratKetenPage, TestimonialPage } from '../pages';
import Forbidden from '../pages/Forbidden';

const RoutesIndex = () => {
    return (
        <Routes>
            {/* route homepage */}
            <Route path='/' element={HomePage()} />

            {/* router other page */}
            <Route path='/kelas' element={KelasPage()} />
            <Route path='/testimonial' element={TestimonialPage()} />
            <Route path='/faq' element={FaqPage()} />
            <Route path='/syaratketen' element={SyaratKetenPage()} />

            {/* router forbidden page */}
            <Route path='*' element={<Forbidden />} />
        </Routes>
    );
};

export default RoutesIndex;
