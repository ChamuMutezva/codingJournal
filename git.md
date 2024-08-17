# Git - Getting started
- is the distributed version control system which is used for
  - Keeping a history of code changes
  - revert back to a previous working version
  - collaboration
  - Backing up
 
## Install Git
- check the version of git on the command line (git is a command line tool) using the following command `git --version`. If git is present , a version number will show up
- INSTALLATION NOTES HERE

## Porcelain and Plumbing
Git commands are divided into high-level("porcelain") and low-level("plumbing"). The porcelain commands includes:
- `git status`
- `git add`
- `git commit`
- `git push`
- `git pull`
- `git log`

Some examples of plumbing commands are:
- `git apply`
- `git commit-tree`
- `git hash-object`

### Git Configuration
git should first be configured so as the tracking to take place.  That allows git to track who made the changes . The process is done with the use of your name and email address
- check if your `user.name` and `user.email` are set, the commands are:
  - `git config --get user.name`
  - `git config --get user.email`
if the name and email are set, you will get a response with the details that where used to set up git

If they are not set, use your GitHub username and email and enter the following commands
- `git config --add --global user.name "github_username_here"`
- `git config --add --global user.email "email@example.com"`
