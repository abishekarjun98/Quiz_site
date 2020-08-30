
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
var input_txt=document.getElementById("txt_name");

q_box.style.display="none";

document.getElementById("status").style.display="none";
endgame.style.display="none";


//console.log(input_txt.value);

var curr_qnumber;
var score=0;
random_questions=[];
var time_sound = new Audio("assets/coin.mp3");
var wrong_sound= new Audio("assets/dead.wav");
var correct_sound= new Audio("assets/correct.wav");
var end_sound= new Audio("assets/clear.wav");

function clearscreen()
{
	
window.location.href = "startpage.html";
}

start();

function start()
{

while(random_questions.length<10)
 {		

createrand();

}
curr_qnumber=0;
showquestion(curr_qnumber);
document.getElementById("status").style.display="block";
}



function showquestion(q_number)
{


endgame.style.display="block"

q_box.style.display="block";

	//option_box.style.display="block";




var q_content=document.getElementById('q_content');

q_content.innerHTML=questions[givenewindex(q_number)].question;
q_num.innerHTML= q_number+1;
for (var i =1; i <=3; i++) {

var label_index='option_text_'+i;

var opt=document.getElementById(label_index);

option_index="opt_"+i;

opt.innerHTML=questions[givenewindex(q_number)][option_index];

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

if(questions[givenewindex(curr_qnumber)].opt_checked!=4)
{

var list =document.opt_box.option;

var option_chosen = questions[givenewindex(curr_qnumber)].opt_checked;

list[option_chosen].checked=true;

submit_btn.disabled=true;
}

else
{
	clear_opt();
	submit_btn.disabled=false;
}

if(questions[givenewindex(curr_qnumber)].score_alloted==1)
{
document.getElementById("status").src="assets/correct.png";
display_message.innerHTML="That's a correct Answer :)";
callempty();

}
else if(questions[givenewindex(curr_qnumber)].score_alloted==0)
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

//console.log(questions[curr_qnumber].score_alloted+"alloted");



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
		questions[givenewindex(curr_qnumber)].opt_checked=checked_option;
		if(checked_option==questions[givenewindex(curr_qnumber)]["correct"])
		{
			//if(questions[curr_qnumber].score_alloted==2)
			
			score++;

			//score_board.innerHTML=score;
			questions[givenewindex(curr_qnumber)].score_alloted=1;
			document.getElementById("status").src="assets/correct.png";
			display_message.innerHTML="That's a correct Answer :)";
			var btn_id_crct="btn"+curr_qnumber;
			document.getElementById(btn_id_crct).style.backgroundColor="green";
			correct_sound.play();
			callcorrect();
			
		}
		else{
			questions[givenewindex(curr_qnumber)].score_alloted=0;
			document.getElementById("status").src="assets/wrong.png";
			display_message.innerHTML=" Sorry, Wrong Answer :( ";
			var btn_id_wrong="btn"+curr_qnumber;
			document.getElementById(btn_id_wrong).style.backgroundColor="red";
			wrong_sound.play();
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

creatnav();
//showquestion(1);
function change(value)
 {

curr_qnumber=value;
showquestion(curr_qnumber);

var str= "btn"+value;

//document.getElementById(str).style.font-weight="bold";


 }

function creatnav()
{
for(var i = 0; i <=9 ; i++)
 {    
                  let btn =document.createElement("button");
                
                		var j;
                       j= i+1;
                      var t = document.createTextNode(j);
                      	btn.setAttribute("class","navbar");
                      	btn.setAttribute("ID","btn"+i);
                       btn.appendChild(t);
                       
                       btn.setAttribute("onclick","change("+i+")");

                       var abc= document.getElementById('nav');
                       abc.appendChild(btn);

                      
 
}
}

function callwrong() {
	
	var rand1 =Math.floor(Math.random() * 6); 
	//option_box.style.display="none"
	meme.src=wrongarray[rand1];

}
function callcorrect()
{
	var rand2 =Math.floor(Math.random() * 6); 
	//option_box.style.display="none"
	meme.src=correctarray[rand2];

}
function callempty()
{
meme.src="assets/empty.png";
}

function DisplayResult()
{

var User_name = localStorage.getItem("U_name");
alert("User_name:"+User_name+"\n"+"Total Correct Answers:"+score+"\n"+"Total Attended questions:"+ questions_attempted);


const score_obj = {
    u_name:User_name ,
    Score:score
  
  };

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];	
  highScores.push(score_obj);

  highScores.sort((a,b)=> b.Score - a.Score);
  highScores.splice(10);
	 localStorage.setItem("highScores", JSON.stringify(highScores));



//clearscreen();
}


//for (var j = 0; j < 10; j++)
 
var presenceflag;
function createrand()
{

console.log("called");
	
	var rand_num =Math.floor(Math.random() * 10); 

	if(random_questions.length==0)
	{
		random_questions.push(rand_num);
		
	}
	else
	{
	
		presenceflag=0;
		for (var i =0; i<random_questions.length; i++) {
			
			if(rand_num==random_questions[i])
			{
				presenceflag=1;
			}
		}

		if(presenceflag==0)
		{
			random_questions.push(rand_num);
		}
	}

}


	

function givenewindex(num)
{

	return random_questions[num];
}

var timepassed=60;

function begintimer()
{
  document.getElementById("timer").innerHTML=timepassed;
  if(timepassed>0)
  {
  //timepassed--;
  //time_sound.play();
}
else
{
	 clearInterval(timer);
	 //end_sound.play();
	 //DisplayResult();

}
                
}
var timer= setInterval(begintimer,1000);
