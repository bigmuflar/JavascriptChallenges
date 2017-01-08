process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var posNum = 0;
    var negNum = 0;
    var zero = 0;
    
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            posNum += 1;
        } else if(arr[i] < 0){
            negNum += 1;
        } else if(arr[i] === 0){
            zero += 1;
        }
    }
    console.log((posNum/n).toPrecision(6))
    console.log((negNum/n).toPrecision(6))
    console.log((zero/n).toPrecision(6))
}
