/**
 * 作者:石木洪
 * 邮箱:shimh_w@yusys.com.cn
 * 时间:2018-01-20
 */
var win = $(window),$doc = $(document);
$.extend({
	/**
	 * 切换选项卡(shimh)
	 * 1.选项卡最高级需添加data-check;
	 * 2.被切换的模块父级需添加:data-box = "(选项卡的data-check名)";
	 * 3.data-check和data-box值保持一致;
	 * 自行在转换样式中添加名为active的class标签
	 */
	menuCheck:function (ev){
		var Element = ev.el || "[data-check]",
			list = ev.list || "li";
		$doc.on("click",Element+" "+list,function(){
			var _this = $(this),_index = _this.index(),//获取选项卡角标
				checkName = _this.parent().attr("data-check");//获取选项卡data-check
			_this.addClass("active").siblings().removeClass("active");//切换选项卡样式状态
			$("[data-box = "+checkName+"]").children().eq(_index)
			.addClass("active").siblings().removeClass("active");//切换内容区显隐状态
		})
	},
	/**
	 * 切换选项卡,嵌入式页面框架	shimh
	 * @path:在选项卡选项中(data-check的子集)添加点击后进入的页面路径
	 * (其他同上)
	 */
	menuCheckPage:function (ev){
		var Element = ev.el || "[data-check]",
			list = ev.list || "li";
		$doc.on("click",Element+" "+list,function(){
			var _this = $(this),_index = _this.index(),//获取选项卡角标
				_path = _this.attr("path"),//获取页面路径
				checkName = _this.parent().attr("data-check"),//获取选项卡data-check
				_chid_cont = $("[data-box = "+checkName+"]").children().eq(_index);//获取对应内容区box
			_path ? openPage() : alert("该选项卡暂未配置页面!");
			function openPage(){
				_this.addClass("active").siblings().removeClass("active");//切换选项卡样式状态
				_chid_cont.children().length == 0 ? thisLoad() : "";
				function thisLoad(){
					_chid_cont.load("./html/"+_path+".html",function(){
						$.getScript("./js/controllers/"+_path+".js");
					});
				}
				_chid_cont.addClass("active").siblings().removeClass("active");//切换内容区显隐状态
			}
		})

		//初始化选项卡
		var activeDom = $doc.find(Element+" [class*='active']"),
			activePath = activeDom.attr("path"),
			activeIndex = activeDom.index(),
			activeName = $doc.find(Element).attr("data-check"),
			activeCont = $("[data-box = "+activeName+"]").children().eq(activeIndex);
		activeCont.load("./html/"+activePath+".html",function(){
			$.getScript("./js/controllers/"+activePath+".js");
			$("[data-check]").find("[class*='active']").click();
			$.pageHeight();
			
		}).addClass("active");


	},
	//自适应页面
	pageHeight:function (){
		var dex_h = -100;//整体微调整个项目的最低高度
		var _height = win.height(),
			_width = win.width();
		var minHeight = 100, //这里调节自适应的最低高度(这只是一个微调值,不是高度值);
			minWidth = 645;//这里调节自适应的最低宽度(这只是一个微调值,不是宽度值);
		//首页
		var main_h = 164,
			min_main_h = 362;
		var wth_main = _width - 100 - 2 >= 1140 ? (_width - 100 - 2) : 1140,
			hei_main = _height - main_h >= (min_main_h - dex_h) ? (_height - main_h) : (min_main_h - dex_h);
//			hei_cont = $(".set_cont").parent().height() - $(".title>.txt").height() -20;
		$("[data-page=main]").height(hei_main+"px").width(wth_main+"px");
//		$(".set_cont").height(hei_cont+"px");
		//外呼

		var hei_menu = _height - minHeight - 56 >= (370 - dex_h) ? (_height - minHeight - 56) : (370 - dex_h),
			hei_leftBox = _height - minHeight - 261 >= (166 - dex_h) ? (_height - minHeight - 261) : (166 - dex_h),
			hei_rightBox = _height - minHeight - 64 >= (362 - dex_h) ? (_height - minHeight - 64) : (362 - dex_h),
			wth_rightBox = _width - minWidth >= 600? (_width - minWidth) : 600;
		$(".cont_menu").height(hei_menu+"px");
		$(".msgCont").height((hei_leftBox-128)+"px");//选项卡内容区
		$(".right_Checkbox").height(hei_rightBox+"px").width(wth_rightBox+"px");
	},
	//手动初始化选项卡
	loadPage:function(){
		$("[data-check]").find("[class*='active']").click();
		$.pageHeight();
	},
	/**
	 * 弹窗
	 * @param {Object} ev
	 * title:窗体的title(可选)
	 * content:可直接往弹窗内嵌入html的DOM块(和path必须选一个)
	 * path:如果单独加载另外的页面内容,把页面路径放到此处(和content必须选一个)
	 * 说明:path用法:html文件夹下的文件夹名或路径/文件名 (文件名不带后缀)
	 */
	openWindow:function(ev){
		//为ID获取随机数
		var _Math = parseInt(Math.random()*9999999999),
			_date = new Date(),
			_year = _date.getFullYear(),
			_month = _date.getMonth()+1;
			_day =_date.getDate();
			_ranId = _year+''+_month+''+_day+''+_Math;
		//打开window窗核心方法
		layer.open({
		  title:ev.title,
		  type: 1,
		  skin: 'layui-layer-rim', //加上边框
		  area: ['80%', '600px'], //宽高
		  content: '<div id="openWindowBox_'+_ranId+'">'+ ev.content +'</div>'
		});
		if(ev.path){
			$("#openWindowBox_"+_ranId).load("./html/"+ev.path+".html",function(){
				$.getScript("./js/controllers/"+ev.path+".js");
			});
		}
			
	}
});
$(function(){
	$.core = $.core || {};
	$.extend($.core,{
		ajax:function(ev){
			var _url = ev.url,
				type = ev.type || "POST",
				dataType = ev.dataType || "html",
				data = ev.data || {},
				success = ev.success,
				_error = ev.error;
			$.ajax({
			  	type:type,
			  	url:_url,
			  	dataType:dataType,
			   	data:data,
			   	success:function(data){
			   		if(typeof success == "function"){
			   			success(data);
			   		}
			   	},
			   	error:function(xhr, type, errorThrown){
			   		if(typeof _error == "function"){
			   			_error(xhr);
			   		}
			   	}
			})
		}
	})
});

$(function(){
	//执行切换选项卡
	$.menuCheckPage({el:"[data-check]"});
	//监听窗口动态调整页面高度
	(function(){
		$.pageHeight();
		win.resize(function() {
			$.pageHeight();
		});
	})()

	
});