import React from 'react';
import '../Form.css';

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='itemList'>To Do Today:</label><br />
      <input type='text' id='itemList' name='itemList' className='userInput' required /><br />
      <button type='submit' className='submitButton'>Submit</button>
    </form>
  );
}

export default Form;