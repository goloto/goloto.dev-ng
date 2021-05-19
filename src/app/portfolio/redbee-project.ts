import { RedbeeProjectTag } from "./redbee-project-tags";

export class RedbeeProject {
  constructor(
    public name: string,
    public code: string,
    public url: string,
    public date: any,
    public tasks: string[],
    public tags: RedbeeProjectTag[]) {}
}
