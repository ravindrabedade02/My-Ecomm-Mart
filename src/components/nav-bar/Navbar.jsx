function Navbar() {
  return (
    <nav className="min-h-[90px] bg-black px-5 py-4 flex flex-col gap-4 md:grid md:grid-cols-[40%_60%] md:items-center">
      <section className="text-green-300 flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">My-Ecomm-Mart</h1>
      </section>

      <section className="text-white flex flex-wrap justify-center mt-1 gap-4 md:justify-end md:items-center">
        <a href="/" className="text-xl hover:text-green-300">
          Home
        </a>
        <a href="#categories" className="text-xl hover:text-green-300">
          Categories
        <a href="#products" className="text-xl hover:text-green-300">
        </a>
          Products
        </a>
        <a href="#contact" className="text-xl hover:text-green-300">
          Contact Us
        </a>
        <a>
          <button
            className="rounded-lg px-3 py-2 text-white hover:bg-green-400">Logout
          </button>
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
