//arrange
juegoAnt=4
//Act
juegoActual=5
//Assert
test('nro juego mayor o igual a 1',()=>{
    expect(juegoActual).toBeGreaterThanOrEqual(1);
  });

test('nro juego menor o igual a 10',()=>{
  expect(juegoActual).toBeLessThanOrEqual(10);
});

test('nro juego actual mayor a juego anterior por diferencia de 1',()=>{
  expect(nroJuegoActual).toBe(nroJuegoAnt+1);
});
