export async function get (url: string){
  const response =  await fetch(url)

  if (!response.ok){
    throw new Error('Request failed to fetch data')
  }

  response.json()
}