function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    let preco=0,valorDoFrete=distanciaRestaurante*120,unidade
    for(let i=0;i<produtos.length;i++){
        const produto=produtos[i],valor2=produto.valor,quant=produto.quantidade
        if(produto.categoria==="SALGADO"){
            unidade=valor2-(valor2*0.1)
        }else if(produto.categoria==="DOCE"){
           unidade=valor2-(valor2*0.15)
        }else if(produto.categoria==="BEBIDA"){
            unidade=valor2-(valor2*0.3)
        }else{
            unidade=valor2
        } preco=preco+(unidade*quant)
    }
      if(cupomDesconto==="NATAL10"&&ehPrimeiraCompra&&preco>=3000){
          preco=preco-(0.1*preco)+valorDoFrete
      }else if(cupomDesconto==="NATAL20"&&ehPrimeiraCompra&&preco>=4500){
          preco=preco-(0.2*preco)+valorDoFrete
      }else if(cupomDesconto==="NATAL30"&&ehPrimeiraCompra&&preco>=6000){
          preco=preco-(0.3*preco)+valorDoFrete
      }else if(cupomDesconto==="NATALSUPREMO"&&ehPrimeiraCompra&&preco>=8000){
          preco=preco-(0.3*preco)
      }else{
          preco+=valorDoFrete
      }
        console.log(preco)
  }
  
  function processData(input) {
    const { produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra } = JSON.parse(input);
    solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra);
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