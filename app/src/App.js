import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign message="Hello, this is working" />
      <MyBadge text="Strive Badge" color="primary" />
    </div>
  );
}

export default App;
