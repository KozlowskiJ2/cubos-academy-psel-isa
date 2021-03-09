function solucao(stringCorrompida) {
	let filtro=[],stringTela=""
    for(i=0;i<stringCorrompida.length;i++){
      switch(stringCorrompida[i]){
          case "!":
          case "@":
          case "#":
          case "$":
          case "%":
          case "&":
          case "*":
          case "(":
          case ")":
              filtro.push(stringCorrompida[i])
        break;
          default:stringTela+=stringCorrompida[i]
             }}
      console.log(stringTela)
        
}

function processData(input) {
    solucao(input);
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