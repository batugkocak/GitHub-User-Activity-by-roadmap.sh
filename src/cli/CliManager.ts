import { GitHubActivity } from "../models/Activity";
import { IVersionControlService } from "../services/services.interface";
import { parseArguments } from "../utils/argumentParser";
import { helpCommand, fetchActivityCommand } from "./commands";

export class CliManager {
  constructor(private versionControlService: IVersionControlService) {}

  async execute() {
    const args = parseArguments(process.argv.slice(2));

    if (!args || args.help) {
      helpCommand();
    }
    if (args?.username) {
      await fetchActivityCommand(args.username, this.versionControlService);
    }
  }
}
