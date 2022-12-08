import Footer from "../organisms/Footer";
import Header from "../organisms/Header"
import SearchForm from "../molecules/SearchForm"

const BookListLayout = ({children}: any) => {
  return (
    <>
    <Header />
    <SearchForm />
    {children}
    <Footer />
    </>
  )
}

export default BookListLayout;
