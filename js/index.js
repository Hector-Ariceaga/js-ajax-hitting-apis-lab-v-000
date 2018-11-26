function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', `https://api.github.com/users/test/repos`);
  req.send();
}