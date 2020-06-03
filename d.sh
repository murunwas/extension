NOW=$(date +"%m-%d-%Y")
msg=$1
if [ $# -eq 0 ]
  then
    msg="bug fixes"
fi

git add .
git commit -m "$msg - $NOW"
git push origin master
npm publish