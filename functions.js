



var qbox= document.getElementById('q_box');

var start_btn=document.getElementById('start_btn');

var score_board=document.getElementById("score_display");

q_box.style.display="none";

var curr_qnumber;
var score=0;

function start()
{

curr_qnumber=0;
showquestion(curr_qnumber);
}


function showquestion(q_number)
{

q_box.style.display="block";
start_btn.style.display="none";

var option_elements = document.getElementsByName("option");
   for(var i=0;i<option_elements.length;i++)
      option_elements[i].checked = false;


var q_content=document.getElementById('q_content');

q_content.innerHTML=questions[q_number].question;
for (var i =1; i <= 3; i++) {

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
		var opt_checked=i;
		if(opt_checked==questions[curr_qnumber]["correct"])
		{

			score++;
			score_board.innerHTML=score;
			
		}
		checkflag=1;
	}

}

if(checkflag==0)
{
	alert("Choose an answer before clicking Submit");
}





}