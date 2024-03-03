import { z } from 'zod'
import { FormSignUpSchema } from './schema'

export type FormSignUpData = z.infer<typeof FormSignUpSchema>
