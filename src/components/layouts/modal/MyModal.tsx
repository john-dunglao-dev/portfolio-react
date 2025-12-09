import type { ComponentType } from 'react';

interface MyModalProps {
  contentComponent: ComponentType;
}

function MyModal({ contentComponent: ContentComponent }: MyModalProps) {
  return (
    <dialog>
      <h3>Modal Title</h3>

      <p>This is a modal dialog without the content as of now.</p>

      <ContentComponent />
    </dialog>
  );
}

export default MyModal;
