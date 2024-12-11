import { CliManager } from "./cli/CliManager";
import { GithubService } from "./services/GitHubService";

const githubService = new GithubService();
const cliManager = new CliManager(githubService);
cliManager.execute();
