import { IGoal } from './goal';
export interface IUser {
  id: string;
  handle: string;
  goals: IGoal[];
}
