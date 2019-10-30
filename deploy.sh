set -e

npm run build

cd dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:imkdir/imkdir.com.git master:gh-pages

cd -

