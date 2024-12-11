interface ParsedArguments {
  username?: string;
  help?: boolean;
}

export const parseArguments = (args: string[]): ParsedArguments | null => {
  if (args.includes("--help") || args.includes("-h")) {
    return { help: true };
  }
  if (args.length === 1) {
    return { username: args[0] };
  }
  return null;
};
