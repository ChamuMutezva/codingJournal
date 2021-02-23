## Git errors
error: ```
       cannot lock ref 'refs/remotes/origin/master': unable to resolve reference 'refs/remotes/origin/master': reference broken
       From https://github.com/ChamuMutezva/maker-pre-launch-landing-page
       ! [new branch]      master     -> origin/master  (unable to update local ref)
       ```
fix:
- `rm .git/refs/remotes/origin/master`
-  `git fetch`
