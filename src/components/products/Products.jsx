import axios from "axios";
import { useState } from "react";

function Products() {
  const [products, setShowProducts] = useState([]);

  //get request
  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      // setProducts(response.data.products);
      setShowProducts(response.data.products);
    } catch (error) {
      console.log("error");
    }
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const [products, setProducts] = useState([
  //   {
  //     title: "Essence Mascara Lash Princess",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  //     price: 9.99,
  //     category: "beauty",
  //     description: "Volumizing and lengthening mascara.",
  //     rating: 2.56,
  //   },
  //   {
  //     title: "Eyeshadow Palette with Mirror",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  //     price: 19.99,
  //     category: "beauty",
  //     description: "Eyeshadow palette with a built-in mirror.",
  //     rating: 2.86,
  //   },
  //   {
  //     title: "ZEBRONICS: Thunder Wireless Headphone",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uxPbW1zNO1aBOXaCwKnMVkuHqf_YjZxDHbhlNCpZ-w&s=10",
  //     price: 14.99,
  //     category: "Electronics",
  //     description: "BT v6.0 | 60h | Gaming mode | ENC | Call Function",
  //     rating: 4.64,
  //   },
  //   {
  //     title: "Day Dreaming Pink Lipstick",
  //     image:
  //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0qaXVMIaW7GkcGYgBr5EGBItfCch_HBu3VLuYcvo8VyxrxwYHHdhMU_-vpLrrJJ5c6zf6sFh8ulX-Lb7RSZhEKbFFiUnHdqQZNUFZlw9sk4BxN3QeWFWiVZA",
  //     price: 12.99,
  //     category: "beauty",
  //     description: "Nykaa So Creme! Creamy Matte Lipstick.",
  //     rating: 4.36,
  //   },
  //   {
  //     title: "Red Nail Polish",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
  //     price: 8.99,
  //     category: "beauty",
  //     description: "Glossy red nail polish.",
  //     rating: 4.32,
  //   },
  //   {
  //     title: "Calvin Klein CK One",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  //     price: 49.99,
  //     category: "fragrances",
  //     description: "Fresh unisex fragrance.",
  //     rating: 4.37,
  //   },
  //   {
  //     title: "Annibale Colombo Bed",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
  //     price: 1899.99,
  //     category: "furniture",
  //     description: "Elegant and luxurious bed frame.",
  //     rating: 4.77,
  //   },
  //   {
  //     title: "Apple",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
  //     price: 1.99,
  //     category: "groceries",
  //     description: "Fresh and crisp apples.",
  //     rating: 4.19,
  //   },
  //   {
  //     title: "Beef Steak",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
  //     price: 12.99,
  //     category: "groceries",
  //     description: "Quality beef steak.",
  //     rating: 4.47,
  //   },
  //   {
  //     title: "Ice Cream",
  //     image:
  //       "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
  //     price: 5.49,
  //     category: "groceries",
  //     description: "Creamy ice cream.",
  //     rating: 3.39,
  //   },
  // ]);

  return (
    <section id="products" className="w-[90%] mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">
        All Products</h2>

      <button
        onClick={getProducts}
        className="mx-3 m-5 px-5 bg-blue-400 h-8 font-bold rounded-lg">
          Get Products
        </button>

      <div className="flex flex-wrap gap-6 justify-center">
        {products.map(function (element) {
          return (
            <div
              key={element.id}
              className="w-full sm:w-[270px] p-3 text-center shadow-2xl rounded-xl"
            >
              <img
                src={element.images?.[0]}
                alt={element.title}
                className="w-full h-[200px] object-contain"
              />

              <h3 className="text-xl font-bold my-5">
                {element.title}
              </h3>

              <p className="my-3 font-bold">
                ${element.price.toFixed(2)}
              </p>

              <p className="my-3 text-gray-600">
                {element.description}
              </p>

              {/* <p className="my-3">
                ⭐ {element.rating}
              </p> */}

              <button
                type="button"
                onClick={() =>
                  alert("Selected: " + element.title)
                }
                className="p-2 rounded-xl bg-sky-400 text-white font-bold hover:bg-sky-500"
              >
                Product Details
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
