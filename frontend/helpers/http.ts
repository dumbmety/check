const apiUrl = "http://localhost:5500/api"

type Method = "GET" | "POST" | "PUT" | "DELETE"
type Headers = { [key: string]: string }

type Options = {
  method: Method
  body?: string
  headers?: Headers
}

export async function http(url: string, method: Method, body?: any) {
  const options: Options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(`${apiUrl}${url}`, options)
  return response.json()
}
