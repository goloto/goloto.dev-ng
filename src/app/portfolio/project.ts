import { Tag } from "./tags";

export class Project {
  constructor(
    public name: string,
    public code: string,
    public url: string,
    public date: any,
    public tasks: string[],
    public tags: Tag[]) {}
}
