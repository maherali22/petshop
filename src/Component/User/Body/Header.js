import { useNavigate } from "react-router-dom";
import "./Header.css"; 


const Header = () => {
  const navigate=useNavigate();
  return (
    <div className="container" >
     <div> <div className="text-section" >
        <p className="bestsellers">LOVE YOUR PETS</p>
        <h1 className="title">LOVE OUR SHOP </h1>
        <button className="shop-now" onClick={()=>navigate('/shop')}>SHOP NOW</button>
      </div></div>
     
    </div>
  );
};

export default Header;
