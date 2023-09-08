today=new Date();
now=today.getHours();
min=today.getMinutes();
minalt=Math.floor(Math.random()*(601-300)+300);
horaalt=Math.floor(minalt/60);
minfin=min+minalt%60;
horafin=now+horaalt;
if(minfin>=60){
    horafin+=1;
    minfin-=60;
}
console.log("Hora Inicial: "+now+":"+min+"\nHora Random: "+minalt+"\nHora Final: "+horafin+":"+minfin);
