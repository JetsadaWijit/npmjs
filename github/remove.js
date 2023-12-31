const axios = require('axios')
const path = require('path');

const {
    readPropertiesFile,
    replacePlaceholders
} = require('../essential');

/*
    @param org = String
    @param repos = Array
    @param arrays = Two dimension array
    @param token = String
*/

async function removeCollaboratorsFromRepos(org, repos, arrays, token) {
    // Get org repo URL
    const filePath = path.join(__dirname, 'properties', 'api.properties');
    const config = readPropertiesFile(filePath);

    try {
        await Promise.all(repos.map(async (repo, i) => {
            for (let j = 0; j < arrays[i].length; j++) {
                const replacements = {
                    organization: org,
                    repository: repo,
                    collaborator: arrays[i][j]
                };

                try {
                    await axios.delete(replacePlaceholders(config.repocollaboratorurl, replacements), {}, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/vnd.github.v3+json',
                        },
                    });
                    console.log(`Collaborator ${arrays[i][j]} removed from ${repo}`);
                } catch (error) {
                    console.error(`Error removing ${arrays[i][j]} from ${repo}:`, error.response ? error.response.data : error.message);
                }
            }
        }));
    } catch (error) {
        console.error('Error removing collaborators:', error.response ? error.response.data : error.message);
    }
}

module.exports = removeCollaboratorsFromRepos;