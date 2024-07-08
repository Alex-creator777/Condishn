import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'
import PetInfo from './components/Petinfo'
import RandomNumber from './components/RandomNumber'
import Counter from './components/Counter'
import Button from './components/Button'
//ниже сколько элементов в массиве столько будет и кнопок
const texts = ['click me', 'Click me please', 'Hit me', 'Press me',]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age="4" hasPet />
      <PetInfo animal="dog" age="7" hasPet={false} />
      <RandomNumber maxNum={1000} />
      <Counter count={count} />
      {/* <Button onClick={incrementCount} text = {texts[0]} />
      <Button onClick={incrementCount} text = {texts[1]}/>
      <Button onClick={incrementCount} text = {texts[2]}/>
      <Button onClick={incrementCount} text = {texts[3]}/>
    </div> можно реализовать тоже самое на с помощью метода map */}
      {texts.map((text) => {
        return <Button onClick={incrementCount} text={text} />
      })}
    </div>
  )
}

// почему в данном случае если бы название кнопок было одинаковым то обязательно было бы использование в map еще и key. texts.map((text, index) => { return <Button onClick={incrementCount} text={text} key = {index} В React, когда вы рендерите списки компонентов с помощью метода map, важно использовать уникальный ключ (key)  для каждого элемента. Это помогает React эффективно обновлять и рендерить компоненты. Если у вас есть несколько элементов с одинаковым содержимым, использование уникальных ключей становится еще более важным, так как React использует ключи для отслеживания изменений в списке.
// Ключи помогают React определить, какие элементы были изменены, добавлены или удалены.
// Без уникальных ключей, React может неправильно обновить элементы, что приведет к неожиданному поведению.

console.log('Работа приложения успешна!')
export default App

//  <PetInfo animal="cat" /> - передача свойства от родетельского компонента App дочернем Petinfo. Это свойство крайне нежелательно менять. Кром того age="4" это строка. Если же нужно выражение, то age={4}, тогда 4 это число
//кнопка button которая прописана в компоненте вызывает функцию incrementCount которая увеличивает значение count на 1, итоговое значение отображает компонент Counter. Причем incrementCount должна быть прописана именно в родительском компоненте чтобы повлиять на все дочерние такие как Counter и Button. Напрямую дочерние компонеты между собой не взаимодействуют.
