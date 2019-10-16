// let board= [
//     [2,2,2,2],
//     [2,2,2,2],
//     [2,2,2,2],
//     [2,2,2,2]
// ]

// for (var i=0; i<4; i++) {
//     for (var j=0; j<4; j++) {
//         $("div.box-topLeft").html(board[i][j] = i*j);
//     }
//  }


/////// creating 4x4 boxes for game
let z = 4;
for (let i=0; i<z;i++){
    for (let j=0; j<z; j++){
$("div.container").append('<div class="box-'+i+j+'"></div>');
////////appending 
$("div.box-"+i+j+"").css({
    "background-color":"#333",
        "padding":"20px",
        "border-radius":"10px",
        "color":"#fff",
        "display":"flex",
        "align-items":"center",
        "justify-content":"center",
        "font-size":"40px",
        "font-family":"sans-serif" 
    })
}
}
///////random numbers generation
function random2 (){
    let rand1 = Math.floor(Math.random() * z)
    let rand2 = Math.floor(Math.random() * z)
   
    if ($("div.box-"+rand1+rand2+"").html() <= 2){
        $("div.box-"+rand1+rand2+"").html(2)
    } 
}
random2()
random2()
///////////// 4x4 array

/////////// pushing divs into array
 

// console.log(board)
var board = [];
for(var i=0; i<z; i++) {
    board[i] = [];
    for(var j=0; j<z; j++) {
        board[i][j] = undefined;
    }
}


let zeta = math.matrix(board)
console.log(zeta)

function pushToBoard() {
for (let i=0; i<z;i++){
    for (let j=0; j<z; j++){
  board[i][j] = Number($("div.box-"+i+j+"").html())
  
        }
    }
}

pushToBoard()

// // let rand_x = Math.floor(Math.random() * 2)
// // let rand_y = Math.floor(Math.random() * 2)
// // board[rand_x][rand_y] = 2
// // $("div.box-topLeft").html(board[0][0])
// // $("div.box-topRight").html(board[0][1])
// // $("div.box-bottomLeft").html(board[1][0])
// // $("div.box-bottomRight").html(board[1][1])
// score
function scoreboard (){
var score = 0;
for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
    score += board[i][j] << 0;
  

}}

$("div.box-score").html("Score: "+score)}
// // $("div.box-topLeft").html()
// // $("div.box-topRight").html()
// // $("div.box-bottomLeft").html()
// // $("div.box-bottomRight").html()
// let topLeft = Number($("div.box-topLeft").html())
// let topRight = Number($("div.box-topRight").html())
// let bottomLeft = Number($("div.box-bottomLeft").html())
// let bottomRight = Number($("div.box-bottomRight").html())
function command (){
        random2()
        scoreboard()
        pushToBoard()
}

$(document).ready(function(){
$("body").keydown(function(key){
   
    //left
    if (key.which == 37) { 
       
        command ()
    

    }
    //right
    if (key.which == 39) {
        
       
        command ()
    }
    //up
    if (key.which == 38) {
       
        command ()
        
    }
    //down
	if (key.which == 40) {
        command ()

    } 
    
    })

})

