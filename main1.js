
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
function random2 (){
    let i = Math.floor(Math.random() * z)
    let j = Math.floor(Math.random() * z)

        if ( $("div.box-"+i+j+"").html() < 2){
            $("div.box-"+i+j+"").html(2)
            
        } else {
            random2()
        }
} 

var board = [];
for (var i = 0; i < z; i++) {
    board[i] = [];
    for (var j = 0; j < z; j++) {
        board[i][j] = 0;
    }
}


function pushToBoardLR() {
    for (let i = 0; i < z; i++) {
        for (let j = 0; j < z; j++) {
            if (board[i][j] >= 0){
            board[i][j] = Number($("div.box-" + i + j + "").html())
            }
        }
    }
}

function pushToBoardTD() {
    for (let i = 0; i < z; i++) {
        for (let j = 0; j < z; j++) {
            if (newBoard[i][j] >= 0){
            newBoard[i][j] = Number($("div.box-" + i + j + "").html())
            }
        }
    }
}



function pushToGameLR (){
for (i = 0; i <z; i++) {
      for (j = 0; j <z; j++) {
        $("div.box-"+i+j+"").html(board[i][j])
     }}}


     function pushToGameTD (){
        for (i = 0; i <z; i++) {
              for (j = 0; j <z; j++) {
                $("div.box-"+i+j+"").html(newBoard[i][j])
             }}}

function scoreboard() {
    var score = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            score += board[i][j] << 0;


        }
    }
    $("div.box-score").html("Score: " + score)
}
// scoreboard()

function slideRight(row) {
    let arr = row.filter(val => val);
    let missing = z - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
  }
  function slideLeft(row) {
    let arr = row.filter(val => val);
    let missing = z - arr.length;
    let zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);
    return arr;
  }


  function combineRight(row) {
    for (let i = z-1; i >= 1; i--) {
      let a = row[i];
      let b = row[i - 1];
      if (a == b) {
        row[i] = a + b;
       let score = []
        score += row[i];
        row[i - 1] = 0 ;
      }
    }
    return row;
  }
  function combineLeft(row) {
    for (let i=0; i<z; i++) {
      let a = row[i];
      let b = row[i + 1];
      if (a == b) {
        row[i] = a + b;
       let score = []
        score += row[i];
        row[i + 1] = 0 ;
      }
    }
    return row;
  }
  
  

function operate(row) {
    row = slide(row);
    row = combine(row);
    return row;
  }
  function operate2() {
    pushToGameLR ()
            random2()
            pushToBoardLR()
            scoreboard()
    
  }


let newBoard = [ [],[],[],[] ]
function rotateBoard(board) {
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
         newBoard[i][j] = board[j][i];
      }
    }
    return newBoard;
  }

  function rotateBack(newBoard) {
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        board[i][j] = newBoard[j][i];
      }
    }
    return board;
  }
$(document).ready(function () {
    $("body").keydown(function (key) {
        //left
        if (key.which == 37) {
            
            for (i = 0; i <z; i++) {
                board[i]=slideLeft(board[i])
                board[i]=combineLeft(board[i])
                
            }
            operate2()
            
        }
          
        
        //right
        if (key.which == 39) {

            for (i = 0; i <z; i++) {
                board[i]=slideRight(board[i])
                board[i]=combineRight(board[i])
                
            }
            operate2()
            
        }
          
        //up
        if (key.which == 38) {
            
            rotateBoard(board)
            for (i = 0; i <z; i++) {
                newBoard[i]=slideLeft(newBoard[i])
                newBoard[i]=combineLeft(newBoard[i])
                rotateBack(newBoard)
                
            }
            pushToGameLR ()
            random2()
            pushToBoardLR()
            scoreboard()
        }
        //down
        if (key.which == 40) {
            

            rotateBoard(board)
            for (i = 0; i <z; i++) {
                newBoard[i]=slideRight(newBoard[i])
                newBoard[i]=combineRight(newBoard[i])
                rotateBack(newBoard)
                
            }
            pushToGameLR ()
            random2()
            pushToBoardLR()
            scoreboard()
        }

    })

})

