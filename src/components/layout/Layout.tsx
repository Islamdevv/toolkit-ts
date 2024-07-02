import HomePage from "../pages/HomePage";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
