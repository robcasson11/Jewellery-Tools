import { Outlet, Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <main className="d-flex vh-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-2">Jewellery Tools</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link
                to={"/"}
                className={`nav-link fw-bold py-1 px-0 ${
                  location.pathname === "/" ? "active" : null
                }`}
              >
                Home
              </Link>
              <Link
                to={"weightConverter"}
                className={`nav-link fw-bold py-1 px-0 ${
                  location.pathname === "/weightConverter" ? "active" : null
                }`}
              >
                Weight Converter
              </Link>
              <Link
                to={"sizeConverter"}
                className={`nav-link fw-bold py-1 px-0 ${
                  location.pathname === "/sizeConverter" ? "active" : null
                }`}
              >
                Size Converter
              </Link>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <Outlet />
        </main>

        <footer className="mt-auto text-white-50">
          <p>By the Platinum Forge</p>
        </footer>
      </div>
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
}

export default App;
