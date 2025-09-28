const bashNotes = `
code FILENAME               create file and open it in VSCode
touch FILE_1 FILE_2         create files 1 and 2 in the cwd
rm FILENAME                 delete file
rm -r DIRNAME               delete directory and all its contents

                    CREATE NEW REPO
Make new local repo
mkdir PROJECT-NAME
cd PROJECT-NAME
git init

Add and commit
git add . && git commit -m "Commit message" && git push

Connect repo to remote
(HTTPS auth)
git remote add origin https://github.com/USERNAME/PROJECT-NAME.git
git push -u origin main

(SSH auth)
git remote add origin git@github.com:USERNAME/PROJECT-NAME.git
git push -u origin main

Clone repo to local
git clone REPO-URL


COMMIT HISTORY
git commit --amend          updates the most recent commit
git reset HEAD              resets all staged files to most recent commit
git reset HEAD~1            removes most recent commit from commit history
by default git reset keeps all changes in the working tree
to remove all changes from the working tree use --hard


BRANCHES
git branch                      list all branches
git branch <branchname>         create new branch with name <branchname>
git branch -d <branchname>      delete <branchname>
git switch <branchname>         switch to different branch
git switch -c <branchname>      creates and switches to new branch

Merging branches
(Merge <branch-b> into <branch-a>)
git switch <branch-a>           switch to branch you to want to merge into
git merge <branch-b>

git restore <filepath>          restores files to most recent commit

`;
export default bashNotes;
