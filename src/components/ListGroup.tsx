import clsx from 'clsx';
import { useState } from 'react';

interface ListGroupProps {
  label: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const items = props.items || [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (item: string, index: number) => {
    console.debug('Clicked on', item, 'on index', index, '[detached handler]');
    setSelectedIndex(index);
  };

  return (
    <>
      <h2 className="mt-6 mb-4 text-2xl">{props.label}</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li
              className={clsx(
                'border-b py-3 px-2 border-gray-300 cursor-pointer',
                selectedIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-50'
              )}
              key={item}
              onClick={() => {
                handleClick(item, index);
                props.onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
