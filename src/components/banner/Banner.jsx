
import banner from "../../assets/front-view-shopbucket.png";

function Banner() {
  return (
    <section className="h-[250px] sm:h-[350px] md:h-[500px] w-[90%] mx-auto my-8 overflow-hidden rounded-xl">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </section>
  );
}

export default Banner;
