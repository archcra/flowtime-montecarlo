function initBoard() {
  var board = [];

  for (var i = 0; i < ROW_HEIGHT; i++) {
    // 这里一定要注意，emptyRow一定每次初始化，不能重用！否则会使这些行是一个对象，层改一行，其它都跟着改！这个甚至能产生console混乱（同一对象），即在修改前显示的是修改后的值（因为console显示的是地址，到看的时候，值已被改了！)
    var emptyRow = [];
    for (var j = 0; j < ROW_WIDTH; j++) {
      emptyRow.push(' ');
    }
    board.push(emptyRow);
  }

  return board;
}

var board = initBoard();
var player = 'X';

var canvas ;
var context ;

var canvasSize = 500;
var sectionSize = canvasSize / 3;



function startTicTacToe(){
  canvas = document.getElementById('tic-tac-toe-board');
  context = canvas.getContext('2d');



  canvas.width = canvasSize;
  canvas.height = canvasSize;

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.translate(0.5, 0.5);

  drawLines(10, lineColor);


  canvas.addEventListener('mouseup', function(event) {


    var canvasMousePosition = getCanvasMousePosition(event);
    // addPlayingPiece(canvasMousePosition);
    var position = getPosition(canvasMousePosition);

    setBoard(position, player);
    drawBoard();
    player = getOpponent(player);

    // Make some waiting ...
    engineMove(player);
    drawBoard();
    player = getOpponent(player);

  });


  engineMove(player);
  drawBoard();
  player = getOpponent(player);
}
