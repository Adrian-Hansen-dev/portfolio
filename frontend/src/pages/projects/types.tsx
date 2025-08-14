export interface Project {
  id: number;
  name: string;
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
