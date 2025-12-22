import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  WarningOctagonIcon,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type NoticeType = 'info' | 'warning' | 'error' | 'success';

interface NoticeModalProps {
  show?: boolean;
  message: string;
  noticeType: NoticeType;
}

function NoticeModal({
  show = false,
  message,
  noticeType = 'info',
}: NoticeModalProps) {
  const [isOpen, setIsOpen] = useState(show);

  const noticeIcon = {
    error: <WarningOctagonIcon size={32} className="text-red-500 mr-2" />,
    warning: <WarningIcon size={32} className="text-yellow-500 mr-2" />,
    info: <InfoIcon size={32} className="text-blue-500 mr-2" />,
    success: <CheckCircleIcon size={32} className="text-green-500 mr-2" />,
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return createPortal(
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-20"
    >
      <div
        className="fixed inset-0 bg-black/30 flex w-screen items-center justify-center px-2 lg:md:p-4"
        aria-hidden="true"
      >
        <DialogPanel className="bg-background border-2 border-selection px-4 py-3 rounded-lg">
          <DialogTitle className="flex items-center text-3xl">
            {noticeIcon[noticeType]} Notice
          </DialogTitle>

          <div className="mt-2 text-foreground">
            <p>{message}</p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-comment text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>,
    document.body
  );
}

export default NoticeModal;
