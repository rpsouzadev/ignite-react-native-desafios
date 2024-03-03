export function celMask(text: string) {
  const cleaned = text.replace(/\D/g, '')

  let formatted
  if (cleaned.length === 11) {
    formatted = cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
  } else if (cleaned.length === 10) {
    formatted = cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
  } else {
    formatted = cleaned
  }

  return formatted
}
