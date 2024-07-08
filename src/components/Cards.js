


const Card = () => {
  return (
    <>
      <h1>Alex</h1>
      <h3> I am recording React course</h3>
      <button>Like!</button>
    </>
  )
}
export default Card

// как работает пустой тэг. В данном случае <h1>Alex</h1>
//       <h3> I am recording React course</h3>
//       <button>Like!</button> принадлежат тэгу div родительского компонента App. И в данном случае ошибок JSX кода не будет.