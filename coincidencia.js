function solucao(jogadas) {
    let zeros=[],ums=[]
    for(index=0;index<jogadas.length;index++){
    if(jogadas[index]===0){
      zeros.push(jogadas[index])
    }else{
      ums.push(jogadas[index])
    }
  }
  if(zeros.length===ums.length){
    console.log(true)
  }else{
    console.log(false)
  }
  }
  
  function processData(input) {
    const nums = input.trim().split(" ");
    solucao(nums.map(x => parseInt(x)));
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