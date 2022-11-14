const { default: Footer } = require("./Footer");
const { default: Navigation } = require("./Navigation");

function Layout({ children }) {
  return (
    <div className="font-poppins bg-[#FFF5EC]">
      <header className="px-16">
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className="px-16">
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
