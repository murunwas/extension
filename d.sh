NOW=$(date +"%m-%d-%Y")
git add .
git commit -m "$1 -.$NOW."
git push origin master