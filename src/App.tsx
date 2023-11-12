import Home from "./components/home/Home";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <main className="h-screen flex gap-8">
      <SideBar />
      <Home />
    </main>
  );
}

export default App;
