// await delay(2000)
export function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

// <img src="이미지주소" alt="대체텍스트" />
export function loadImage(src: string) {
  return new Promise(function (resolve) {
    const imgEl = document.createElement('img')
    imgEl.addEventListener('load', function () {
      resolve(imgEl)
    })
    imgEl.src = src // 로드 시작!
  })
}
