import octokit from "../github.js";

const response = await octokit.request("GET /gists/08fa08184df6c6a14cf286476f88c163", {
    gist_id: '08fa08184df6c6a14cf286476f88c163',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
    }
});

const gist = await response.data;
const fileName = Object.keys(gist.files)[0];
const data = JSON.parse(gist.files[fileName].content);

export default data;
