export const getChuckJoke = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  if(!response.ok){
    const {status, statusText, url} = response;
    throw new Error(`Error (${status}): ${statusText} in ${url}`);
  }
  const data = await response.json();
  return data;
}