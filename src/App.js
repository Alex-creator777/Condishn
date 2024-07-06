import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/Petinfo';
import RandomNumber from './components/RandomNumber';
function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age="4" hasPet/>
      <PetInfo animal="dog" age="7" hasPet={false}/>
      <RandomNumber maxNum = {1000}/>
    </div>
  );
}
console.log("Работа приложения успешна!")
export default App;


//  <PetInfo animal="cat" /> - передача свойства от родетельского компонента App дочернем Petinfo. Это свойство крайне нежелательно менять. Кром того age="4" это строка. Если же нужно выражение, то age={4}, тогда 4 это число