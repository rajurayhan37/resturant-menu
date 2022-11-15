import ProductImage from "./product-hero.png";
import Dotted from "./dotted.svg";
import Leaf from "./leaf.png";

function Hero() {
  return (
    <section className="pt-16 mb-24">
      <div className="grid grid-cols-2">
        <div className="px-16 py-32 text-[#2E266F]">
          <h1 className="text-6xl opacity-10 font-black">Food.</h1>
          <h1 className="text-5xl font-bold ">
            Discover Restaurant & Delicious Food
          </h1>
          <div className="mt-8 w-4/5 flex justify-between bg-white">
            <h1 className="py-4 px-5">See all our foods..</h1>
            <button className="bg-[#FE043C] py-3 px-12 rounded-tl-[2.5rem] text-white">
              GO
            </button>
          </div>
        </div>
        <div className="relative">
          <img className="w-4/5" src={Dotted} alt="d"/>
          <img className="absolute top-0 right-0 w-3/5" src={Leaf} alt="fg"/>
          <img className="absolute bottom-0 right-0 w-3/5" src={ProductImage} alt="g"/>
        </div>
      </div>
      <div className="px-16 grid grid-cols-2">
        <div className="flex gap-5 py-2">
          <div className="w-[1rem] h-full bg-[#FE043C]"></div>
          <h2 className="px-4 text-4xl text-[#2E266F] font-medium">
            Some top restaurant for dining in or Take away!
          </h2>
        </div>
        <div>
          <p className="text-sm text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
            ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est, adipiscing cursus auctor eget sed.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
