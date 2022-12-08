import Footer from "../organisms/Footer";
import Header from "../organisms/Header"

const DefaultLayout = ({children}: any) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default DefaultLayout;
