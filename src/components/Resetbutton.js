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
