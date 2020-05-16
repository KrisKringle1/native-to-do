import React, { useState } from 'react'

const AddItem = () => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue)
  const addItemToList = () => { }

  return (
    <div>
      <input type="text" onChange={onChange}></input>
      <button onSubmit={() => addItemToList(text)}>Add Item</button>
    </div>
  )
}

export default AddItem;
