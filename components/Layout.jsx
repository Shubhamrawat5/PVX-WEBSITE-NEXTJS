import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
