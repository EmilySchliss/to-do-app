import React from 'react';
import '../Form.css';

const ReturnedContainer = ({ handleCheck, handleDelete, handleDeleteChecked, itemList }) => {
  return (
    <div className='returnedContainer'>
      {itemList.length > 0 && (
        <>
          <h1>Your List:</h1>
          <p>You can either check off an item<br />
            that was completed or delete it from the list.</p>
            <button className='allButton' onClick={handleDeleteChecked}>Click here to delete all selected checkboxes</button>
          <ul className='returnedList'>
            {itemList.map(item => (

              < li key={item.id} >
                <input
                  className='returnedInput'
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                {item.text}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>

        </>
      )}
    </div>
  )
}

export default ReturnedContainer;