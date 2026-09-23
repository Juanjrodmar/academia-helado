// Calculadora recargo vs. margen — misma fórmula que la hoja «Precio de Venta» del kit:
// margen bruto = 1 − (1 − gastos de venta) / (1 + recargo)
(function(){
  var m=document.getElementById('markup'), s=document.getElementById('sell');
  if(!m||!s) return;
  var mo=document.getElementById('markup-out'), so=document.getElementById('sell-out');
  var big=document.getElementById('margin-out'), box=document.getElementById('result');
  var verdict=document.getElementById('verdict'), meter=document.getElementById('meter');
  var T=JSON.parse(document.getElementById('i18n').textContent);
  function calc(){
    var mk=parseFloat(m.value)/100, sv=parseFloat(s.value)/100;
    var margin=(1-(1-sv)/(1+mk))*100;
    var sp=T.sep||' ';
    mo.textContent=m.value+sp+'%'; so.textContent=s.value+sp+'%';
    big.textContent=margin.toFixed(0)+sp+'%';
    var state='mid', label=T.mid;
    if(margin>=55){state='ok';label=T.ok}else if(margin<45){state='bad';label=T.bad}
    box.dataset.state=state; verdict.textContent=label;
    meter.style.width=Math.min(100,Math.max(0,margin))+'%';
  }
  m.addEventListener('input',calc); s.addEventListener('input',calc); calc();
})();
