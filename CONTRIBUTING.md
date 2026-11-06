# Contributing

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Pull requests are checked with [commitlint](https://commitlint.js.org/) using
the [`config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
rules. Merge commits created by GitHub are exempt.

## Releases

Merging to `main` runs [semantic-release](https://semantic-release.gitbook.io/),
which inspects the commits since the last release and, if any warrant one,
tags the release, publishes it to npm, and writes the GitHub release notes.
Commit types set the version bump as described in the
[specification](https://www.conventionalcommits.org/en/v1.0.0/#summary).
There is no need to edit `version` in `package.json` or update a changelog by
hand.
