import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <nav className="bg-slate-200">
        <div className="container flex items-center justify-between mx-auto py-4">
          <Link className="font-bold text-2xl" to="/">
            LOGO
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto flex">
        <aside className="border-r border-r-blue-500">
          <ul className="space-y-4 py-4 pr-4">
            <li>
              <Link
                className="block py-2 px-4 hover:bg-slate-400"
                to="/dashboard/points"
              >
                Points
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 hover:bg-slate-400"
                to="/dashboard/locations"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 hover:bg-slate-400"
                to="/dashboard/products"
              >
                Products
              </Link>
            </li>
          </ul>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
