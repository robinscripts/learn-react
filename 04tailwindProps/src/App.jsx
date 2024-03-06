import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    purps: "test",
    c: 21
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
      <div className="flex space-x-4">
        <Card username = "Reena" btnText="click here to visit" obj={myObj} s2="s2" />
        <Card username = "Rapsy" btnText="click here to visit" obj={myObj} s2="s2" />
        <Card username = "jo" btnText="click here to visit" obj={myObj} s2="s2" />
      </div>
    </>
  );
}

export default App;
