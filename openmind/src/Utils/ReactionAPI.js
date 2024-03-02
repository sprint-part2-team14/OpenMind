export async function ReactionAPI(url, method, data) {
  let options;

  if (method === 'GET') {
    options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };
  } else {
    options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  }
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
