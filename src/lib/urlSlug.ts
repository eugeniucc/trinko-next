export const urlSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9а-яё ]/gi, '')
    .replace(/\s+/g, '-')
    .trim()
}
