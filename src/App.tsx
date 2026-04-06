import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import RouterComponent from './RouterComponent';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <a
                    href="#main-content"
                    className="absolute -left-[9999px] top-4 z-[200] rounded-md bg-primary px-4 py-2 font-medium text-background no-underline transition-none focus:left-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
                >
                    Skip to main content
                </a>
                <Header />
                <main id="main-content">
                    <RouterComponent />
                </main>
                <Footer />
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
