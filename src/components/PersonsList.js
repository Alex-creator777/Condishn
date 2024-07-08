import personsData from '../data/personsData'
import Person from './Person'

function PersonsList() {
  return (
    <div className="cards">
      {personsData.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  )
}

export default PersonsList
// // {personsData.map((person) => (
//   <Person key={person.id} {...person}
//  передача компоненту всех свойств объекта через деструктуризацию
