import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="min-h-[90px] bg-black px-5 py-4 flex flex-col gap-4 md:grid md:grid-cols-[40%_60%] md:items-center">
      <section className="text-green-300 flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">My-Ecomm-Mart</h1>
      </section>

      <section className="mt-1 flex flex-wrap items-center justify-center gap-4 text-white md:justify-end">
        <Link to="/" className="text-xl hover:text-green-300">
          Home
        </Link>

        <Link to="/categories" className="text-xl hover:text-green-300">
          Categories
        </Link>

        <Link to="/products" className="text-xl hover:text-green-300">
          Products
        </Link>

        <Link to="/contact-us" className="text-xl hover:text-green-300">
          Contact Us
        </Link>

        <button
          type="button" onClick={() =>
            confirm("Are you sure you would like to Log Out")
            // alert("Logout Successfully !!")
          }
          className="rounded-lg px-3 py-2 text-white hover:bg-green-400"
        >
          Logout
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
