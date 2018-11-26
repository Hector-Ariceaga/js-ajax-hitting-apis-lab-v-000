function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + ' - <a href="#" data-repository="' + repo.name + '" data-username="' + repo.owner.login + '" onclick="getCommits(this)">Get Commits</a> - <a href="' + repo.</li>').join('')}</ul>`
  document.getElementById('repositories').innerHTML = repoList
}

function getRepositories() {
  const username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.name + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById('details').innerHTML = commitsList
}

function getCommits(el) {
  const repo = el.dataset.repo;
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + '/'+ repo + '/commits')
  req.send();
}