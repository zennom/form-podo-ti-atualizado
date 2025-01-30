import { Request, Response } from 'express';

export const exibirConfirmacao = (req: Request, res: Response) => {
  res.render('cadastro-finalizado');
};
