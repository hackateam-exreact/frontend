export const calcReadingTime = (text: string) => {
  const totalWords = text.split('').length

  return Math.round(totalWords / 200)
}
