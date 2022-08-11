import * as places from '~/consts/places'

export const O_SKLAD_KEY = 'o-sklad'

export const SKLAD_OFFICERS_VALUE = 'ОФІЦЕРИ'
export const SKLAD_SERGEANTS_VALUE = 'СЕРЖАНТИ'
export const SKLAD_SOLDIERS_VALUE = 'СОЛДАТИ'

export const rankCount = function (list, place) {

  if (place !== undefined) {
    list = list.filter(el => el.place === place)
  }

  const officers = list.filter(el => el[O_SKLAD_KEY] === SKLAD_OFFICERS_VALUE).length
  const sergeants = list.filter(el => el[O_SKLAD_KEY] === SKLAD_SERGEANTS_VALUE).length
  const soldiers = list.filter(el => el[O_SKLAD_KEY] === SKLAD_SOLDIERS_VALUE).length

  return { officers, sergeants, soldiers }
}

// За списком
export const inList = function (list, rota, vzvod) {
  return rankCount(list.filter(voin => {
    return (!rota || voin.r.toString() === rota.toString()) &&
      (!vzvod || voin.vzv.toString() === vzvod.toString())
  }))
}

// В наявності
export const inStock = function (list) {
  return rankCount(list.filter(voin => !voin.place))
}

// В госпіталі
export const inHospital = function (list) {
  return rankCount(list, places.HOSPITAL)
}

// В лікарні
export const inClinic = function (list) {
  return rankCount(list, places.CLINIC)
}

// В відряджені
export const takenAway = function (list) {
  return rankCount(list, places.TAKEN_AWAY)
}

// В відпустці
export const inVacation = function (list) {
  return rankCount(list, places.VACATION)
}

// В відряджені в інші підрозділи
export const takenInBatalion = function (list, rota, vzvod) {
  return rankCount(list.filter(voin => {
    const checkRota = rota ? rota.toString() === voin.r.toString() : true
    const checkVzvod = vzvod ? vzvod.toString() === voin.vzv.toString() : true
    const check = vzvod ? checkRota && checkVzvod : checkRota

    return voin.place === places.TAKEN_AWAY_IN_BATALION && check
  }))
}

// Приряджені
export const addedFromBatalion = function (list, rota, vzvod) {
  return rankCount(list.filter(voin => {
    const checkRota = rota ? rota.toString() === voin.r.toString() : true
    const checkVzvod = vzvod ? vzvod.toString() === voin.vzv.toString() : true
    const check = vzvod ? checkRota && checkVzvod : checkRota

    return voin.place === places.TAKEN_AWAY_IN_BATALION && !check
  }))
}
