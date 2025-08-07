import { useState } from 'react';
import { complaint_log_backend } from 'declarations/complaint_log_backend';
import Card from './Card';
import ComplainForm from './Form';
import './global.css';

function App() {
  const [greeting, setGreeting] = useState('');
  const [complaintCount, setComplainCount] = useState(0);
  const [cards, setCards] = useState([]);

  function updateCards() {
      getData();
  }

  function getData() {
    complaint_log_backend.getData().then((data) => {
      var tmp = [];
      for (var i=0; i<complaintCount; i++) {
        tmp.push([data[0][i], data[1][i]]);
      }
      setCards(tmp);
    });
  }

  function updateComplaintCount() {
    complaint_log_backend.getComplaintCount().then((count) => {
      setComplainCount(parseInt(count));
    });

  }

  function handleSubmit(event) {
    event.preventDefault();
    updateCards();
  }


  updateComplaintCount();
  // updateCards();

  return (
    <main>
      <section id="complain">
        <ComplainForm />
        <form action="#" onSubmit={handleSubmit}>
          <button type="submit" className='refresh'>Refresh</button>
        </form>
      </section>
      <section id="complain-card">
        <div className='card-holder'>
          {cards.map((data) => <Card title={data[0]} description={data[1]}/>)}
        </div>
      </section>
    </main>
  );
}

export default App;
