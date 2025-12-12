import type { PillProps } from './models/Pill';

function Pill({ text, className }: PillProps) {
  return <span className={className}>{text}</span>;
}

export default Pill;
