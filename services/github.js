import { Octokit } from "@octokit/core";

const token = 'token ' + import.meta.env.VITE_GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

export default octokit;
