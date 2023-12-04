import Header from "./Header";
import Footer from "./Footer";

const MasterLayout = ({children}) => {
  return (
    <div id="top">
        <Header />
        {children}
        
    </div>
  )
}

export default MasterLayout;
