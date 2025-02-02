export function orderByProps(character, sortArr) {
  const resArr = [];
  const sortCharacter = Object.fromEntries(Object.entries(character).sort())
  sortArr.forEach(value => {
    resArr.push({key: value, value: character[value]});
  });
  for (let key in sortCharacter) {
    if (sortArr.includes(key)) continue;
    resArr.push({key: key, value: sortCharacter[key]});
  }
  return resArr;
}

export function getSpecialData({id, name, description = 'Описание недоступно', icon}) {
  return [id, name, description, icon];
}
