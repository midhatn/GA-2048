// let board= [
//     [0,0],
//     [0,0]
// ]

// let rand_x = Math.floor(Math.random() * 2)
// let rand_y = Math.floor(Math.random() * 2)
// board[rand_x][rand_y] = 2
// $("div.box-topLeft").html(board[0][0])
// $("div.box-topRight").html(board[0][1])
// $("div.box-bottomLeft").html(board[1][0])
// $("div.box-bottomRight").html(board[1][1])

$("div.box-topLeft").html(2)
$("div.box-topRight").html(2)
$("div.box-bottomLeft").html(2)
$("div.box-bottomRight").html(2)
let topLeft = Number($("div.box-topLeft").html())
let topRight = Number($("div.box-topRight").html())
let bottomLeft = Number($("div.box-bottomLeft").html())
let bottomRight = Number($("div.box-bottomRight").html())


$(document).ready(function(){
$("body").keydown(function(key){
 

    //left
    if (key.which == 37) { 
       
        if (topLeft == topRight){
            topLeft = topLeft + topRight
            $("div.box-topLeft").html(topLeft)
        } 
        if (bottomLeft == bottomRight){
            bottomLeft = bottomLeft + bottomRight
            $("div.box-bottomLeft").html(bottomLeft)
        } 
    }
    //right
    if (key.which == 39) {

        if (topRight == topLeft){
            topRight = topRight + topLeft
            $("div.box-topRight").html(topRight)
        } 
        if (bottomRight == bottomLeft){
            bottomRight = bottomRight + bottomLeft
            $("div.box-bottomRight").html(bottomRight)
        } 
        
    }
    //up
    if (key.which == 38) {

        if (topLeft == bottomLeft){
            topLeft = topLeft + bottomLeft
            $("div.box-topLeft").html(topLeft)
        } 
        if (topRight == bottomRight){
            topRight = topRight + bottomRight
            $("div.box-topRight").html(topRight)
        } 
        
    }
    //down
	if (key.which == 40) {
        
        if (bottomLeft == bottomRight){
            bottomLeft = bottomLeft + bottomRight
            $("div.box-bottomLeft").html(bottomLeft)
        } 
        if (bottomRight == topRight){
            bottomRight = bottomRight + topRight
            $("div.box-bottomRight").html(bottomRight)
        } 
       
    } 
    
    })

})
