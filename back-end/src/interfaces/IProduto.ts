import { z } from 'zod';

const ProdutoZodSchema = z.object({
  produto: z.string({
    required_error: 'Produto is required',
    invalid_type_error: 'Produto must be a string',
  }),
  valor: z.number({
    required_error: 'Valor is required',
    invalid_type_error: 'Valor must be a number',
  }),
  descricao: z.string({
    required_error: 'Descricao is required',
    invalid_type_error: 'Descricao must be a string',
  }),
});
type IProduto = z.infer<typeof ProdutoZodSchema>;
export { ProdutoZodSchema, IProduto };