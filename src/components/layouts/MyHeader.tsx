import myLogo from '../../assets/svgs/logo-v2-mini.drawio.svg';
import { ListIcon } from '@phosphor-icons/react';
import Navigation from './Navigation';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (toggled?: boolean) => {
    setIsOpen(() => toggled ?? !isOpen);
  };

  return (
    <header className="bg-primary/90 shadow backdrop-blur-[2px] px-4 flex justify-between">
      <div className="flex items-center gap-2">
        <img src={myLogo} className="h-12 w-12" alt="Logo" />
        <h1 className="text-2xl font-bold text-background">
          John Florentino Dunglao
        </h1>
      </div>

      <button
        className="md:hidden p-2 rounded-md hover:bg-primary/70 focus:outline-none"
        onClick={() => handleToggleMenu(true)}
      >
        <span className="sr-only">Open main menu</span>
        <ListIcon size="24" className="text-background" />
      </button>

      <nav className="hidden md:flex md:items-center">
        <Navigation />
      </nav>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute z-10"
          onClose={() => handleToggleMenu(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-transparent backdrop-blur-xs"></div>
          </TransitionChild>

          <div className="fixed inset-y-0 right-0 flex">
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="w-64 h-full bg-primary/80 backdrop-blur-xs px-3">
                <div className="flex justify-center mt-5 mb-3 mx-4 border-b border-background">
                  <img src={myLogo} className="h-12 w-12" alt="Logo" />
                </div>

                <Navigation />
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}

export default MyHeader;
