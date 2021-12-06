export const useFetch = async (transform) => {
  const response = await fetch('https://nekos.best/api/v1/nekos');
  const data = await response.json();
  return transform(data);
};
