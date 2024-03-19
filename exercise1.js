class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new HttpError(response);
  }
  return response.json();
}

async function demoGithubUser() {
  let name;
  do {
    name = prompt("Enter a name?", "LuisRG98");
    try {
      const user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    }
  } while (true);
}

demoGithubUser();
