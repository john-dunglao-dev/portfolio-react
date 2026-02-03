import type { ISkill } from '../../skills/models/Skill';

export interface TimelineListItem {
  from: string;
  to: string;
  title: string;
  company: string;
  description: string;
  stack?: ISkill[];
  link?: string;
}

export interface Timeline {
  items: TimelineListItem[];
  highlight?: string;
}
