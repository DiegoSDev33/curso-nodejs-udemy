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
  
      let emptyToughts = false

      if(toughts.length ===0){
        emptyToughts =true
      }


      res.render("toughts/dashboard", { toughts, emptyToughts });
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

  static async removeTought(req, res){

    const id = req.body.id
    const UserId = req.session.userid

    try{
      await Tought.destroy({where: {id:id, UserId: UserId}})

      req.flash("message", "Pensamento removido com sucesso!!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });

    }catch(err){
      console.log("Ocorreu um erro" + err);
    }
    


  }

  static async updateTought(req, res){

    const id = req.params.id

    const tought = await Tought.findOne({where:{id, id}, raw: true})

    res.render('toughts/edit', {tought})
  }

  static async updateToughtSave(req,res){
    const id =  req.body.id

    const tought={
      title: req.body.title
    }


    try {
    
      await Tought.update(tought, {where: {id, id}})

      req.flash("message", "Pensamento atualizado com sucesso!!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log("Ocorreu um erro" + err);
    }


  }

};
