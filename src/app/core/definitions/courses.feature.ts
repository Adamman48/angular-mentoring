export interface CourseItemInterface {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  isTopRated?: boolean;
}

export enum OrderEnum {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}
