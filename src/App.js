import {useState, useEffect} from 'react'

//Styles
import './styles.css';

function App() {

  const [contratistas, setContratistas] = useState([]);

  const fetchContratistas = async () => {
    const data = await fetch("");
    const contratistasData = await data.json();
    setContratistas(contratistasData);
  }

  useEffect(() => {
    fetchContratistas();
  }, [])

  const orderHighToLow = () => {
    const newArray = Array.from(contratistas)
    const orderHigh = newArray.sort((a, b) => a.id - b.id);
    setContratistas(orderHigh);
  }

  const orderLowToHigh = () => {
    const newArray = Array.from(contratistas)
    const orderLow = newArray.sort((a, b) => b.id - a.id);
    setContratistas(orderLow);
  }

  return (
    <div>
      <button type="button" onClick={orderHighToLow}>Ascendente</button>
      <button type="button" onClick={orderLowToHigh}>Descendente</button>
      <div className="App">
        <ul className="list">
        {
          contratistas.map((contratista) => (
            <li key={contratista.id}>
              {contratista.id} - {contratista.cuit}
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
