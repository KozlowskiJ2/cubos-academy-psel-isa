function solucao(ganhos, serasaScore, mesesParaPagar) {
    let tresGanhos=3*ganhos,juros1=ganhos*(3/100),juros2=ganhos*(9/100),juros3=ganhos*(15/100)
    let parcela
    if(serasaScore<300){
        parcela=(tresGanhos+juros1)/mesesParaPagar
    }else if(serasaScore<700){
        parcela=(tresGanhos+juros2)/mesesParaPagar
     }else{
         parcela=(tresGanhos+juros3)/mesesParaPagar
     }   
     console.log(parcela)
 }
 
 function processData(input) {
     const { ganhos, serasaScore, mesesParaPagar } = JSON.parse(input);
       solucao(ganhos, serasaScore, mesesParaPagar);
 }
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 _input = "";
 process.stdin.on("data", function (input) {
     _input += input;
 });
 
 process.stdin.on("end", function () {
    processData(_input);
 });