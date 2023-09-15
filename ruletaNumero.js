//act
vueltas=Math.floor(Math.random()*(11-5)+5);
n=Math.floor(Math.random()*(37-0)+0);
resp=vueltas*37+n;
num=total%37;

//assert
test('numero mayor o igual a 0',()=>{
  expect(resp).toBeGreaterThanOrEqual(0);
});

test('numero menor o igual a 36',()=>{
expect(resp).toBeLessThanOrEqual(36);
});
