files=${@:-$(find _drafts -type f)}
for file in $files; do
  mv $file _posts/$(date +"%Y-%m-%d-")$(basename $file)
done
