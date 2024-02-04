import { z } from 'zod'
import { FormLoginSchema } from './schema'

export type FormLoginData = z.infer<typeof FormLoginSchema>
