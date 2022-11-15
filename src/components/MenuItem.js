import Product1 from "./product-2.png";
function MenuItem() {
  return (
    <div className="relative cursor-pointer">
      <img className="w-full" src={Product1} alt="h" />
      <div className="absolute bottom-0 w-full h-2/4 pb-10 bg-[#FE043C] text-white opacity-80 rounded-b-xl ">
        <div className="px-6 py-2 relative">
          <h2 className="text-lg">The Wonton</h2>
          <p className="mt-2 text-sm font-light">
            We are all about we are all about to the fullest and all content
            dining out or in!dining out or in!
          </p>
          <p className="mt-3 text-xl font-semibold">$ 500</p>

          <button className="absolute w-[30%] opacity-100 py-2 right-0 bg-white text-[#FE043C] rounded-l-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuItem;
