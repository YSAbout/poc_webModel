(function($){
	$.ajax({
	   type:"POST",
	   url:"system.do?frameworkActionId=ajaxProductInfo",
	   dataType:"html",
	   data:{
	  		
	  		},
	   success:function(msg){
			var goldenTime = $("#goldenTime");
			goldenTime.html(msg);
			goldenTime.find("td>a").on("click",function(){
				var _href = $(this).attr("href");
				$.ajax({
					   type:"POST",
					   url:_href,
					   dataType:"html",
					   data:{
					  		
					  		},
					   success:function(msg2){
						   goldenTime.html(msg2);
					   }
				});
				
				
				
				return false;
			});
	   },
	   error:function (XMLHttpRequest, textStatus, errorThrown) {
		    
//		    alert("error了！");
		}
	});
})(jQuery);
