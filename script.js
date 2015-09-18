/*$(document).ready(function(){
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
}); */






$("p.projects_title").mouseenter(
        function(){
            $("#projects_img_hover").css("opacity", "1").css("transition","0.5sec");
    });
    
    $("p.projects_title").mouseleave(
        function(){
            $("#projects_img_hover").css("opacity", "0");
    });



/*

  var $bubble = $('#bubble');
  //var $groups = $(groups.join(',')).css('opacity', 0.5);

  //for(var i = 0; i < groups.length; i++) {
  for(var id in groups) {
    //var id = groups[i];
    console.log(id);
    var group = groups[id];
    var $group = $('#' + id);
        $group.mouseenter(function() {
              console.log('in');
              var $this = $(this);
              var id = $this.attr('id').replace('#', '');
              $this.css('opacity', 1);

              var html = '<img src="images/' + id + '.jpg"><p>' + groups[id].text + '</p>';
              $bubble.html(html); // change content of the bubble
              $bubble.toggleClass('show');
        })

    
    
    
    .mouseout(function() {
      console.log('out');
      $(this).css('opacity', 0.5);
      $bubble.toggleClass('show');
      $bubble.html('');
    })
    .mousemove(function() {
      var offset = 12;
      $bubble.css({top: event.pageY + offset, left: event.pageX + offset});
    });
  }
});

/*