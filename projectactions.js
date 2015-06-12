
$(document).ready(function(){
	$("#chatbox").hide();
 	$("#chaton").click(function(){
		$("#chatbox").fadeToggle();

	});
	$("#post").keypress(function(ev){
		if(ev.which==13)
		{
			var pst=document.getElementById('post');
		    if(pst.value==""| pst.value==null)return;
			var spn = document.createElement('p');
			spn.innerHTML = pst.value;
			pst.value="";
			spn.className="msg";
			document.getElementById("msg1").appendChild(spn);
			$("#msg1").animate({scrollTop: $(this).scrollHeight()},5000);
		}
	});
});

