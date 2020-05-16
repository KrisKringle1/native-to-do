import React, { useState } from 'react'

const AddItem = () => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue)

  return (
    <div>
      <input type="text" onChange={onChange}></input>

    </div>
  )
}

export default AddItem;
