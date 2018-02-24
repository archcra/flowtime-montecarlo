function navigationHandler(e) {
  // Docs from here: https://github.com/marcolago/flowtime.js
  // 这个事件用于执行为特定页面执行的脚本-因为直接在页面(slide)中加脚本不被执行
  var page = 's' + e.sectionIndex + 'p' + e.pageIndex;
  console.log('Now in page: ', page);

  // document.getElementById('c05s160div01').style.display = 'none';
  $(".fancybox-image").hide();
  var e = $(".fancybox-image");
  switch (page) {
    case "s0p5":
      console.log('基本排序算法：冒泡法，二分法，插入法')
      console.log('基本搜索算法：深度优先搜索、广度优先搜索')


      break;

    case "s1p4":
      // $( '#sb-container' ).swatchbook(); // Basic modernizr

      $('#s1p4-btn1').click(function() {
        var trials = $('#s1p4_i1').val();
        var result = directSamplingA(trials)
        $('#s1p4_i2').val(result);
      });

      $('#s1p4_i1').val(1000);


      break;

    case "s3p5":

      $('#s3p5-btn1').click(function() {
        var trials = $('#s3p5_i1').val();
        var delta = $('#s3p5_i2').val();

        var result = markovChainSamplingA(trials, delta)
        $('#s3p5_i3').val(result);

      });

      $('#s3p5_i1').val(1000);
      $('#s3p5_i2').val(0.1);


      break;

    case "s6p0":

      startTicTacToe();
      break;


    case "s6p7":
      $('#s6p3_trials').val(1000);
      $('#s6p3_change').val('1,9,10');
      $('#s6p3_sum').val(18);


      $('#s6p3_play').click(function() {
        var change = $('#s6p3_change').val();
        var total = $('#s6p3_sum').val();

        var command1 = 'position ' + change + ' ' + total;
        var response = find_change_engine.handleCommand(command1);

        var moves = [];
        while (response.bestmove != -1) {
          log(response.info); // 显示运行信息
          moves.push(response.bestmove);
          total = total - response.bestmove;
          command1 = 'position ' + change + ' ' + total;
          response = find_change_engine.handleCommand(command1);
        }
        $('#s6p3_result').val(moves);

      });


      $('#clearLogButton').click(function() {
        $("#logText").html("> Begin log for MCTS ...<br>");
      });

      break;

    case "s8p4":
      drawLineChart('s8p4_mountNode', "data/changGroup.json");

      break;

    default:

      break;
  }
}
