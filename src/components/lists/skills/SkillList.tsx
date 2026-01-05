import clsx from 'clsx';
import Pill from '../../texts/Pill';
import type { TechnologyStack } from '../timeline/models/Timeline';

interface SkillListProps {
  items: TechnologyStack[];
  highlight: string;
}

function SkillList({ items, highlight }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {(items ?? []).map((tech, index) => (
        <Pill
          key={index}
          text={tech.name}
          className={clsx(
            'py-0.5 px-2 border text-[0.75rem] rounded-md',
            highlight &&
              tech.name.toLowerCase().includes(highlight.toLowerCase())
              ? 'border-primary text-primary bg-primary/10'
              : 'border-function text-function bg-function/5'
          )}
        />
      ))}
    </div>
  );
}

export default SkillList;
