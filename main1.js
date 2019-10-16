// let board= [
//     [2,2,2,2],
//     [2,2,2,2],
//     [2,2,2,2],
//     [2,2,2,2]
// ]


/////// creating 4x4 boxes for game
let z = 4;
for (let i = 0; i < z; i++) {
    for (let j = 0; j < z; j++) {
        $("div.container").append('<div class="box-' + i + j + '"></div>');
        $("div.box-" + i + j + "").css({
            "background-color": "#333",
            "padding": "20px",
            "border-radius": "10px",
            "color": "#fff",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "font-size": "40px",
            "font-family": "sans-serif"
        })
    }
}
///////random numbers generation
// function random2 (){
//     let rand1 = Math.floor(Math.random() * z)
//     let rand2 = Math.floor(Math.random() * z)

//     if ($("div.box-"+rand1+rand2+"").html() < 2){
//         $("div.box-"+rand1+rand2+"").html(2)
//     } 
// }
// random2()
// random2()
///////////// 4x4 array

/////////// pushing divs into array
$("div.box-" + 0 + 0 + "").html(2)
$("div.box-" + 0 + 1 + "").html(2)
$("div.box-" + 0 + 2 + "").html(2)
$("div.box-" + 0 + 3 + "").html(2)
// console.log(board)


var board = [];
for (var i = 0; i < z; i++) {
    board[i] = [];
    for (var j = 0; j < z; j++) {
        board[i][j] = 0;
    }
}


function pushToBoard() {
    for (let i = 0; i < z; i++) {
        for (let j = 0; j < z; j++) {
            board[i][j] = Number($("div.box-" + i + j + "").html())

        }
    }
}


pushToBoard()


function scoreboard() {
    var score = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            score += board[i][j] << 0;


        }
    }
score = score+2
    $("div.box-score").html("Score: " + score)
}

function filter(){
    var filtered0 = board[0].filter(Boolean);
      var filtered1 = board[1].filter(Boolean);
      var filtered2 = board[2].filter(Boolean);
      var filtered3 = board[3].filter(Boolean);
      board = []
    
      board.push(filtered0);
      board.push(filtered1);
      board.push(filtered2);
      board.push(filtered3);
      }

function command() {
    random2()
    scoreboard()
    pushToBoard()
}


      console.log(board)
$(document).ready(function () {
    $("body").keydown(function (key) {
        //left
        if (key.which == 37) {
            
            for (i = 0; i < z; i++) {
                for (j = 0; j < z; j++) {
                    if ((board[i][j] == board[i][j + 1]) || (board[i][j] < 2)) {
                        // console.log(board[i][j])
                        // console.log(board[i][j + 1])
                        filter()
                        board[i][j] = board[i][j] + board[i][j + 1]
                        filter()
                        board[i][j + 1] = board[i][j + 2]
                        filter()
                        // board[i][j] = Number("")
                        $("div.box-" + i + j + "").html(board[i][j])
                        filter()
                        $("div.box-" + i + (j + 1) + "").html(0)
                        filter()
                    }
                    

                }
                

            }
            
            
           

        }
          filter()
          scoreboard()
          pushToBoard()
          console.log(board)
        
        //right
        if (key.which == 39) {



        }
        //up
        if (key.which == 38) {


        }
        //down
        if (key.which == 40) {
            

        }

    })

})

