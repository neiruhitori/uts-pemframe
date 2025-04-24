const InputError = ({ messages }) => {
    if (!messages) return null
  
    return (
      <div className="text-sm text-red-600 mt-1">
        {Array.isArray(messages)
          ? messages.map((msg, i) => <div key={i}>{msg}</div>)
          : <div>{messages}</div>}
      </div>
    )
  }
  
  export default InputError
  