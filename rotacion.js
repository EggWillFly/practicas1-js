angulo=Math.floor(Math.random()*(360-0)+0);
rotacion = Math.floor(Math.random()*(11-5)+5);
total = Math.floor(Math.random() * (360-0) + 0) * rotacion + angulo;
fin = total%360
console.log("Angulo: "+ angulo + "\nNro aleatorio: " + total + "\n" + "nro angulo final: " + fin + "\n");
