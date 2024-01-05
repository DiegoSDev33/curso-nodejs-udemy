const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }

  static async dashboard(req, res) {
    const userId = req.session.userid;
  
    try {
      const user = await User.findOne({
        where: {
          id: userId
        },
        include: Tought // Verifique se o nome do modelo está correto aqui
      });
  
      if (!user) {
        return res.redirect('/login');
      }
  
      const toughts = user.Toughts.map((result) => result.dataValues);
      console.log(toughts);
  
      res.render("toughts/dashboard", { toughts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar o dashboard.');
    }
  }
  



  
  static createTought(req, res) {
    res.render("toughts/create");
  }

  static async createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    try {
      await Tought.create(tought);

      req.flash("message", "Pensamento criado com sucesso!!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log("Ocorreu um erro" + err);
    }
  }
};
