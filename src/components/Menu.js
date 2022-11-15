import MenuItem from "./MenuItem";

function Menu() {
  return (
    <section className="px-3 sm:px-4 md:px-10 lg:px-16">
      <div className="flex flex-col items-center py-12">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4">
            <div className="bg-[#2E266F] w-[0.3rem]"></div>
            <h1 className="text-4xl text-[#2E266F] font-black">Our Menu</h1>
          </div>
          <h2 className="px-3 text-[#FE043C] font-medium">Some top restaurant for dining in or Take away!</h2>
        </div>
      </div>
      <div className="grid gap-3 grid-cold-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
export default Menu;
