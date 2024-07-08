import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/Petinfo';
import RandomNumber from './components/RandomNumber';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {

  const[count, setCount] = useState (0)
  const incrementCount= () => {
    setCount(count+1)
  }
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age="4" hasPet/>
      <PetInfo animal="dog" age="7" hasPet={false}/>
      <RandomNumber maxNum = {1000}/>
      <Counter count = {count}/>
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
    </div>
  );
}
console.log("Работа приложения успешна!")
export default App;


//  <PetInfo animal="cat" /> - передача свойства от родетельского компонента App дочернем Petinfo. Это свойство крайне нежелательно менять. Кром того age="4" это строка. Если же нужно выражение, то age={4}, тогда 4 это число
//кнопка button которая прописана в компоненте вызывает функцию incrementCount которая увеличивает значение count на 1, итоговое значение отображает компонент Counter. Причем incrementCount должна быть прописана именно в родительском компоненте чтобы повлиять на все дочерние такие как Counter и Button. Напрямую дочерние компонеты между собой не взаимодействуют.