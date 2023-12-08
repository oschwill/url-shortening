export const createLinks = (input, setOutput, setLocalStorage, localStorage) => {
  const data = {
    origUrl: input,
  };

  fetch('http://localhost:9000/', {
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
      console.log(response.json());
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
    });
};
