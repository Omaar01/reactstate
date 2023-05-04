import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
  const[name, setName] = useState("Omar")
  const[bio, setBio] = useState("moroccan")
  const[profession, setProfession] = useState("pharma")
  const[img, setImg] = useState("logo512.png")
  const[check, setcheck] = useState(false)
  function handlebouton(){ 
    setcheck(!check)
  }
  if (check){
  return (
    <div className="App">
    <button onClick={handlebouton}>clickme</button>

      <h1>Hello my {name} i am {bio} i work in a {profession} this is my image </h1>
      <img src={img}></img>   
    </div>
  );
} 
else {
  return(
    <button onClick={handlebouton}>clickme</button>

  )
}
  }


export default App;
