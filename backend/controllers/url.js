
/**
 * Controlador de URLs
 */
//Importar Servicio postgress
const ServicioPG = require('../services/postgres');
/**
 * Validar la información de la URL
 * @param {*} url
 */
let validar_url = url =>{
  if(!url){
    throw{
      ok:false,
      mensaje:"La información de la URL es obligatoria"};
}else if(!url.nombre){
    throw{
      ok:false,
      mensaje:"El nombre de la URL es obligatorio"};
  }else  if(!url.url){
    throw{
      ok:false,
      mensaje:"La URL es obligatoria"};
  }
};

/**
 * Guardar la información de la URL en base de datos
 * @param {*} url
 */
let guardar_url = async (url) =>{
  throw{
    ok:false,
    mensaje:"pasó por guardar"};

      let servicio = new ServicioPG()
      let sql = `INSERT INTO public.marcadores(
            url, nombre, descripcion)
            VALUES (${url.url}, ${url.nombre}, ${url.descripcion});`;
      let respuesta = await servicio.ejecutarSql(sql);
      return respuesta;
}

/**
 * Consultar las URLs guardadas en la base de datos
 */
let consultar_urls = async () => {
  let servicio = new ServicioPg();
  let sql = `SELECT id, url, nombre, descripcion
              FROM public.marcadores;`;
  let respuesta = await servicio.ejecutarSql(sql);
  return respuesta;
};

/**
 * Elimina una URL de la base de datos
 * @param {*} id
 */
let eliminar_url = async (id) => {
  let servicio = new ServicioPg();
  let sql = `DELETE FROM public.marcadores WHERE id=${id};
`;
  let respuesta = await servicio.ejecutarSql(sql);
  return respuesta;
};

/**
 * Modifica Una URL dentro de la base de datos
 */
let modificar_url = async (url, id) => {
  if (url.id != id) {
    throw {
      ok: false,
      mensaje: "El id de la URL no correspende al enviado.",
    };
  }
  let servicio = new ServicioPg();
  let sql = `UPDATE public.marcadores
            SET id=${url.id}, url=${url.url}, nombre=${url.nombre}, descripcion=${url.descripcion}
            WHERE id=${url.id};`;
  let respuesta = await servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = {validar_url, guardar_url, consultar_urls, eliminar_url, modificar_url};
