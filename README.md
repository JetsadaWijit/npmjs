# `Function`
## `GitHub`
- [buildGitHubRepos](#buildGitHubRepos)
- [deleteGitHubRepos](#deletegithubrepos)
- [inviteGitHubReposCollaborators](#invitegithubreposcollaborators)
- [removeGitHubReposCollaborators](#removegithubreposcollaborators)
#### `buildGitHubRepos`
- `usage`
    ```
    import { buildGitHubRepos } from 'jwz';

    /*
        @param org = String
        @param repo = String
        @param vis = String
        @param token = String
    */

    const org = 'your-org-name';
    var repos = ['your-repoA', 'your-repoB'];
    var vis = 'public';
    const token = 'your-token';

    const res = await buildGitHubRepos(org, repos, vis, token);

    console.log(res);
    ```
### `deleteGitHubRepos`
- `usage`
    ```
    import { deleteGitHubRepos } from "jwz";

    /*
        @param org = String
        @param repos = Array
        @param token = String
    */

    const org = 'your-org-name';
    var repos = ['your-repoA', 'your-repoB'];
    const token = 'your-token';

    deleteGitHubRepos(org, repos, token)
    ```
### `inviteGitHubReposCollaborators`
- `usage`
    ```
    import { inviteGitHubReposCollaborators } from "jwz";

    /*
        @param org = String
        @param repos = Array
        @param collaborators = Array
        @param token = String
    */

    const org = 'your-org-name';
    var repo = ['your-repoA', 'your-repoB'];
    var collaborators = ['collaboratorA', 'collaboratorB']
    const token = 'your-token';

    inviteGitHubReposCollaborators(org, repos, collaborators, token);
    ```
- `note`
    - when code is running it will have output of result
### `removeGitHubReposCollaborators`
- `usage`
    ```
    import { removeGitHubReposCollaborators } from "jwz";

    /*
        @param org = String
        @param repos = Array
        @param collaborators = Array
        @param token = String
    */

    const org = 'your-org-name';
    var repo = ['your-repoA', 'your-repoB'];
    var collaborators = ['collaboratorA', 'collaboratorB']
    const token = 'your-token';

    removeGitHubReposCollaborators(org, repos, collaborators, token);
    ```
