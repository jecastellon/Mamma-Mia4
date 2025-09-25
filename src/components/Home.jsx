import CardPizza from "./CardPizza";
import Header from "./Header";
import { useState } from "react";
import { pizzas } from "../utils/pizzas"


export default function Home() {
  const [newPizza, setNewPizza] = useState(pizzas);
  return (
    <>
    <Header/>
      <div className="pizzas-grid">
        {newPizza.map((p) => (
          <CardPizza
          key= {p.id}
          desc= {p.desc}
          name={p.name}
          price={p.price}
          ingredients={p.ingredients}
          img={p.img}
          />
        ))}
      </div>
    </>
  )
}
