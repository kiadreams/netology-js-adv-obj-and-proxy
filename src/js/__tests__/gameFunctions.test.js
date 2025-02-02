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


test.each([
  [
    'with a description field',
    {id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон'},
    [8, 'Двойной выстрел', 'Двойной выстрел наносит двойной урон', 'http://...'],
  ],
  [
    'without a description field',
    {id: 9, name: 'Нокаутирующий удар', icon: 'http://...'},
    [9, 'Нокаутирующий удар', 'Описание недоступно', 'http://...'],
  ]
])('Testing getSpecialData function: %s', (nameTest, inputObj, expectResult) => {
  expect(getSpecialData(inputObj)).toEqual(expectResult);
});
