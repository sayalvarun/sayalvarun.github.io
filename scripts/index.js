$(document).ready(function(){
	$("#sendEmailLink").click(function(){
		getExtra();

	});
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
