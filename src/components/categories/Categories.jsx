
import { useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([
    {
      image: "https://biogharlb.com/cdn/shop/collections/all_products.png?v=1732737232",
      title: "ALL",
    },
    {
      image: "https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-modern-electronic-device_756405-53536.jpg",
      title: "Electronics",
    },
    {
      image: "https://tse4.mm.bing.net/th/id/OIP.LI7ohUTG5GFEsgoMdhhZ9wHaEK?r=0&pid=Api&h=220&P=0",
      title: "Mens",
    },
    {
      image: "https://wallpapercave.com/wp/wp6130531.jpg",
      title: "Womens",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg",
      title: "Kids",
    },
    {
      image: "https://www.thornior.com/content/images/2023/11/Screenshot-2023-11-23-at-17.20.53.png",
      title: "Furniture",
    },
    {
      image: "https://png.pngtree.com/background/20230612/original/pngtree-various-makeup-products-lie-on-a-table-on-dark-picture-image_3185889.jpg",
      title: "Cosmetics",
    },
  ]);

  return (
    <section id="categories" className="w-[90%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">
        Shop by Category
      </h2>

      <div className="flex flex-wrap justify-evenly gap-6">
        {categories.map((element) => (
          <div className="w-28 text-center">
           
            <img
              src={element.image}
              loading="lazy"
              className="w-24 h-24 mx-auto rounded-full object-cover hover:focus:outline outline-offset-4 active:outline-2"
            />
            <h3 className="mt-3 font-bold text-black text-black hover:text-red-500 transition-colors duration-300">{element.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
