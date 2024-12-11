import { IVersionControlService } from "../../services/services.interface";
export const fetchActivityCommand = async (username: string, vcService: IVersionControlService): Promise<void> => {
  try {
    const activities = await vcService.fetchUserActivity(username);
    console.log(activities);
  } catch (error) {
    console.log(error);
  }
};
