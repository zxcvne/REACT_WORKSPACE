import "./App.css";
import Hello from "./components/Hello";
import HelloProps from "./components/HelloProps";
import Start from "./components/Start";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import InputSample2 from "./components/InputSample2";
import UserList2 from "./components/user/UserList2";

function App() {
  return (
    <div className="App">
      <h1>Hello React World~!!</h1>
      <Start />
      <Hello />
      <Hello />
      <HelloProps name="react" color="red" />
      <hr />
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <InputSample2 />
      <hr />
      <UserList2 />
      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
