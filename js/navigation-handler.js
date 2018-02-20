function navigationHandler(e) {
  // Docs from here: https://github.com/marcolago/flowtime.js
  // 这个事件用于执行为特定页面执行的脚本-因为直接在页面(slide)中加脚本不被执行
  var page = 's' + e.sectionIndex + 'p' + e.pageIndex;
  console.log('in page: ', page);

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
         console.log(trials, directSamplingA(trials));
      });

      $('#s1p4_i1').val(1000);


      break;

    case "s5p6":
      console.log('in s5p6');
      initFlipping();
      break;

    case "s5p8": // secion 5 page 8,
      $('#c50s90').addClass('sticky-notes');
      break;

    case "s5p14":
      $('#c50s150ul01').addClass("osx-dock");
      console.log('class osx dock added.')

      break;

    case "s5p15":
      $(".fancybox-overlay fancybox-overlay-fixed").show();

      initHoveringGallery();
      initHovering();
      console.log('hovering gallery')

      break;

    case "s5p17":
      initFallingLeaves();
      console.log('in falling leaves')

      break;
    case "s11p0":
      initMatrixText();
      console.log('in initMatrixText')

      break;

    default:

      break;
  }
}
