import React from 'react';

const Form = () => {

  
  {/* email verification */}
  const submitHandler = e => {
    const email = document.getElementById('email')
    const error = document.getElementById('error')

    if(email.value === '') {
      e.preventDefault();
      error.innerText = 'Oops! Please add your email';
    }
    if (email.value !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)) {
      e.preventDefault();
      error.innerText = 'Oops! Please check your email';
    }
  }


  return (
    <form className='form'>

      <input
        type='text'
        name='email'
        id='email'
        placeholder='Email address'
        className='form-email form-text'
      />

      <p className='error-text' id='error'></p>

      <button
        type='submit'
        className='form-btn'
        onClick={submitHandler}>
        Request Access
      </button>
    </form>
  );
}

export default Form;
