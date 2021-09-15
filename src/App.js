import { useState } from "react";
import produce from "immer";

function App() {
  const [info, setInfo] = useState({
    name: "",
    age: "",
  });
  const [data, setData] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo(
      produce(info, (draft) => {
        draft[name] = value;
      })
    );
    //setInfo({ ...info, [name]: value });
  };

  const onSubmit = () => {
    setData(
      produce(data, (draft) => {
        draft.push(info);
      })
    );
    //setData([...data, info]);

    setInfo(
      produce(info, (draft) => {
        draft.name = "";
        draft.age = "";
      })
    );
    //setInfo({ name: "", age: "" });
  };
  return (
    <div>
      <input
        value={info.name}
        type="text"
        placeholder="Enter Name..."
        name="name"
        onChange={handleInput}
      ></input>
      <br />
      <input
        value={info.age}
        type="number"
        placeholder="Enter Age..."
        name="age"
        onChange={handleInput}
      ></input>

      <br />
      <button onClick={onSubmit}>Submit</button>
      <div>
        {data.map((obj) => (
          <div>
            <ul>
              <li>{obj.name}</li>
              <li>{obj.age}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
