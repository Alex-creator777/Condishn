import {useState} from 'react'
import generateRandomNumber from '../Utils/GenerateRandomNumber.js'
//useState - реакт хук, используется не по умолчанию, импорт внешенего пакета поэтому {}.Необходимо вызвать функцию useState и передать ей начальное значение какой-то переменной которая будет являться частью состояния компанента. Далее функция возращает массив из двух элементов и через деструктуризацию можно присвоить значения массива двум разным переменным



function RandomNumber({maxNum}){
const [randomNam, setRandomNam]= useState( generateRandomNumber(maxNum))

const changeRandomNum = () => {
    setRandomNam(generateRandomNumber(maxNum))
}
//randomNam будет содержать какое-то число и каждый раз при нажатии на кнопку значение это будет изменяться и для этого мы будем вызывать функцию setRandomNam. Вызов setRandomNam будет в функции changeRandomNum и в нее передаем случайное число с помощью generateRandomNumber
    return (
        <div>
<h1>{randomNam}</h1>

<button onClick={changeRandomNum}> Generate new random number</button>


        </div>
    )
}
// важный момент. в кнопке пишется просто название функции без ее вызова а вызывается она с помощью onClik
export default RandomNumber