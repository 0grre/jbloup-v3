import octokit from "./github.js";

export const getYear = (string) => {
    const date = Date.parse(string);
    return new Date(date).getUTCFullYear()
}

const response = await octokit.request("GET /users/" + import.meta.env.VITE_GITHUB_USERNAME + "/repos ", {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
    }
});

const projects = await response.data;

const archives = projects
    .filter(project => !project.archived)
    .map(project => {
        return {
            year: getYear(project.created_at),
            name: project.name,
            description: project.description,
            url: project.html_url,
            homepage: project.homepage,
        }
    })
    .sort((a, b) => b.year - a.year);

export default {
    archives,
    getYear
};
