const create = async (docente) => {
  try {
    let response = await fetch("/Docente/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(docente),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const inscribe = async (docente) => {
  try {
    let response = await fetch("/inscripcionDocente/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(docente),
    });
    let msgRet = await response.json();
    if (response.ok) {
      return msgRet;
    } else {
      throw new Error(msgRet.message);
    }
  } catch (err) {
    return { error: err.message, message: err.message };
  }
};

const docenteListarHoras = async (opcion, signal) => {
  try {
    console.log("en api-docente, docenteListarHora. opcion", opcion);
    let response = await fetch("/docenteHorarios/" + opcion, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (error) {
    console.log("Este error me arroja ===>", error);
  }
};

const leer = async (params, credential, signal) => {
  try {
    encabezado.Authorization = "Baerer " + credential.t;
    let response = await fetch("/Docente/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Baerer " + credential.t,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (params, credential, Docente) => {
  try {
    let response = await fetch("/Docente/" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Baerer " + credential.t,
      },
      body: JSON.stringify(Docente),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const remove = async (params, credential) => {
  try {
    let response = await fetch("/Docente/" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Baerer " + credential.t,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getDatosCert = async (params, signal) => {
  try {
    let response = await fetch("/listaAlumnosByRut/" + params.rut, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (error) {
    console.log("Este error me arroja ===>", error);
  }
};
const getDatosMatricula = async (params, signal) => {
  console.log(
    "en api-docente, getDatosMatricula. opcion",
    params,
    "   Rut=>",
    params.al_rut
  );
  try {
    let response = await fetch("/Matricula/" + params.al_rut, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (error) {
    console.log("Este error me arroja ===>", error);
  }
};

const getComunas = async () => {
  try {
    let response = await fetch("/getComunas", { method: "GET" });
    return await response.json();
  } catch (error) {
    console.log("**error Comunas *** ===>", error);
  }
};

export {
  create,
  leer,
  update,
  remove,
  inscribe,
  docenteListarHoras,
  getDatosCert,
  getDatosMatricula,
  getComunas,
};
