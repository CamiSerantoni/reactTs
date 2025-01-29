export async fubction get (url: string){
  const response =  await fetch(url)

  if (!response.ok){
    throw new Error('Request failed')
  }
}