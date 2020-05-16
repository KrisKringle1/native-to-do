import React, { useState } from 'react'


const ListForm = () => {
  const [text, setText] = useState('')

  const handleChange = (textValue) => setText(textValue)
  const handleSubmit = (e) => { e.preventDefault(); console.log('form submitted!') }

  return (
    <div>

      <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit}>
        <input

          type="text"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Add Todo</button>
        </div>
      </form>

    </div>
  )
}

export default ListForm;
