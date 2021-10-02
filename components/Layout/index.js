import Header from "./Header";
import Footer from "./Footer";
// import ScrollToTop from "react-scroll-to-top";

function Layout({ children }) {
  return (
    <div>
      <Header />
        <div>{children}</div>
      <Footer />
      {/* <ScrollToTop smooth /> */}
    </div>
  );
}

export default Layout;
