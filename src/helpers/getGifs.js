export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=IUZ88yfl5h9qRyNpTjGX4f5ZcSpspvOu&q=${category}&limit=5`;
  const resp = await fetch(URL);
  const {data} = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return gifs;
}