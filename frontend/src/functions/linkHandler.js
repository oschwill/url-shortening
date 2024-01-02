export const createLinks = async (input, setOutput, setLocalStorage, localStorage) => {
  const data = {
    origUrl: input,
  };

  let hasSuccess = false;

  await fetch(import.meta.env.VITE_FETCH_URL, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    mode: 'cors',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      const newData = {
        id: data.urlId,
        origUrl: data.origUrl,
        shortUrl: data.shortUrl,
      };

      if (localStorage.every((local) => local.id !== newData.id)) {
        setLocalStorage((local) => [...local, newData]);
        setOutput((cur) => [...cur, newData]);
      }
      hasSuccess = true;
    })
    .catch(() => {
      hasSuccess = false;
    });

  return hasSuccess;
};
