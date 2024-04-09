function updateClock() {
   let matenat = new Date()
   let h = matenat.getHours().toString().padStart(2,'0');
   let m = matenat.getMinutes().toString().padStart(2,'0');
   let s = matenat.getSeconds().toString().padStart(2,'0');
   document.getElementById('H').innerText = h;
   document.getElementById('M').innerText = m;
   document.getElementById('S').innerText = s;
}
setInterval(updateClock);
