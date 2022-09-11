export async function request(endpoint: string, method: string, body?: any) {

  let content: any = {
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      mode: 'no-cors',
    },
  }

  if (body !== null && body !== undefined) {
    let formBody: string[] = [];
    for (var property in body) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    content.body = formBody.join("&");
  }

  const response = await fetch('http://127.0.0.1:5001' + endpoint, content)

  return response.json()
}
