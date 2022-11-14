const { default: Footer } = require("./Footer");
const { default: Navigation } = require("./Navigation");

function Layout({ children }) {
  return (
    <div className="font-poppins">
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
