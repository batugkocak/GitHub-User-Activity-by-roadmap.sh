/**
 * Enum for GitHub event types.
 */
export enum GithubEvents {
  /**
   * Push to a branch in a repository.
   */
  Commit = "PushEvent",

  /**
   * Creation of a repository, branch, or tag.
   */
  CreateRepo = "CreateEvent",

  /**
   * Starring a repository.
   */
  StarredRepo = "WatchEvent",

  /**
   * Making a private repository public.
   */
  MakePublic = "PublicEvent",

  /**
   * Forking a repository.
   */
  ForkRepo = "ForkEvent",

  /**
   * Actions on issues (e.g., open, close, edit).
   */
  Issue = "IssuesEvent",

  /**
   * Actions on pull requests (e.g., open, close, merge).
   */
  PullRequest = "PullRequestEvent",

  /**
   * Deletion of a branch or tag.
   */
  Delete = "DeleteEvent",

  /**
   * Comment added to an issue.
   */
  IssueComment = "IssueCommentEvent",

  /**
   * Actions on releases (e.g., publish, edit, delete).
   */
  Release = "ReleaseEvent",
}
