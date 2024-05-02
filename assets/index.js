let userInput = document.getElementById('date');

userInput.max = new Date().toISOString().split("T")[0];

function calcularIdade(){
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();


  let y3, m3, d3;

  y3 = y2 - y1;

  if(m2 >= m1){
      m3 = m2 - m1;
  } else{
      y3--;
      m3 = 12 + m2 - m1;
  }
  if(d2 >= d1){
      d3 = d2 - d1;
  } else{
      m3--;
      let daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
      d3 = daysInLastMonth - (d1 - d2);
  }
  if(m3 < 0){
      m3++;
      m3 -= m2;
      y3--;
  }
  if(y3 < 0){
      y3++;
  }
  document.getElementById("idade").innerHTML = `você tem ${y3} anos, ${m3} meses e ${d3} dias`;
}

function getDaysInMonth(year, month){
  return new Date(year, month, 0).getDate();
}