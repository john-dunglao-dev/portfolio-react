import Pill from '../../texts/Pill';
import type { Timeline } from './models/Timeline';

function TimelineList({ items }: Timeline) {
  return (
    <ul className="space-y-10 border-l border-secondary/20">
      {items.map((item, index) => (
        <li
          className="group px-4 py-3 border-2 rounded-xl border-transparent hover:border-selection hover:bg-selection/20 transition-colors duration-300 ease-in-out"
          key={index}
        >
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

              <div className="flex flex-wrap gap-1 mt-2">
                {(item?.stack?.length ?? 0) > 0 &&
                  (item?.stack ?? []).map((tech, techIndex) => (
                    <Pill
                      key={techIndex}
                      text={tech.name}
                      className="py-0.5 px-2 border border-function text-function bg-function/5 text-[0.75rem] rounded-md"
                    />
                  ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TimelineList;
