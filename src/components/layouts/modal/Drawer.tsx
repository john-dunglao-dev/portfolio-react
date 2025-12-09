import { useSelector } from 'react-redux';
import type { RootState } from '../../../stores';
import MyModal from './MyModal';
import type { ComponentType } from 'react';

function Drawer() {
  const modals = useSelector((state: RootState) => state.drawer.modals);

  return (
    <div>
      <h2>Drawer</h2>

      {modals.map((modal: ComponentType, index: number) => {
        return <MyModal key={index} contentComponent={modal} />;
      })}
    </div>
  );
}

export default Drawer;
