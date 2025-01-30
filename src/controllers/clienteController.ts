import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

export const exibirFormularioCliente = (req: Request, res: Response) => {
  res.render('cliente');
};

export const cadastrarCliente = async (req: Request, res: Response) => {
  try {
    const { nome, data_nascimento, email, telefone, endereco, sexo } = req.body;

    const novoCliente = await Cliente.create({
      nome,
      data_nascimento,
      email,
      telefone,
      endereco,
      sexo,  // Salvando o sexo
    });

    res.redirect(`/cadastro/unha/${novoCliente.id_cliente}`);
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    res.status(500).send("Erro ao cadastrar cliente.");
  }
};
