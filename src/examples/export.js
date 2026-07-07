// 내보내기

// 1) 기본 내보내기(default export)
//    - 하나의 모듈에서 하나의 데이터 내보내기 가능!
//    - 이름이 사용되지 않음!(이름이 필요하지 않음)

export default function () {}

// 2) 이름 내보내기(named export)
//    - 하나의 모듈에서 여러 개의 데이터 내보내기 가능!
//    - 이름이 필수!

export const name = 'HEROPY'
export const age = 20
export const isValid = false
export function hello() {}
