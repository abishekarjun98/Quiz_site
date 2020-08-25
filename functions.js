
var q_content=document.getElementById('q_content');

q_content.innerHTML=questions[0].question;


for (var i =1; i <= 3; i++) {

var label_index='option_text_'+i;

var opt=document.getElementById(label_index);

option_index="opt_"+i;

opt.innerHTML=questions[0][option_index];
	
	}
