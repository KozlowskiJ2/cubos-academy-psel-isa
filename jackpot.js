function solucao(resultado1, resultado2, resultado3) {
	if(resultado1==resultado2&&resultado1==resultado3&&resultado2==resultado3){
        console.log(true)
    }else{
        console.log(false)
    }    
}

function processData(input) {
    const [resultado1, resultado2, resultado3] = input.split(" ");
  	solucao(resultado1, resultado2, resultado3);
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
