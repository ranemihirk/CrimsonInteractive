$( document ).ready(function() {
    $('.tv-play').click(function(){
        $('.tv-main-video-overlay').hide();
        playPause();
    });

    $('#number').keyup(function () {
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
           this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });
    $('#success').hide();
    $('.tv-video-thumb-wrap').click(function(){
        //debugger;
        //var test = $(this).data("src");
        $("#tv-video").attr("src",$(this).data("src"));
        $('#tv-overlay-txt').html($(this).data("title"));

        $('.tv-play').click(function(){
            $('.tv-main-video-overlay').hide();
            playPause();
        });
        $('.tv-main-video-overlay').show();
    })
});

var myVideo = document.getElementById("tv-video"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
       return false;
    }else{
       return true;
    }
  }

  function onSubmit(){
    $( ".error" ).remove();
      var success = 0;

      if($('#name').val() == "")
      {
        $( "#name" ).after('<p class="error">Please enter name.</p>');
        success = 1;
      }

      if($('#university').val() == "")
      {
        $( "#university" ).after('<p class="error">Please enter university.</p>');
        success = 1;
      }

      if($('#number').val().length < 10)
      {
        $( "#number" ).after('<p class="error">Please enter valid number.</p>');
        success = 1;
      }

      if(!IsEmail($('#email').val()))
      {
        $( "#email" ).after('<p class="error">Please enter valid email.</p>');
        success = 1;
      }

    if(success == 0)
    {
        $('#success').show();
    }
  }

  