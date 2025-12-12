export interface TechnologyStack {
  name: string;
  icon: string;
}

export interface TimelineListItem {
  from: string;
  to: string;
  title: string;
  company: string;
  description: string;
  stack?: TechnologyStack[];
  link?: string;
}

export interface Timeline {
  items: TimelineListItem[];
}
