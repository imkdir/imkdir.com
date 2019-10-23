## generate film log
```shell script
(cd dropbox/movie/watch\ list && ls -t | sed 's/\(.*\).jpg/"\1",/' | pbcopy)
```