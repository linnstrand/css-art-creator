import { ShapeArea } from './components/ShapeArea';
import { ShapeMenu } from './components/ShapeMenu';

function App() {
  return (
    <div>
      <header>
        <nav
          aria-label="Main"
          className="flex items-center justify-between w-full"
        >
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">CSS Art Creator</a>
          </div>

          <ul className="flex">
            <li className="h-full flex items-center">
              <a href="/">ClipArt</a>
            </li>
            <li className="h-full flex items-center">
              <a href="shadows">Borders and Shadows</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="relative bg-white flex flex-1 justify-center p-10 mx-6 my-4 max-w-screen-lg">
          <ShapeArea />
        </div>
        <ShapeMenu />
      </main>
    </div>
  );
}

export default App;
