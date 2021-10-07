export default function (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: string
) {
  return fetch(url, {
    method,
    body: body ? body : "",
  })
    .then((response) => response.json())
    .then(
      (data) => {
        return data;
      },
      (error) => console.log(error)
    );
}
