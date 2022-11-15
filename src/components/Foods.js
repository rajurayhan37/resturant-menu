import food1 from "./food-1.png";
import food2 from "./food-2.png";
import food3 from "./food-3.png";
import food4 from "./food-4.png";
import FoodItem from "./FoodItem";

function Foods() {
  return (
    <section className="px-3 sm:px-6 md:px-14 lg:px-16">
      <div className="">
        <h1 className="text-center">Explor our Foods and Services</h1>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FoodItem image={food1}/>
        <FoodItem image={food2}/>
        <FoodItem image={food3}/>
        <FoodItem image={food4}/>
        <FoodItem image={food4}/>
        <FoodItem image={food4}/>
      </div>
    </section>
  );
}
export default Foods;
