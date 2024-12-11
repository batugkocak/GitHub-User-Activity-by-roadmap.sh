import { Activity } from "../models/Activity";

export interface IVersionControlService {
  fetchUserActivity(username: string): Promise<Activity[]>;
}
