import { Outlet } from 'react-router-dom';
import IMDbNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <IMDbNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
