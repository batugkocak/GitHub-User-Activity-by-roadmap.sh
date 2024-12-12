# GitHub Activity CLI

A simple command line interface (CLI) application to fetch and display the recent activity of a GitHub user. This project helps practice working with APIs, handling JSON data, and building CLI applications. There are still missing features, feel free to contribute! Also, if you have any suggestions, please reach me: batugkocak@gmail.com

---

## Features

- Fetches recent activity of a specified GitHub user.
- Displays user activity directly in the terminal.
- Graceful error handling for invalid usernames or API failures.
- Built with **TypeScript** for type safety and scalability.
- No external libraries or frameworks used for fetching data.

---

## Requirements

To run the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/batugkocak/GitHub-User-Activity-by-roadmap.sh.git
   cd github-activity-cli
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Build the project:
   ```bash
   yarn build
   ```

---

## Usage

1. Run the CLI application:

   ```bash
   yarn start <username>
   ```

   Replace `<username>` with the GitHub username you want to fetch activity for.

   Example:

   ```bash
   yarn start kamranahmedse
   ```

2. For development:

   ```bash
   yarn dev <username>
   ```

3. Display help information:
   ```bash
   yarn start --help
   ```

---

## Output Example

```plaintext
- Pushed 3 commits to batugkocak/github-cli
- Opened a new issue in /github-activity
- Starred batugkocak/github-activity
```

## Development Notes

- The application uses the [GitHub API](https://api.github.com) to fetch user activity.
- API Endpoint: `https://api.github.com/users/<username>/events`
- TypeScript ensures type safety and better developer experience.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

This project was inspired by [roadmap.sh](https://roadmap.sh) and serves as a learning exercise for building CLI tools and consuming APIs.
