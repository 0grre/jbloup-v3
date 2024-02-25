import octokit from "../github.js";

const response = await octokit.request("GET /gists/" + import.meta.env.VITE_ENGLISH_GIST_ID, {
    gist_id: import.meta.env.VITE_ENGLISH_GIST_ID,
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
    }
});

const gist = await response.data;
const fileName = Object.keys(gist.files)[0];
const data = JSON.parse(gist.files[fileName].content);

export default data;
