import Navigation from "../Navigation";
import Footer from "../Footer"
import SharedNavigation from "../ui/SharedNavigation/SharedNavigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer/>
    </>
  );
};

export default Layout;