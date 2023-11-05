import "./App.css";
import SearchButton from "./components/SearchButton";

function App() {
  return (
    <section className="flex items-center h-[100vh]">
      <div className="bg-[#242424] h-24 w-full flex justify-center items-center rounded-lg">
        <SearchButton />
      </div>
    </section>
  );
}

export default App;
