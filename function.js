
var qbox= document.getElementById('q_box');
var start_btn=document.getElementById('start_btn');
var score_board=document.getElementById("score_display");
var sub_btn=document.getElementById("submit_btn");
var status=document.getElementById("status");
var q_num=document.getElementById("q_num");

var display_message=document.getElementById("message");
var meme=document.getElementById("meme");

var option_box =document.getElementById("option_box");

var endgame=document.getElementById("endgame");
//var input_txt=document.getElementById("txt_name");

q_box.style.display="none";

document.getElementById("status").style.display="none";
endgame.style.display="none";


var curr_qnumber;
var score=0;

function clearscreen()
{
q_box.style.display="none";

document.getElementById("status").style.display="none";	
start_btn.style.display="block";
meme.style.display="none";
endgame.style.display="none";
}

function start()
{

curr_qnumber=0;
showquestion(curr_qnumber);
document.getElementById("status").style.display="block";


}


function showquestion(q_number)
{

endgame.style.display="block"
console.log(q_number);
q_box.style.display="block";
start_btn.style.display="none";
	//option_box.style.display="block";




var q_content=document.getElementById('q_content');

q_content.innerHTML=questions[q_number].question;
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
if(q_number==9)
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
display_message.innerHTML="That's a correct Answer :)";
callempty();

}
else if(questions[curr_qnumber].score_alloted==0)
{
document.getElementById("status").src="assets/wrong.png";
display_message.innerHTML=" Sorry, Wrong Answer :( ";
callempty();

}
else{

q_box.style.backgroundColor="#eee";
document.getElementById("status").src="assets/empty.png";
display_message.innerHTML="";
//meme.style.display="none";
callempty();
//console.log("calllef");



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



var questions_attempted=0;
function checkanswer()
{
	
var list =document.opt_box.option;

var checkflag=0;

for (var i = 0; i< list.length;  i++) {
	if(list[i].checked)
	{
		questions_attempted++;
		var checked_option=i;
		questions[curr_qnumber].opt_checked=checked_option;
		if(checked_option==questions[curr_qnumber]["correct"])
		{
			//if(questions[curr_qnumber].score_alloted==2)
			
			score++;

			//score_board.innerHTML=score;
			questions[curr_qnumber].score_alloted=1;
			document.getElementById("status").src="assets/correct.png";
			display_message.innerHTML="That's a correct Answer :)";
			callcorrect();
			
		}
		else{
			questions[curr_qnumber].score_alloted=0;
			document.getElementById("status").src="assets/wrong.png";
			display_message.innerHTML=" Sorry, Wrong Answer :( ";
			callwrong();
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


}

//creatnav();
//showquestion(1);

function creatnav()
{
for(var i = 0; i <=2 ; i++)
 {    
                  let btn =document.createElement("button");
                      //btn.classList.add("abcd");
                      var t = document.createTextNode(i);

             		      btn.style.background="light blue";
                       btn.appendChild(t);
                       //btn.onclick=showquestion(i);

                       var abc= document.getElementById('nav');
                       abc.appendChild(btn);

                      
/*
btn.onclick=function change()
 {


 }
 */
}
}

function callwrong() {
	
	var rand1 =Math.floor(Math.random() * 5); 
	//option_box.style.display="none"
	meme.src=wrongarray[rand1];

}
function callcorrect()
{
	var rand2 =Math.floor(Math.random() * 5); 
	//option_box.style.display="none"
	meme.src=correctarray[rand2];

}
function callempty()
{
meme.src="assets/empty.png";
}

function DisplayResult()
{

alert("Total Correct Answers:"+score+"\n"+"Total Attended questions:"+ questions_attempted);
clearscreen();
}