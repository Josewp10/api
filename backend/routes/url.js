const express = require("express");
const router = express.Router();

//const {validar_url, guardar_url, consultar_url, eliminar_url, modificar_url} = require("../controllers/url");
const _controlador = require("../controllers/url");

/**
 * Obtener URL por id
 */
 router.get("/url", async (req, res)=>{
    let id = await req.params.id;
    _controlador.consultar_urls()
    .then(respuestaBD =>{
      let registros = respuestaBD.rows;
      let mensaje =
        registros.length > 0 ? "URL consultada." : "Sin registro.";
      res.send({ ok: true, info: registros, mensaje });
    })
    .catch(error =>{
      res.send(error);
    });

 });

 /**
  * Guardar URLs
  */
  router.post("/url",async (req, res)=>{
    try {
      //Capturar el body desde la solicitud
        let info_url = await req.body;
        //Validar la información
        _controlador.validar_url(info_url);
        //Guardar la información
        _controlador.guardar_url(info_url).then(respuestaBD => {
          res.send({ok: true, mensaje: "URL guardada", info: info_url});
        })
        .catch(error => {
          res.send(error);
        })

    } catch (e) {
        res.send(e);
    }

  });

  /**
   * Modificar una URL
   */
  router.put("/url/:id", async (req, res) => {
    // Capturar el parámetro de la ruta
    let id =await req.params.id;
    let url =await req.body;
    _controlador.modificar_url(url, id)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "URL modificada", info: respuestaDB });
      })
      .catch((error) => {
        res.send(error);
      });
  });


  /**
   * Eliminar una URL
   */
  router.delete("/url/:id",async (req, res) => {
    let id = await req.params.id;
      _controlador.eliminar_url(id)
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "URL eliminada" });
      })
      .catch((error) => {
        res.send(error);
      });
  });

module.exports = router;
