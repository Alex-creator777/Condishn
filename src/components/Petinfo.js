// function PetInfo(props) {

//     return <h1>MY {props.animal} is {props.age} yers old</h1>
// // animal является свойством объекта props
// }
// export default PetInfo

//Можно тоже самое сделать используя деструктуризацию
// function PetInfo(props) {
//  const text = hasPet? `{animal} is {age} yers old`

//         return <h1>MY {animal} is {age} yers old</h1>
//     // animal является свойством объекта props
//     }
//     export default PetInfo

//     function PetInfo({animal, age}) {

//             return <h1>MY {animal} is {age} yers old</h1>
//         // animal является свойством объекта props
//         }
//         export default PetInfo

//Далее добавляем пременную. `{animal} is {age} yers old` пишется в обратных кавычках чтобы сгенерироать код js в JSX

// animal является свойством объекта props

// function PetInfo(props) {
//     const { animal, age, hasPet,  } = props;

//     console.log(props);  // Логирование всех пропсов для отладки

//     const text = hasPet ? `My ${animal} is ${age}  years old` : 'I do not have an animal';

//     return <h1>{text}</h1>;
//   }

//   export default PetInfo;

// можно тоже самое сделать в блоке с JSX кодом

function PetInfo(props) {
  const { animal, age, hasPet } = props
  console.log(props)

  return hasPet ? (
    <h1>{`My ${animal} is ${age}  years old`} </h1>
  ) : (
    <h2>I do not have an animal</h2>
  )
}

export default PetInfo
