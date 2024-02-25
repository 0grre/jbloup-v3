import octokit from "./github.js";

const response = await octokit.request("GET /users/" + import.meta.env.VITE_GITHUB_USERNAME +"/repos ", {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
    }
});

const projects = await response.data;

export default projects;
