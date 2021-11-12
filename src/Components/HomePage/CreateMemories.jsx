import "../../Styles/CreateMemories.css";
import { useState } from "react";
const data = [
  {
    text: " HILTON CANCUN, AN ALL-INCLUSIVE RESORT",
    image:
      "https://media.expedia.com/hotels/4000000/3850000/3848400/3848357/b101eb6c_z.jpg",
  },
  {
    text: " MANGROVE BEACH CORENDON CURACAO, CURIO BY HILTON",
    image:
      "https://images.trvl-media.com/hotels/13000000/12490000/12483900/12483827/67ac0c31_z.jpg",
  },
  {
    text: "CANOPY BY HILTON PARIS TROCADERO",
    image:
      "https://images.unsplash.com/photo-1516880623201-1208bf48367d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    text: "HILTON LOS CABOS BEACH & GOLF RESORT",
    image:
      "https://www.hzphotography.gr/wp-content/uploads/2017/07/Exterior-4-500x1000.jpg",
  },
];

function CreateMemories() {
  const [showData, setShowData] = useState(data);
  console.log(showData);
  return (
    <div class="Create-New-Memories">
      <h1>Create New Memories Around the World</h1>
      <h4>
        There’s plenty of 2021 left to experience these iconic properties, ready
        to welcome you for an incredible stay.
      </h4>
      <div class="row">
        {showData.map((item) => (
          <div class="col-md-3">
            <div class="thumbnail">
              <h4 class="centered-text">{item.text}</h4>
              <img src={item.image} alt="Fjords" style={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateMemories;
