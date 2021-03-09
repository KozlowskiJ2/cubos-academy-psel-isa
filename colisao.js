

function solucao(velocidade, aceleracao, distanciaObjeto) {
    let parte1=velocidade**2,parte2=2*aceleracao,distancia=-parte1/parte2
    if(distanciaObjeto<distancia){
        console.log("COLISAO A FRENTE")
    }else if(distanciaObjeto===distancia){
        console.log("NAO ACELERE")
    }else{
        console.log("CAMINHO SEGURO")
    }
  }
  
  function processData(input) {
      const { velocidade, aceleracao, distanciaObjeto } = JSON.parse(input);
        solucao(velocidade, aceleracao, distanciaObjeto);
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
  