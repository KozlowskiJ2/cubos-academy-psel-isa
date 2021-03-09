function solucao(velocidade, aceleracao) {
	let parte1=velocidade**2
    let parte2=2*aceleracao
   console.log(-parte1/parte2)
}

function processData(input) {
    const { velocidade, aceleracao } = JSON.parse(input);
  	solucao(velocidade, aceleracao);
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
