import type { TimelineListItem } from './Timeline';
import {
  frontendSkills,
  backendSkills,
  devOpsSkills,
  otherSkills,
  type ISkill,
} from '../../skills/models/Skill';

const skillReduce = (acc: Record<string, ISkill>, skill: ISkill) => {
  acc[skill.name] = skill;
  return acc;
};

const frontendDict = frontendSkills.reduce(
  skillReduce,
  {} as Record<string, ISkill>
);

const backendDict = backendSkills.reduce(
  skillReduce,
  {} as Record<string, ISkill>
);

const devOpsDict = devOpsSkills.reduce(
  skillReduce,
  {} as Record<string, ISkill>
);

const otherDict = otherSkills.reduce(skillReduce, {} as Record<string, ISkill>);

export const timeline: TimelineListItem[] = [
  {
    from: 'Jan 2023',
    to: 'Sept 2025',
    title: 'Senior Web Developer',
    company: 'FoodByUs',
    description:
      'A business-to-business SaaS platform that streamlines procurement by connecting hospitality venues with wholesale food and beverage suppliers. It centralizes ordering, pricing, and supplier management into a single system, allowing buyers to source ingredients efficiently while enabling suppliers to scale their reach and order volume. FoodByUs effectively removes manual workflows, reduces costs, and provides full visibility across the purchasing lifecycle. More on Frontend-focused development maintaining and developing new features in a pre-existing website.',
    stack: [
      frontendDict['Vue'],
      backendDict['Node.js'],
      frontendDict['TypeScript'],
      backendDict['MySQL'],
      devOpsDict['Docker'],
      backendDict['ElasticSearch'],
      backendDict['Redis'],
      backendDict['PHP'],
      backendDict['Laravel'],
      otherDict['Figma'],
      otherDict['Storybook'],
      frontendDict['Tailwind CSS'],
      devOpsDict['Ubuntu'],
      devOpsDict['Nginx'],
    ],
    link: 'https://foodbyus.com',
  },
  {
    from: 'Mar 2022',
    to: 'Dec 2022',
    title: 'Full-Stack Web Developer',
    company: 'Freelance',
    description:
      'Provided end-to-end freelance development support across multiple domains, including assisting a casino operator with licensing and integration of their randomizer application, duplicating and extending casino web platforms for another client with new features that consumed and displayed live sports data, and leading the backend API architecture and admin dashboard development for a taxi service application. These engagements required rapid delivery, cross-functional coordination, and ownership of both technical implementation and solution design.',
    stack: [
      // leggo
      backendDict['PHP'],
      backendDict['Laravel'],
      backendDict['Redis'],
      devOpsDict['GCP'],
      backendDict['MySQL'],
      devOpsDict['Docker'],
      frontendDict['Vue'],
      frontendDict['Tailwind CSS'],
      { name: '/', icon: '' },
      // groundlink
      backendDict['PHP'],
      backendDict['Node.js'],
      frontendDict['JavaScript'],
      frontendDict['jQuery'],
      backendDict['MySQL'],
      otherDict['WebSocket'],
      { name: '/', icon: '' },
      // casino
      backendDict['Node.js'],
      backendDict['NestJS'],
      frontendDict['TypeScript'],
      backendDict['Redis'],
      backendDict['MySQL'],
      otherDict['Microservices'],
      backendDict['PostgreSQL'],
    ],
  },
  {
    from: 'Aug 2019',
    to: 'Sept 2021',
    title: 'Web Developer -- Senior Web Developer',
    company: 'Vavasoftware',
    description:
      'Integrated third-party casino game providers into an existing gaming platform while leading the support team responsible for rapid hotfix deployment and production issue resolution. Additionally, implemented the end-to-end integration of live sports data services, ensuring real-time accuracy, stability, and seamless functionality across the platform.',
    stack: [
      backendDict['PHP'],
      backendDict['Laravel'],
      frontendDict['Vue'],
      backendDict['MySQL'],
      devOpsDict['CentOS'],
      devOpsDict['Ubuntu'],
      backendDict['Node.js'],
      frontendDict['JavaScript'],
      frontendDict['jQuery'],
      otherDict['WebSocket'],
      frontendDict['CSS3'],
      backendDict['Apache'],
      backendDict['Nginx'],
      devOpsDict['VirtualBox'],
    ],
  },
  {
    from: 'Feb 2018',
    to: 'Aug 2019',
    title: 'Associate Web Developer -- Software Engineer',
    company: 'MFT Group of Companies',
    description:
      'Maintained and enhanced a pre-existing stock trading platform by integrating real-time market price data into the remote server infrastructure and leading a comprehensive UI revamp to improve usability, performance, and visual clarity. This work required deep familiarity with data feeds, responsive design, and production-level system maintenance to ensure a stable and intuitive trading experience.',
    stack: [
      backendDict['Python'],
      backendDict['Django'],
      frontendDict['JavaScript'],
      frontendDict['CSS3'],
      frontendDict['jQuery'],
      devOpsDict['Vagrant'],
      devOpsDict['Ubuntu'],
      backendDict['PostgreSQL'],
      otherDict['WebSocket'],
    ],
    link: 'https://mftgroup.com.ph/',
  },
  {
    from: 'Aug 2017',
    to: 'Nov 2017',
    title: 'Trainee',
    company: 'Zuitt Coding Bootcamp',
    description:
      'Completed an intensive web development bootcamp that established a solid foundation in PHP, MySQL, HTML, CSS, Bootstrap, and Laravel. The program emphasized practical, project-based learning, enabling me to build full-stack applications, understand core backend and frontend concepts, and develop the technical discipline that shaped the early stages of my web development career.',
    stack: [
      frontendDict['HTML5'],
      frontendDict['CSS3'],
      frontendDict['JavaScript'],
      frontendDict['jQuery'],
      backendDict['PHP'],
      backendDict['MySQL'],
      backendDict['Laravel'],
    ],
    link: 'https://john-dunglao-dev.github.io/developer-ako/',
  },
];
