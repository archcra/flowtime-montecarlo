 // Define how many sections, with numbers indicated
 // the rows in that section(column);
 var allPages = [];


 var sectionStartHtml = '<div class="ft-section" data-id="section-';
 var divEndHtml = '</div>';
 var flowtimeHtml = "";
 var pageHtml = '<div class="ft-page"></div>';

 var sections = slidePages;
 for (var i = 0; i < sections.length; i++) {
   var divStartHtml = sectionStartHtml + i + '">';
   var sectionHtml = divStartHtml;

   for (var j = 0; j < sections[i].length; j++) {
     sectionHtml += pageHtml;
   }
   sectionHtml += divEndHtml;
   flowtimeHtml += sectionHtml;
 }

 //将两维数据扁平化 - 变为一维
 // http://stackoverflow.com/questions/14824283/convert-a-2d-javascript-array-to-a-1d-array
 var separatedPages = [];
 for (var i = 0; i < slidePages.length; i++) {
   separatedPages = separatedPages.concat(slidePages[i]);
 }

 var separatedPagesWrapped = separatedPages.map(function(value, index) {
   return {
     index: index,
     value: value
   };
 });

 function readFile(item, callback) {
   $.get(item.value, function(data) {
     var pages = $(".ft-page");
     pages[item.index].innerHTML = data;
     callback(null, null);
   });
 }

 function navigationHandler(e) {
   // Docs from here: https://github.com/marcolago/flowtime.js
   // 这个事件用于执行为特定页面执行的脚本-因为直接在页面(slide)中加脚本不被执行
   var page = 's' + e.sectionIndex + 'p' + e.pageIndex;
   switch (page) {
     case "s0p0":

       break;


     default:
       break;
   }
 }

 $(document).ready(function() {
   // Set the title
   document.title = slideTitle;

   $(".flowtime")[0].innerHTML = flowtimeHtml;
   allPages = $(".ft-page");
   async.map(separatedPagesWrapped, readFile, function(err, results) {
     Flowtime.init();
     // Configuration API test
     Flowtime.showProgress(true);
     Flowtime.parallaxInPx(true);
     Flowtime.scrollTheSection(true);
     Flowtime.gridNavigation(false);

     // Flowtime.fragmentsOnSide(true);
     Flowtime.fragmentsOnBack(true);
     Flowtime.start();

     // 加载Prism
     prism_1();
     setupPrism();
     prism_2();
     prism_3();

     var event = new Event('PrismHighlight');
     // Dispatch the event.
     document.dispatchEvent(event);

     Flowtime.onNavigation(navigationHandler);

   });
 });
