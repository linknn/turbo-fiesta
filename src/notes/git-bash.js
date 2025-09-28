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
`;
export default bashNotes;
