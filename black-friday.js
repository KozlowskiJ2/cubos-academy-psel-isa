function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let lista=[]
 for(i=0;i<produtos.length;i++){
     const produto = produtos[i]
     if(produto.valor>valorMaximo||produto.avaliacao<avaliacaoMinima){
         continue
     }else{
         lista.push(produto)
     }
     }
 console.log(lista)
  
}

function processData(input) {
  const { produtos, valorMaximo, avaliacaoMinima } = JSON.parse(input);
  solucao(produtos, valorMaximo, avaliacaoMinima);
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
