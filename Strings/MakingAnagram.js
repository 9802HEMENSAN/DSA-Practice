 
function runProgram(input) {
    input=input.split("\n");
    let str1=input[0];
    let str2=input[1];
    MakingAnagrams(str1,str2);
  }
  
  function MakingAnagrams(str1,str2){
      // console.log(str1,str2)
        const charFrequency = {}; // Character frequency storage
  
    // Iterate through string a and update character frequency
    for (let char of str1) {
      charFrequency[char] = charFrequency[char] ? charFrequency[char] + 1 : 1;
    }
    // Iterate through string b and subtract character frequency
    for (let char of str2) {
      charFrequency[char] = charFrequency[char] ? charFrequency[char] - 1 : -1;
    }
  //  console.log(charFrequency)
  
    // Sum up the absolute values of character frequencies
    let deletions = 0;
    for (let char in charFrequency) {
      deletions += Math.abs(charFrequency[char]);
    }
  
    console.log(deletions);
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
   