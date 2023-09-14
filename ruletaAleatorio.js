//act
rotacion=Math.floor(Math.random()*(11 * 37 - 5 * 37)+5*37);

//assert
test('valor aleatorio mayor o igual a cantidad minima',()=>{
  expect(rotacion).toBeGreaterThanOrEqual(37*5);
});

test('valor aleatorio menor o igual a cantidad maxima',()=>{
expect(rotacion).toBeLessThanOrEqual(37*10);
});
