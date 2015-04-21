$(document).ready(function(){
	$("#sendEmailLink").click(function(){
		getExtra();
	});
	$('#navbar').followTo($("#main_container").offset().top -40);
    var waypoint = new Waypoint({
      element: document.getElementById('educationInfo'),
      handler: function(direction) {
        startCounters();
      },
      offset: 200
    })
});

function getExtra(){
	var base = "mailto:sayalvarun@gmail.com?";
	var subjectBase = "subject=";
	var bodyBase = "&body="
	var modalSubjectText = $("#modalSubject").val().split(' ').join('%20');
	var modalBodyText = $("#modalBody").val().split(' ').join('%20');
	base = base + subjectBase + modalSubjectText + bodyBase + modalBodyText;
	$("#sendEmailLink").attr('href',base);
}

function startCounters(){
    $({countNum: $('#honSize').text()}).animate({countNum: 30}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#honSize').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#honSize').text(this.countNum);
      }
    });

    $({countNum: $('#csGPA').text()}).animate({countNum: 79}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#csGPA').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#csGPA').text(this.countNum);
      }
    });

    $({countNum: $('#amsGPA').text()}).animate({countNum: 81}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#amsGPA').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#amsGPA').text(this.countNum);
      }
    });

    $({countNum: $('#scholLen').text()}).animate({countNum: 4}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#scholLen').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#scholLen').text(this.countNum);
      }
    });

    $({countNum: $('#uschSize').text()}).animate({countNum: 8}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#uschSize').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#uschSize').text(this.countNum);
      }
    });

    $({countNum: $('#gradYear').text()}).animate({countNum: 2016}, {
      duration: 4000,
      easing:'linear',
      step: function() {
        $('#gradYear').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#gradYear').text(this.countNum);
      }
    });
}

var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};


