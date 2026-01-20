# New Project
This is a new local Repository

# Git
Configure git : 
Git configure global  user.name “name”
Git configure global user.email “email”

To Create a new git repo on local system 
Git init 

Git commands
Git clone : to clone a repo
Git status : to view the current state 
Git add . : to stage the newly created files and the changes 
Git commit -m “message” : to commit the staged files 
Git remote add ‘link of the GitHub repo’
Git push origin -u main : to push the committed changes (after applying -u we can use the ‘git push’ only)
Git branch : to check current branch 
Git branch -M <new name> : to rename the branch
Git checkout <branch name> : to navigate to another branch 
Git checkout -b <branch name> : to create new branch 
Git checkout -d <branch name> : to delete a branch
git push --set-upstream origin feature : to add that new branch
Git diff <branch name> : to compare commits ,branches, files and more
Git merge <branch name>: to merge the branch 
Git pull origin main  

Git reset : to un staged the changes
Git reset HEAD~1 : to un commit one change
Git reset <commit hash> : to move many earlier commits 
Git reset —hard <commit hash> : to move to earlier changes with editing in the Vs code 