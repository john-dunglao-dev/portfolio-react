import type { Timeline } from './models/Timeline';
import { Transition } from '@headlessui/react';
import SkillList from '../skills/SkillList';

function TimelineList({ items, highlight = '' }: Timeline) {
  return (
    <ul className="space-y-10 border-l border-secondary/20">
      {items.map((item, index) => (
        <Transition
          key={index}
          appear={true}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={
            highlight === '' ||
            (highlight !== '' &&
              item?.stack?.some((i) =>
                i.name.toLowerCase().includes(highlight.toLowerCase())
              ))
          }
        >
          <a
            href={item.link ?? '#'}
            target={item.link ? '_blank' : ''}
            rel={item.link ? 'noopener noreferrer' : ''}
            className={
              item.link
                ? 'no-underline'
                : 'no-underline cursor-default pointer-events-none'
            }
          >
            <li className="group px-4 py-3 border-2 rounded-xl border-transparent hover:border-selection hover:bg-selection/20 transition-colors duration-300 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {/* Timeframe */}
                <div className="md:col-span-2 relative">
                  {/* Timeline dot */}
                  <div className="group-hover:opacity-0 transition-all duration-300 ease-in-out h-2 w-2 bg-function border border-function rounded-full absolute top-2.5 -left-4.5 -translate-x-1/2"></div>

                  <span className="font-mono text-xs text-secondary">
                    {item.from} &mdash; {item.to}
                  </span>
                </div>

                {/* Title and Company */}
                <div className="md:col-span-4">
                  <h6 className="text-lg">
                    {item.title} &bull; {item.company}
                  </h6>
                  <p className="mt-2 text-sm">{item.description}</p>

                  <div className="mt-2">
                    <SkillList
                      items={item?.stack ?? []}
                      highlight={highlight}
                    />
                  </div>
                </div>
              </div>
            </li>
          </a>
        </Transition>
      ))}
    </ul>
  );
}

export default TimelineList;
