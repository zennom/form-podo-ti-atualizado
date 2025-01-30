import { Router } from 'express';
import { exibirFormularioCliente, cadastrarCliente } from '../controllers/clienteController';
import { exibirFormularioUnha, cadastrarUnha } from '../controllers/unhaController';
import { exibirConfirmacao } from '../controllers/confirmacaController';

const router = Router();

// Rotas para clientes
router.get('/cadastro/cliente', exibirFormularioCliente);
router.post('/cadastro/cliente', cadastrarCliente);

// Rotas para unhas
router.get('/cadastro/unha/:id_cliente', exibirFormularioUnha);
router.post('/cadastro/unha', cadastrarUnha);

// Rota de confirmação
router.get('/cadastro/confirmacao', exibirConfirmacao);

export default router;