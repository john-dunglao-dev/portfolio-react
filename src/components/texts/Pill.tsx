import type { PillProps } from './models/Pill';

function Pill({ text, className, icon }: PillProps) {
  return (
    <span className={className}>
      {icon}
      {text}
    </span>
  );
}

export default Pill;
