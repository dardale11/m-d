import invite from './assets/invite.png';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [isSuccess, setSuccess] = useState('pending');
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  console.log(name);

  function Submit(e) {
    e.preventDefault();
    setSubmit(true);

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbx0TLUKdN8vD1Z9SoVh6j5nssKVaVY0UF-i0mfRZB5GvUCJ-cXP9Edl7RsuWwOD6A/exec',
      {
        method: 'POST',
        body: { ...formDatab, name },
      }
    )
      .then((data) => {
        setSuccess('true');
        console.log(data);
      })
      .catch((error) => {
        setSuccess('false');
        console.log(error);
      });
  }
  return (
    <div className='App'>
      <img alt='' src={invite} />
      <form className='form-wrapper' onSubmit={(e) => Submit(e)}>
        <div className='input-wrapper'>
          <p>?כמה תגיעו</p>
          <input placeholder={0} name='guests' type='number' />
        </div>
        <div className='input-wrapper'>
          <p>?צריכים הסעה</p>
          <input name='ride' type='checkbox' />
        </div>
        {!isSubmit && <button type='submit'>Submit</button>}
        {isSubmit && isSuccess === 'pending' && <div className='loader'></div>}
        {isSuccess === 'true' && <p>!נתראה שם</p>}
        {isSuccess === 'false' && <p>?משו קרה... תנסו שוב אחר כך</p>}
      </form>
    </div>
  );
}
