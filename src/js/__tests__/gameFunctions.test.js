import {orderByProps, getSpecialData} from "../gameFunctions.js";


test('Testing orderByProps function', () => {
  const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const sortArrKey = ['name', 'attack'];
  const sortData = [
    {key: 'name', value: 'мечник'},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
    {key: 'level', value: 2}
  ]
  expect(orderByProps(person, sortArrKey)).toEqual(sortData);
});


test('Testing getSpecialData function', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]
  }
  const resArr = [
    {id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...'},
    {id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...'},
  ]
  expect(getSpecialData(character)).toEqual(resArr);
});
