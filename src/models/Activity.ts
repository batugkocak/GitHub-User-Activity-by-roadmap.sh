export type Activity = GitHubActivity;

export interface GitHubActivity {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    repository_id: number;
    push_id: number;
    size: number;
    distinct_size: number;
    ref: string;
    head: string;
    before: string;
    commits: {
      sha: string;
      author: {
        name: string;
        email: string;
      };
      message: string;
      distinct: boolean;
      url: string;
    }[];
  };
  public: boolean;
  created_at: string;
}
