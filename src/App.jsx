import Navbar from "./components/nav-bar/Navbar";
import Product from "./components/product/Product";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

function App() {

  // const [state, setState] = useState([
  //   "Aditya",
  //   "Rohit",
  //   "Saurabh",
  //   "Ankit",
  //   "Rohit",
  //   "Aditya",
  //   "Saurabh",
  // ]);

  return (
    <div>
      <Navbar />
      <Product />
      <Categories />
      <Products />
    </div>

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