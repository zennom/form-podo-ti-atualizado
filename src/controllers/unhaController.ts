import { Request, Response } from 'express';
import Unha from '../models/Unha';

export const exibirFormularioUnha = (req: Request, res: Response) => {
  const { id_cliente } = req.params;
  res.render('unha', { id_cliente });
};

export const cadastrarUnha = async (req: Request, res: Response) => {
  try {
    const { id_cliente, dedo, estado, observacoes } = req.body;

    await Unha.create({
      id_cliente,
      dedo,
      estado,
      observacoes: observacoes || '',
      data_consulta: new Date()
    });

    // Redireciona para a página de confirmação
    res.redirect('/cadastro/confirmacao');
  } catch (error) {
    console.error("Erro ao cadastrar unha:", error);
    res.status(500).send("Erro ao cadastrar unha.");
  }
};