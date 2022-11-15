import Logo from './logo-dark.png';
function Navigation() {
  return (
    <nav className="px-16 py-5 fixed w-full z-[100] bg-[#FFF5EC]">
      <div className="flex justify-between">
        <div>
            <img className='w-1/4' src={Logo} alt="Logo"/>
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
