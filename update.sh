set -e

sed -i -r s/.*/$tag/ src/servers/dashboard/version

if [[ -n $(git status --porcelain) ]]; then
    ## changed

    echo "dirty=yes" >>$GITHUB_OUTPUT
fi