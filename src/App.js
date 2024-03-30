import invite from '../public/invite.png';
import './App.css';

export default function App() {
  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbx0TLUKdN8vD1Z9SoVh6j5nssKVaVY0UF-i0mfRZB5GvUCJ-cXP9Edl7RsuWwOD6A/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
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
          <input placeholder={false} name='ride' type='checkbox' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
