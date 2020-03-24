const request = async (ruta, opciones) => {
  const defaultHeaders = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const resp = await fetch(ruta, Object.assign(defaultHeaders, opciones));
  window._resp = resp;
  let text = await resp.text();
  let data = null;
  try {
    data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
  } catch (e) {
    console.error(`Invalid json\n${e}`);
  }

  if (resp.status !== 200) {
    throw Error(data ? data.message : 'No data');
  }

  return data;
};

export default request;
