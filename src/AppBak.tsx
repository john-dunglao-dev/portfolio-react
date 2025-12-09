import { useState } from 'react';
import Message from './components/Message';
import ListGroup from './components/ListGroup';
import BaseButton from './components/BaseButton';

function App() {
  const [count, setCount] = useState(0);
  const cities = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'Berlin',
    'Sydney',
  ];

  const handleSelectItem = (item: string) => {
    console.log('Selected item:', item);
  };

  const handleButtonClick = () => {
    console.log('Hello paking world');
  };

  return (
    <>
      <Message />

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </div>

      <ListGroup
        label="List of Cities"
        items={cities}
        onSelectItem={handleSelectItem}
      />

      <div>
        <div>This is a Button component</div>

        <div>
          <BaseButton onClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
