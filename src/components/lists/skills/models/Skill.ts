export interface ISkill {
  name: string;
  icon: string | null;
}

export const backendSkills: ISkill[] = [
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'Django', icon: 'devicon-django-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'Laravel', icon: 'devicon-laravel-plain' },
  { name: 'NestJS', icon: 'devicon-nestjs-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'Redis', icon: 'devicon-redis-plain' },
  { name: 'ElasticSearch', icon: 'devicon-elasticsearch-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'Nginx', icon: 'devicon-nginx-original' },
  { name: 'Apache', icon: 'devicon-apache-plain' },
];

export const frontendSkills: ISkill[] = [
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Vue', icon: 'devicon-vuejs-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  { name: 'Sass', icon: 'devicon-sass-original' },
  { name: 'jQuery', icon: 'devicon-jquery-plain' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
];

export const devOpsSkills: ISkill[] = [
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'GCP', icon: 'devicon-googlecloud-plain' },
  { name: 'Nginx', icon: 'devicon-nginx-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub Actions', icon: 'devicon-github-original' },
  { name: 'Bitbucket Pipelines', icon: null },
  { name: 'CI/CD', icon: '' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'CentOS', icon: 'devicon-centos-plain' },
  { name: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
  { name: 'Vagrant', icon: 'devicon-vagrant-plain' },
  { name: 'VirtualBox', icon: 'devicon-oracle-original' },
];

export const otherSkills: ISkill[] = [
  { name: 'Microservices', icon: null },
  { name: 'WebSocket', icon: null },
  { name: 'Storybook', icon: null },
  { name: 'Figma', icon: null },
  { name: 'Test Driven Development (TDD)', icon: null },
  { name: 'API Integration', icon: null },
];
