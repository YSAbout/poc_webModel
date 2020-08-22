/**
 * 作者:石木洪
 * 邮箱:shimh_w@yusys.com.cn
 * 时间:2018-01-20
 */

$(function(){
	/***
	 * 1.把需要一起提交的表单元素放进Form内
	 * 2.form标签设置form-list,提交按钮设置form-btn,这两个值设置相同的任意值用以关联作用域
	 * 3.提交的接口放在form里的action里
	 * 4.input输入框设置提交传入的key字段ipt-key=,值为输入的值
	 */
	$(document).on("click","[form-btn]",function(){
		var _this = $(this),
			_btn = _this.attr("form-btn"),
			_form = $("[form-list="+_btn+"]"),
			_action = _form.attr("action"),
			_json = {},
			key_list = _form.find("[ipt-key]"),
			_str = "";
		key_list.each(function(e){
			var self = $(this),
				_key = self.attr("ipt-key"),
				_val = self.val();
				_json[_key] = _val ;
		})
		
	})
});
$.form = $.form || {};
$.extend($.form,{
	/**
	 * 查询出的值调用此方法,可直接给DOM赋值
	 * @param {Object} el:作用域范围的任意名称,对应DOM命名规范cont-list
	 * @param {Object} ev:以JSON形式传入的数据:key对应txt-key,value对应回显的值
	 */
	setForm:function(el,ev){
		var val;
		for(key in ev){
			val = ev[key];
			$("[cont-list="+el+"] [txt-key="+key+"]").html(val);
		}
	}
});


//$(function(){
//	$.form.setForm("asd",{"aa":"11","bb":"22","cc":"33"})
//});