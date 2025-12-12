import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import myPic from '../../assets/imgs/me_thinking.jpg';
import { Transition } from '@headlessui/react';

function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const [showFunny, setShowFunny] = useState(false);

  const handleChangeFollower = () => {
    setShowFunny((prev: boolean) => !prev);
  };

  useEffect(() => {
    const followerNode = followerRef.current;
    const root = document.getElementById('root');

    const handleMouseMove = (e: MouseEvent) => {
      if (!followerNode) return;

      followerNode.style.left = e.pageX + 'px';
      followerNode.style.top = e.pageY + 'px';
    };

    root?.addEventListener('mousemove', handleMouseMove);

    return () => {
      root?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <button
        className="px-2 py-1 text-foreground border border-foreground rounded hidden lg:inline"
        onClick={handleChangeFollower}
      >
        {showFunny ? "I don't want to see it anymore" : 'Show Something Funny?'}
      </button>

      {createPortal(
        <div
          ref={followerRef}
          className="hidden lg:flex lg:items-center lg:justify-center size-[800px] rounded-full bg-radial from-foreground/15 to-transparent absolute transform -translate-1/2 pointer-events-none opacity-30 "
        >
          <Transition
            show={showFunny}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              src={myPic}
              alt="Funny Follower"
              className="w-96 h-96 rounded-full object-cover"
            />
          </Transition>
        </div>,
        document.getElementById('root') as HTMLElement
      )}
    </>
  );
}

export default MouseFollower;
