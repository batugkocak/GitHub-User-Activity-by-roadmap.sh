import { Constants } from "../config/Constants";
import { ApiClient } from "../utils/ApiClient";
import { IVersionControlService } from "./services.interface";
import { GitHubActivity } from "../models/Activity";

export class GithubService implements IVersionControlService {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = new ApiClient(Constants.GITHUB_API_BASE_URL);
  }

  async fetchUserActivity(username: string): Promise<GitHubActivity[]> {
    const response = await this.apiClient.get<GitHubActivity[]>(`/users/${username}/events`);
    return response;
  }
}
