  
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let N=+input[l++];
        let str=input[l++];
        fun(N,str);
    }
 }
 function fun(N,str){
     let s=[];
     let moves=0;
     for(let i=0; i<N; i++){
         if(str[i]=="("){
             s.push(str[i]);
         }
         else if(str[i]==")"){
             if(s.length==0){
                 moves++;
             }
             else{
                 s.pop();
             }
         }
     }
     console.log(moves);
 }
 
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
  