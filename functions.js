



var qbox= document.getElementById('q_box');
var start_btn=document.getElementById('start_btn');
var score_board=document.getElementById("score_display");
var sub_btn=document.getElementById("submit_btn");
var status=document.getElementById("status");
var q_num=document.getElementById("q_num");

//var input_txt=document.getElementById("txt_name");

q_box.style.display="none";

document.getElementById("status").style.display="none";

var curr_qnumber;
var score=0;


function start()
{

curr_qnumber=0;
showquestion(curr_qnumber);
document.getElementById("status").style.display="block";

}


function showquestion(q_number)
{

//clear_opt();
q_box.style.display="block";
start_btn.style.display="none";
//input_txt.style.display="none";
console.log(input_txt.value);

console.log(questions[curr_qnumber].opt_checked)

var q_content=document.getElementById('q_content');

q_content.innerHTML=questions[q_number].question
q_num.innerHTML= q_number+1;
for (var i =1; i <=3; i++) {

var label_index='option_text_'+i;

var opt=document.getElementById(label_index);

option_index="opt_"+i;

opt.innerHTML=questions[q_number][option_index];

}

var prev=document.getElementById("prev_btn");

var nxt=document.getElementById("nxt_btn");
if(q_number==0)
{
	prev.disabled=true;
}
else
{
	prev.disabled=false;
}
if(q_number==2)
{
	nxt.disabled=true;
}
else
{
	nxt.disabled=false;
}

if(questions[curr_qnumber].opt_checked!=4)
{

var list =document.opt_box.option;

var option_chosen = questions[curr_qnumber].opt_checked;

list[option_chosen].checked=true;

submit_btn.disabled=true;
}

else
{
	clear_opt();
	submit_btn.disabled=false;
}

if(questions[curr_qnumber].score_alloted==1)
{
document.getElementById("status").src="assets/correct.png";

//q_box.style.backgroundColor="green";

}
else if(questions[curr_qnumber].score_alloted==0)
{
document.getElementById("status").src="assets/wrong.png";
//q_box.style.backgroundColor="red";
}
else{
status.innerHTML="didnt answer";	
q_box.style.backgroundColor="#eee";
document.getElementById("status").src="assets/empty.png";


}

console.log(questions[curr_qnumber].score_alloted+"alloted");



}

function next_question()
{
	curr_qnumber++;
	showquestion(curr_qnumber);
}

function prev_question()
{
	curr_qnumber--;
	showquestion(curr_qnumber);
}




function checkanswer()
{
	
var list =document.opt_box.option;

var checkflag=0;

for (var i = 0; i< list.length;  i++) {
	if(list[i].checked)
	{
		var checked_option=i;
		questions[curr_qnumber].opt_checked=checked_option;
		if(checked_option==questions[curr_qnumber]["correct"])
		{
			//if(questions[curr_qnumber].score_alloted==2)
			
			score++;
			score_board.innerHTML=score;
			questions[curr_qnumber].score_alloted=1;
			
		}
		else{
			questions[curr_qnumber].score_alloted=0;
		}
		checkflag=1;
	}

}

if(checkflag==0)
{
	alert("Choose an answer before clicking Submit");
}
}

function clear_opt()
{

var option_elements = document.getElementsByName("option");
   for(var i=0;i<option_elements.length;i++)
      {
      	option_elements[i].checked = false;
      }

     
/*
      if(questions[curr_qnumber].score_alloted==1)
      {
    	score--;
		score_board.innerHTML=score;
	     questions[curr_qnumber].score_alloted=0;
	
	}*/





}