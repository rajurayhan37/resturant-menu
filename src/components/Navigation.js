function Navigation() {
  return (
    <nav className="py-5">
      <div className="flex gap-24">
        <div>
            <h1 className="text-3xl text-[#FE043C] font-bold">logo</h1>
        </div>
        
        <ul className="flex gap-3 items-center text-[#2E266F]">
          <li className="font-semibold">Home</li>
          <li>Menu</li>
          <li>Others</li>
        </ul>
        
      </div>
    </nav>
  );
}
export default Navigation;
