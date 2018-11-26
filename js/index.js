function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
}

function getRepositories(el) {
  console.log(el);
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories)
  req.open('GET', `https://api.github.com/users/${el.id.value}/repos`);
  req.send();
}