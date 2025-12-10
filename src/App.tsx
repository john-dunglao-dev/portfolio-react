import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHeader from './components/layouts/MyHeader';
import MyFooter from './components/layouts/MyFooter';
import { Provider } from 'react-redux';
import store from './stores';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutMePage = lazy(() => import('./pages/AboutMePage'));
const ContactMePage = lazy(() => import('./pages/ContactMePage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyHeader />

        <div className="container mx-auto mt-12 px-6 md:px-0">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactMePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>

        <MyFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
