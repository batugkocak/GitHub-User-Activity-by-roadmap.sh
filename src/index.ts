import { CliManager } from "./cli/CliManager";
import { GithubService } from "./services/GitHubService";
import { GitHubEventMapper } from "./utils/gitHubEventMapper";

const githubService = new GithubService();
const gitHubEventMapper = new GitHubEventMapper();
const cliManager = new CliManager(githubService, gitHubEventMapper);
cliManager.execute();
