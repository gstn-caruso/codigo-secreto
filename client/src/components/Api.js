const request = async (ruta, opciones) => {
  const resp = await fetch(ruta, opciones);
  window._resp = resp;
  let text = await resp.text();
  let data = null;
  try {
    data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
  } catch (e) {
    console.err(`Invalid json\n${e}`);
  }

  if (resp.status !== 200) {
    throw Error(data ? data.message : 'No data');
  }

  return data;
};

export default request;
