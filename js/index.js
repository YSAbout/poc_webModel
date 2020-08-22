$(function(){
	$("#userClose").on("click",function(){
		confirm("您确定要退出吗?",function(){
			alert("好的,您已退出!");
		})
		
	})
	
	$("#callSure").on("click",function(){
		$("#content").append("<div class='gethtml'></div>",function(){
			 $(this).load("./js/controllers/new.html",function(){
				$.getScript("./js/controllers/new.js")
			});
		}); 
	})
	$("#xian").on("click",function(){
		    $.openWindow({
		    	title:"弹窗信息",
		    	content:"asfasd"
		    });
	})
	$("#jie").on("click",function(){
		localStorage.setItem('aaa', 'asdasd');
		    $.openWindow({
		    	title:"弹窗信息",
		    	path:"call/userMsg"
		    });
	})
	
	
	var call = document.getElementById("call");
	call.onclick = function (){
		
		
		$.ajax({
		   type:"POST",
		   url:"http://192.168.246.12:9080/system.do",
		   dataType:"json",
		   data:{
			   "frameworkActionId":"getTaskInfo",
			   "dataBean.task.agent_id":"2"
		  		},
		   success:function(msg){
			alert(JSON.stringify(msg));
		   },
		   error:function (XMLHttpRequest, textStatus, errorThrown) {
			    
			    alert("11111");
			} 
		});
	};
	

	
	
	
});
