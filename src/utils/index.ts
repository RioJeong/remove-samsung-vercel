// await delay(2000)
export function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
