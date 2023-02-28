const { Adopt } = require("../models");

const adoptsController = {

/**
 * Récupère la liste de toutes les adoptions
 *
 * @function
 * @async
 * @param {Object} _ - Paramètre non utilisé
 * @param {Object} res - Objet Response Express
 * @param {function} next - Middleware pour passer à la prochaine fonction
 * @returns {Promise} Liste de toutes les adoptions
 * @throws {Error} Si une erreur se produit lors de la récupération des adoptions dans la base de données
 */

    async getAll(_, res, next) {
        try {
            const adopts = await Adopt.findAll();
            if(adopts) {
                res.json(adopts);
            } else {
                next(new Error("Problème de BDD"));
            }  
        } catch(error) {
            res.status(500).json({
                error: "erreur !"
            });
        } 
    },

   // Récupère une adoption
    async getAdopt(req, res, next) {
        try {
            const adopt = await Adopt.findByPk(req.params.id);
            if(adopt) {
                res.json(adopt);
            } else {
                next(new Error("Problème de BDD"));
            }
        } catch(error) {
            res.status(500).json({
                error: "erreur !"
            });
        }
    },
    // Ajoute une adoption
    async addAdopt(req, res, next) {
        try{
          const addAdopt = await Adopt.create(req.body);
          if (addAdopt) {
            res.json(addAdopt);
          } else {
            next(new Error("Problème de BDD"));
          }  
        } catch(error) {
            res.status(500).json({
                error: "erreur !"
            });
        }      
    },

    // Modifie une adoption
    async updateAdopt(req, res, next) {
        try {
            const adopt = await Adopt.update(req.params.id, req.body);
            if(adopt) {
                res.json(adopt);
            } else {
                next(new Error("Problème de BDD"));
            }
        } catch(error) {
            res.status(500).json({
                error: "erreur !"
            });
        }
    },

    // Supprime une adoption
    async deleteAdopt(req,res,next){
        try {
            const adopt = await Adopt.delete(req.params.id);
            if (adopt) {
                res.json(adopt);
            }
            else {
                next(new Error("Problème de BDD"));
            }
        } catch(error) {
            res.status(500).json({
                error: "erreur !"
            });
        }
    },
}

module.exports = adoptsController;