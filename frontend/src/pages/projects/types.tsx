export interface Project {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  repoLink: string;
  creationDate: string;
  objectFile: null;
  skills: Skill[];
}

export interface Skill {
  name: string;
  skillBeginDate: string;
}

export interface PageParams {
  size: number;
  page: number;
}
