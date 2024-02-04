import { z } from 'zod'

export const FormLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'O email é obrigatório.')
    .email('Formato de e-mail inválido. exemplo@email.com'),
  password: z.string().min(1, 'senha é obrigatoria'),
})
