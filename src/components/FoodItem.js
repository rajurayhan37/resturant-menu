function FoodItem(props) {
  return (
    <div className="flex flex-col">
      <div>
        <img className="w-full" src={props.image} alt="d" />
      </div>
      <div className="flex justify-between bg-white rounded-b-xl">
        <div className="p-5">
          <h1 className="text-[#2E266F] text-xl font-semibold">
            Hand Sandwich
          </h1>
          <p className="mt-3 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing.{" "}
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-xl text-[#FE043C] font-semibold">$10.25</h2>
        </div>
      </div>
    </div>
  );
}
export default FoodItem;
