function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
}

function getRepositories() {
  console.log(el);
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories)
  req.open('GET', `https://api.github.com/users/test/repos`);
  req.send();
}