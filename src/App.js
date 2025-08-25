import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partner from "./components/Partner/Partner";
import "./scss/main.scss";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Partner />
      </main>
    </div>
  );
}

export default App;
