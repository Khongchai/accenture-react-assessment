export default function customFetch(
  url: string,
  method: "POST" | "PUT" | "DELETE" | "PATCH",
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
