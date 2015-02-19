# Tools to manage github repo

## Quick start

```sh
$ meteor add pntbr:github-repo
```

Setup your repositories in a client file :

ex. setup.js
```js
github_repo.list = [
  {label: 'gymkhana', owner: 'pointbar', repo: 'gymkhana-contenu'}
];
```

## API

> github_repo.byLabel(*label*)

Retrieve the repo by his label :

```js
> github_repo.byLabel('gymkhana')

{owner: 'pointbar', repo: 'gymkhana-contenu'}
```
