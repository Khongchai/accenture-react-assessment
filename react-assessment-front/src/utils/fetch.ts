export default function (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  body?: string
) {
  return fetch(url, {
    method,
    body: body ? body : "",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(
      (data) => {
        return data;
      },
      (error) => console.log(error)
    );
}
