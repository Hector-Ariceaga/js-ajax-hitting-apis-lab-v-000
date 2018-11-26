function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '</li>').join('')}</ul>`
  document.getElementById('repositories').innerHTML = repoList
}

function getRepositories() {
  var username = document.getElementById('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}