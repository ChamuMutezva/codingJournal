## Git errors
error: ```
       cannot lock ref 'refs/remotes/origin/master': unable to resolve reference 'refs/remotes/origin/master': reference broken
       From https://github.com/ChamuMutezva/maker-pre-launch-landing-page
       ! [new branch]      master     -> origin/master  (unable to update local ref)
       ```
fix:
- `rm .git/refs/remotes/origin/master`
-  `git fetch`

### Expanded solution
- Navigate to directory => .git/refs/heads/branch_name
- delete the prefered branch name
- then open terminal(git bash or cmd for windows)
- `git reset`
- then commit the changes (if necessary)
- then run the following command for merging the remote repository branch
- `git pull`
- if it gives an error related to **refusing to merge unrelated histories** then run the following command in the terminal
- `git pull origin master --allow-unrelated-histories`
- 
