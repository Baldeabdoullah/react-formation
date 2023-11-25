import logo from "./logo.svg";
import "./App.css";
import MyButton from "./composants/MyButton";
import AboutPage from "./composants/AboutPage";
import { useState } from "react";

function App() {
  const User = {
    name: "sally",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const products = [
    { id: 1, isFruit: false, title: "Chou" },
    { id: 2, isFruit: false, title: "Ail" },
    { id: 3, isFruit: true, title: "Pomme" },
  ];

  const ListItems = products.map((product) => (
    <li
      style={{
        color: product.isFruit ? "red" : "orange",
      }}
      key={product.id}
    >
      {product.title}
    </li>
  ));

  function HandelClick() {
    alert("avez vous clice");
  }

  const [count, setcount] = useState(0);

  function TheClick() {
    setcount(count + 1);
  }

  return (
    <div className="App">
      <h1>Bienvenue dans mon appli</h1>
      <MyButton count={count} onClick={TheClick} />
      <MyButton count={count} onClick={TheClick} />

      <button onClick={HandelClick}>alert</button>

      <AboutPage />

      <h1>{User.name}</h1>
      <img
        className="avatar"
        src={User.imageUrl}
        style={{
          width: User.imageSize,
          width: User.imageSize,
        }}
        alt=""
      />

      <ul>{ListItems}</ul>
    </div>
  );
}

export default App;
