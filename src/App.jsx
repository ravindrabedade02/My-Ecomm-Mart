import Navbar from "./components/nav-bar/Navbar";
import Product from "./components/product/Product";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import ContactUs from "./components/Contact-Us/Contactus";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function Home() {
 return (
   <div>
     <Product />
     <Categories />
     <Products />
   </div>
 );
}

function App() {
  return(
  // const [state, setState] = useState((name = "Ravi"));
  // const [data, setDta] = useState([<h1 className="text-red-500 p-5">Heading</h1>, <p className="text-green-800 p-5">This is Jsx</p>]);

  // const [state, setState] = useState([
  //   "Aditya",
  //   "Rohit",
  //   "Saurabh",
  //   "Ankit",
  //   "Rohit",
  //   "Aditya",
  //   "Saurabh",
  // ]);

  <>

    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} >
        </Route>
        <Route path="/contact-us" element={<ContactUs />} /> 

        <Route path="*" element={<Home />} />
      </Routes>
    </>

    // <div className="">
    //   {/* <h1 className="p-10 m-5 text-3xl text-orange-500 font-bold">
    //     Rendering the Data in JSX: {Ravi}
    //   </h1> */}
    //   {data}
    // </div>

    // <div className="m-10">
    // <ol type="a">
    //  {
    //      state.map(function(element){
    //          return <li>{element}</li>
    //         })
    //       }
    //       </ol>
    //     </div>
  );
}

export default App;
