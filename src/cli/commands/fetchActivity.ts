import { IVersionControlService } from "../../services/services.interface";
import { IEventMapper } from "../../utils/gitHubEventMapper";

export const fetchActivityCommand = async (
  username: string,
  vcService: IVersionControlService,
  eventMapper: IEventMapper
): Promise<void> => {
  try {
    const activities = await vcService.fetchUserActivity(username);
    const activitiesResult = activities.map(eventMapper.mapToDescription);
    activitiesResult.forEach((result) => {
      console.log("~ " + result);
    });
  } catch (error) {
    console.error("Error fetching user activity:", error);
  }
};
