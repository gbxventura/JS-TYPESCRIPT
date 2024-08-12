import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Maria",
      sobrenome: "Miranda",
      email: "maria@gmail.com",
      idade: 57,
      peso: 60,
      altura: 1.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
