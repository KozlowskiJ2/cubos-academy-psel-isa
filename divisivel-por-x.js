function solucao(numero, x) {
    let resto=numero%x
	if(resto===0){
        console.log(true)
    }else{
        console.log(false)
    }
}

function processData(input) {
  const [numero, x] = input.split(" ");
  solucao(parseInt(numero), parseInt(x));
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