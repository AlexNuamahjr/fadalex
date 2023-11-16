import Header from "./Header";
import Footer from "./Footer";

const MasterLayout = ({children}) => {
  return (
    <body id="top">
        <Header />
        {children}
        
    </body>
  )
}

export default MasterLayout;
