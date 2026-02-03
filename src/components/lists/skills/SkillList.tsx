import clsx from 'clsx';
import Pill from '../../texts/Pill';
import SkillIcon from './SkillIcon';
import type { ISkill } from './models/Skill';

interface SkillListProps {
  items: ISkill[];
  highlight: string;
}

function SkillList({ items, highlight }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {(items ?? []).map((tech, index) => (
        <Pill
          key={index}
          text={tech.name}
          icon={tech.icon && <SkillIcon className={clsx(tech.icon, 'mr-1')} />}
          className={clsx(
            'py-0.5 px-2 border text-[0.75rem] rounded-md flex justify-center items-center',
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
