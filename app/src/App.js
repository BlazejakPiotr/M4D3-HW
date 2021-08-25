import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";

import books from "./data/history.json";

import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign message="Hello, this is working" />
      <MyBadge text="Strive Badge" color="primary" />
      <SingleBook book={books[0]} />
    </div>
  );
}

export default App;
