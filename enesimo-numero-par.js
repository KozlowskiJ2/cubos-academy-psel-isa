function solucao(n) {
    console.log(2*n)
  }
  
  function processData(input) {
      solucao(parseInt(input));
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