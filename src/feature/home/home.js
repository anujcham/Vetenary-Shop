import { petsData } from "../../data";
import "./style.css"

export default function Home() {
  return (
      <div className="pets-container">
        {petsData.map((item, index) => {
          return (
            <div className="pets-card">
              <img src={item.image} />
              <h3>{"Pet Name "}</h3>
              <p>{item.name}</p>
              <h3>{"Owner Name "}</h3>
              <p>{item.owner}</p>
            </div>
          );
        })}
      </div>
  );
}
