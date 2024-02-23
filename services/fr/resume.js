import octokit from "../github.js";

const response = await octokit.request("GET /gists/ae63e34c62d41c9f5e053eb6661ff42d", {
    gist_id: 'ae63e34c62d41c9f5e053eb6661ff42d',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
    }
});

const gist = await response.data;
const fileName = Object.keys(gist.files)[0];
const frenchResumeData = JSON.parse(gist.files[fileName].content);

export default frenchResumeData;
