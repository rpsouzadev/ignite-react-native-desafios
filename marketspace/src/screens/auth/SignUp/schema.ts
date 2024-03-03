import { z } from 'zod'

const telephoneBrasileiroRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/

export const FormSignUpSchema = z
  .object({
    name: z.string().min(1, 'Nome obrigatório'),
    email: z
      .string()
      .min(1, 'O email é obrigatório.')
      .email('Formato de e-mail inválido. exemplo@email.com'),
    telephone: z
      .string()
      .min(1, 'Telefone é obrigatório')
      .regex(
        telephoneBrasileiroRegex,
        'Formato de telefone inválido. Use o formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.',
      ),
    password: z.string().min(6, 'Senha é obrigatória, mínimo 6 dígitos'),
    confirmPassword: z.string(),
  })
  .refine((field) => field.password === field.confirmPassword, {
    message: 'A senha não confere.',
    path: ['confirmPassword'],
  })
