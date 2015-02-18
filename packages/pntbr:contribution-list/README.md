# Manage markdown files list

## API

> setContributionList(repo, folder)

### Get the list of markdown files in a repo

Thanks to [github-repo](https://github.com/daktary/meteor-github-repo) to provide usefull methods to setup your repository ;)

```js
var repo = github_repo.byLabel('gymkhana');
var folder = 'contributions';

// repo lookslike that {owner: 'gymkhana-fr', repo: 'gymkhana-contenu'}
setContributionList(repo, folder);
```
After you can retrieve the list in meteor Session

```js
// example: Session.get('gymkhana-fr/gymkhana-contenu');
Session.get(owner + '/' + repo);
```
