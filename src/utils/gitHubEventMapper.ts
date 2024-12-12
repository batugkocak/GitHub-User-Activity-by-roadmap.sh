import { Activity } from "../models/Activity";
import { GithubEvents } from "../config/GithubEventTypes";
import { Constants } from "../config/Constants";

export interface IEventMapper {
  mapToDescription(activity: Activity): string;
}
export class GitHubEventMapper implements IEventMapper {
  mapToDescription(activity: Activity): string {
    const { type, actor, repo, payload } = activity;

    switch (type) {
      case GithubEvents.Commit:
        return `${actor.display_login} pushed ${payload.size} commits to: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.CreateRepo:
        return `${actor.display_login} created ${parseGithubUrl(repo.url)} repository`;
      case GithubEvents.StarredRepo:
        return `${actor.display_login} starred ${parseGithubUrl(repo.url)}`;
      case GithubEvents.MakePublic:
        return `${actor.display_login} made public: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.ForkRepo:
        return `${actor.display_login} forked: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.Issue:
        return `${actor.display_login} opened an issue in: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.PullRequest:
        return `${actor.display_login} opened a pull request in: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.Delete:
        return `${actor.display_login} deleted: ${parseGithubUrl(repo.url)}`;
      case GithubEvents.IssueComment:
        return `${actor.display_login} commented on an issue: ${parseGithubUrl(repo.url)}`;
      default:
        return `Unknown action: ${type}`;
    }
  }
}

const parseGithubUrl = (url: string): string => {
  return url.replace(Constants.GITHUB_API_REPOS_RUL, Constants.GITHUB_URL);
};
