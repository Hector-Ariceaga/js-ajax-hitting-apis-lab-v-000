function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos)
}

function getRepositories() {
  document.getElementById('')
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', `https://api.github.com/users/${el}/repos`);
  req.send();
}