function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
  const repoList = 
}

function getRepositories() {
  var username = document.getElementById('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}