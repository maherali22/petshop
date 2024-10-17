import React from "react";
import Navbar from "./Component/User/Navbar/Navbar";
import Login from "./Component/User/Login/Login";
import SignUp from "./Component/User/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import DisplayDogItem from "./Component/User/Display/DisplayDogItem";
import DisplayCatItem from "./Component/User/Display/DisplayCatItem";
import DisplaySmallItem from "./Component/User/Display/DisplaySmallItem";
import Home from "./Component/User/Body/Home";
import Footer from "./Component/User/Body/Footer";
import Shop from "./Component/User/Display/Shop";
import ProductDisplay from "./Component/User/Display/ProductDisplay";
import Collection from "./Component/User/Navbar/Support/collection-delivery";
import Support from "./Component/User/Navbar/Support/Support";
import Profile from "./Component/User/Navbar/Profile/Profile";
import CartPage from "./Component/User/Navbar/Cart/CartPage";
import Payment from "./Component/User/Payment/Payment";
import Pets from "./Component/User/Body/Pets";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/dog" element={<DisplayDogItem />} />
          <Route path="/cat" element={<DisplayCatItem />} />
          <Route path="/small" element={<DisplaySmallItem />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/productdetails/:productId"
            element={<ProductDisplay />}
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/support" element={<Support />} />
          <Route path="/collection-delivery" element={<Collection />} />
        </Routes>

        <Footer />
      </>
    </div>
  );
}

export default App;
