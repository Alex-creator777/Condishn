const buttonStyle = { backgroundColor: 'lightgreen' }

function ResetButton({ count, resetCount }) {
  return (
    count > 0 && (
      <div>
        <button style={buttonStyle} onClick={resetCount}>
          Reset
        </button>
      </div>
    )
  )
}

export default ResetButton
/* {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      ) Оператор И заменяет здесь Если. Если count > 0 то код читается дальше и выполняется - появляется кнопка. В противном случае - код дальше не читается.  */