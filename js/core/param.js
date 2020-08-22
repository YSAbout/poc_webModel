/**
 * jQuery param - v1.0
 * auth: shenmq
 * E-mail: shenmq@yuchengtech.com
 * website: shenmq.github.com
 *
 */

(function($, undefined) {

	$.param = $.param || {};

	$.extend($.param, {

		//存款类型
		DEPOSIT_TYPE: {
			'0': '定期存款',
			'1': '活期存款'
		},
		//手机验证模式
		MODEID_TYPE: '000100',
		//手机app广告开关 首页是否加入广告页
		AD_SWITCH: false,
		SOFTPWD_SWITCH: false,
		SAVE_PERIOD: {
			'1-D': '一天通知存款',
			'7-D': '七天通知存款',
			'3-M': '三个月定期存款',
			'6-M': '六个月定期存款',
			'1-Y': '一年定期存款',
			'2-Y': '两年定期存款',
			'3-Y': '三年定期存款',
			'5-Y': '五年定期存款'
		},
		ACCOUNT_STATE: {
			'0': '正常',
			'1': '口头挂失',
			'2': '正式挂失',
			'4': '冻结',
			'5': '注销'
		},
		CERT_TYPE: {
			'0': '身份证 ',
			'1': '军官证',
			//'2': '户口簿',
			'3': '护照',
			'4': '返乡证',
			'5': '士兵证',
			'6': '台湾同胞来往内地通行证',
			'7': '临时身份证',
			'8': '外国人居留证',
			'9': '警官证',
			'A': '港澳居民来往内地通行证',
			'X': '其他证件',
		},
		DEPOSIT_SAVE: {
			'1-D': '101',
			'7-D': '107',
			'3-M': '203',
			'6-M': '206',
			'1-Y': '301',
			'2-Y': '302',
			'3-Y': '303',
			'5-Y': '305'
		},
		BALANCE_SHEET: [{
			value: 'HQ',
			text: '活期存款',
			balance: 0
		}, {
			value: 'DQ',
			text: '定期存款',
			balance: 0
		}, {
			value: 'TZ',
			text: '通知存款',
			balance: 0
		}, {
			value: '100',
			text: '个人贷款',
			balance: 0
		}, {
			value: '200',
			text: '公司贷款',
			balance: 0
		}, {
			value: '300',
			text: '银团贷款',
			balance: 0
		}, {
			value: '400',
			text: '垫款',
			balance: 0
		}, {
			value: '500',
			text: '贴现',
			balance: 0
		}, {
			value: '600',
			text: '委托贷款',
			balance: 0
		}, {
			value: '800',
			text: '贷款转让',
			balance: 0
		}, {
			value: '900',
			text: '保函',
			balance: 0
		}, {
			value: '1000',
			text: '贷易融资',
			balance: 0
		}, {
			value: '1100',
			text: '单位委托贷款',
			balance: 0
		}, {
			value: '1200',
			text: '委托贷款',
			balance: 0
		}],
		DEPOSIT_PERIOD: [{
			value: 3,
			text: '三个月'
		}, {
			value: 6,
			text: '六个月'
		}, {
			value: 12,
			text: '一年'
		}, {
			value: 24,
			text: '两年'
		}, {
			value: 36,
			text: '三年'
		}, {
			value: 60,
			text: '五年'
		}],
		Deposit_Type: {
			'1D': '一天通知存款',
			'7D': '七天通知存款',
			'3M': '三月定期存款',
			'6M': '六月定期存款',
			'1Y': '一年定期存款',
			'2Y': '二年定期存款',
			'3Y': '三年定期存款',
			'5Y': '五年定期存款'
		},
		account_kind_type: {
			'00': '借记卡',
			'01': '贷记卡（信用卡）',
			'02': '活期存折',
			'03': '活期一卡通',
			'04': '定期一本通',
			'05': '定期存单',
			'06': '贷款账户',
			'07': '他行账户',
			'08': 'E账户'
		},
		DEPOSIT_KIND: {
			"00": "普通活期",
			"01": "整存整取",
			"02": "定活两便",
			"03": "存本取息",
			"04": "零存整取",
			"05": "通知存款",
			"06": "教育储蓄",
			"07": "整存零取",
			"08": "协议存款",
			"09": "协定存款",
			"10": "通知理财",
			"11": "对公活期",
			"12": "对公整存整取",
			"13": "对公通知存款",
			"14": "对公活期保证金",
			"15": "对公定期保证金",
			"16": "对私活期保证金",
			"17": "对私定期保证金",
			"18": "同业活期存款",
			"19": "同业定期存款",
			"20": "同业通知存款",
			"21": "财政存款",
			"22": "对公理财",
			"23": "同业活期保证金",
			"24": "同业定期保证金",
			"25": "对私理财"
		},
		//核心账户状态翻译（大连农商）
		zhhuztai: {
			'A': '正常',
			'C': '销户',
			'D': '久悬户',
			'I': '转营业外收入',
			'F': '金额冻结',
			'E': '封闭冻结'

		},
		//跨行转账类型
		EXTERNAL_TRANSFER_TYPE: {
			'1': '实时转账',
			'2': '快速转账',
			'0': '行内转账'
		},
		TRANSFER_RESULT: {
			"90": "交易成功",
			"92": "核心转账失败",
			"99": "交易失败",
			"91": "交易失败",
			"95": "部分成功",
			"50": "银行处理中",
			"51": "交易处理中",
			"60": "预约处理中",
			"61": "预约被撤销",
			"70": "落地处理中",
			"71": "落地拒绝"
		},
		TRANSFER_TYPE: {
			"00300000": "行内转账",
			"00300120": "跨行转账",
			"01100100": "跨行转账",
			"00300100": "跨行转账"
		},
		CURRENCY_TYPE_CODE: {
			'01': '人民币',
			'14': '美元',
			'13': '港币',
			'38': '欧元',
			'27': '日元',
			'16': '卢布',
			'12': '英镑',
			'18': '新加坡元',
			'28': '加元',
			'29': '澳元',
			'87': '新西兰元'
		},
		//时间类型
		DateType_Code: {
			'D': '天',
			'M': '月',
			'Y': '年',
			'd': '天',
			'm': '月',
			'y': '年',
			'日': '天',
			'月': '月',
			'年': '年',
			'R': '其他'
		},

		//存款状态
		DEPOSIT_STATE: {
			'0': '正常',
			'1': '到期'
		},
		//贷款状态
		STATUS: {
			'01': '正常',
			'04': '逾期',
			'DZH': '呆账',
			'09':'非应计'
		},
		LOAN_TYPE: {
			'100': '个人贷款',
			'200': '公司贷款',
			'300': '银团贷款',
			'400': '垫款',
			'500': '贴现',
			'600': '委托贷款',
			'800': '贷款转让',
			'900': '保函',
			'1000': '贷易融资',
			'1100': '单位委托贷款',
			'1200': '个人委托贷款',
			'N1':'普通',
			'N2':'自助',
			'N3':'委托',
			'N4':'贴现',
			'2':'按揭',
			'N5':'小额'
		},
		CERTTYPE: { //核心证件类型
			'01': '身份证 ',
			'02': '军官证',
			'03': '户口簿',
			'04': '警官证',
			'05': '解放军士兵证',
			'06': '护照',
			'07': '港澳台居民通行证',
			'08': '解放军文职干部证',
			'16': '解放军离休干部荣誉证',
			'24': '军官退休证',
			'25': '文职干部退休证',
			'26': '军事院校学员证',
			'31': '武警士兵证',
			'33': '武警文职干部证',
			'34': '武警军官退休证',
			'35': '武警文职干部退休证',
			'52': '营业执照',
			'99': '其他(对公)'
		},
		ADDVALUE_CHANEL_FLAG: {
			'1101': 'PC渠道',
			'1201': '手机WAP',
			'0000': '全渠道'
		},
		//凭证状态类型
		VOUCHER_STATE_TYPE: {
			"0": "正常",
			"1": "正式挂失",
			"2": "作废",
			"3": "联动使用",
			"4": "口头挂失",
			"5": "抵质押",
			"6": "解押",
			"7": "待销毁",
			"B": "预制",
			"C": "待发",
			"D": "预制未打卡",
			"E": "事后未打卡",
			"F": "换卡未打卡",
			"G": "预销卡",
			"I": "已销毁",
			"J": "卡待销毁",
			"K": "预换卡",
			"N": "睡眠卡"
		},
		dzsyzhat: { //单式凭证使用状态
			'0': '正常',
			'1': '口头挂失',
			'2': '作废',
			'3': '联动使用',
			'4': '口头挂失',
			'I': '已销毁',
			'z': '注销'
		},
		/*生产版本*/
		BANK_TYPE: {
			'102': '中国工商银行',
			'103': '中国农业银行',
			'104': '中国银行',
			'105': '中国建设银行',
			'201': '国家开发银行',
			'202': '中国进出口银行',
			'203': '中国农业发展银行',
			'301': '交通银行',
			'302': '中信实业银行',
			'303': '中国光大银行',
			'304': '华夏银行',
			'305': '中国民生银行',
			'306': '广东发展银行',
			'307': '深圳发展银行',
			'308': '招商银行',
			'309': '兴业银行',
			'310': '上海浦东发展银行',
			'313': '城市商业银行',
			'315': '恒丰银行',
			'316': '浙商银行',
			'401': '城市信用合作社',
			'402': '农村信用合作社',
			'403': '国家邮政局邮政储汇',
			'501': '汇丰银行',
			'502': '东亚银行',
			'503': '南洋商业银行',
			'504': '恒生银行',
			'505': '中国银行（香港）有限公司',
			'506': '集友银行有限公司',
			'509': '星展银行（香港）有限公司',
			'510': '永亨银行有限公司',
			'531': '美国花旗银',
			'532': '美国银行有限公司',
			'561': '日本东京三菱银行',
			'562': '日本日联银行',
			'563': '日本三井住友银行',
			'564': '日本瑞穗实业银行',
			'565': '日本山口银行',
			'591': '韩国外换银行',
			'593': '韩国友利银行',
			'594': '韩国产业银行',
			'596': '韩国中小企业银行',
			'623': '新加坡星展银行',
			'651': '比利时联合银行',
			'661': '荷兰银行有限公司',
			'671': '英国渣打银行',
			'693': '法国东方汇理银行股份有限公司',
			'694': '法国东方汇理银行股份有限公司',
			'711': '德国德累斯登银行',
			'712': '德意志银行',
			'713': '德国商业银行',
			'741': '瑞士信贷第一波士顿银行',
			'761': '澳大利亚和新西兰银行集团',
			'781': '厦门国际银行',
			'782': '法国巴黎银行（中国）有限公司',
			'783': '平安银行有限责任公司',
			'787': '华一银行',
			'901': '中央国债登记结算有限责任公司',
			'902': '公开市场业务操作室',
			'903': '中国外汇交易',
			'904': '城市商业银行资金清',
			'905': '中国银联股份有限公司',
			'969': '(澳门地区)',
			'989': '(香港地区)'
		},
		BANK_TYPE_MERGE: {
			//'102':'中国工商银行'  ,
			//'103':'中国农业银行'  ,
			//'104':'中国银行'  ,
			//'105':'中国建设银行'  ,
			'201': '国家开发银行',
			'202': '中国进出口银行',
			'203': '中国农业发展银行',
			//'301':'交通银行'  ,
			//'302':'中信实业银行'  ,
			//'303':'中国光大银行'  ,
			//'304':'华夏银行'  ,
			//'305':'中国民生银行'  ,
			//'306':'广东发展银行'  ,
			//'307':'深圳发展银行'  ,
			//'308':'招商银行'  ,
			//'309':'兴业银行'  ,
			//'310':'上海浦东发展银行'  ,
			'313': '城市商业银行',
			//'315':'恒丰银行'  ,
			//'316':'浙商银行'  ,
			'401': '城市信用合作社',
			'402': '农村信用合作社',
			'403': '国家邮政局邮政储汇',
			'501': '汇丰银行',
			'502': '东亚银行',
			'503': '南洋商业银行',
			'504': '恒生银行',
			'505': '中国银行（香港）有限公司',
			'506': '集友银行有限公司',
			'509': '星展银行（香港）有限公司',
			'510': '永亨银行有限公司',
			'531': '美国花旗银',
			'532': '美国银行有限公司',
			'561': '日本东京三菱银行',
			'562': '日本日联银行',
			'563': '日本三井住友银行',
			'564': '日本瑞穗实业银行',
			'565': '日本山口银行',
			'591': '韩国外换银行',
			'593': '韩国友利银行',
			'594': '韩国产业银行',
			'596': '韩国中小企业银行',
			'623': '新加坡星展银行',
			'651': '比利时联合银行',
			'661': '荷兰银行有限公司',
			'671': '英国渣打银行',
			'693': '法国东方汇理银行股份有限公司',
			'694': '法国东方汇理银行股份有限公司',
			'711': '德国德累斯登银行',
			'712': '德意志银行',
			'713': '德国商业银行',
			'741': '瑞士信贷第一波士顿银行',
			'761': '澳大利亚和新西兰银行集团',
			'781': '厦门国际银行',
			'782': '法国巴黎银行（中国）有限公司',
			'783': '平安银行有限责任公司',
			'787': '华一银行',
			'901': '中央国债登记结算有限责任公司',
			'902': '公开市场业务操作室',
			'903': '中国外汇交易',
			'904': '城市商业银行资金清',
			'905': '中国银联股份有限公司',
			'969': '(澳门地区)',
			'989': '(香港地区)'
		},
		/*//demo演示版
		BANK_TYPE: {
			'103':'中国农业银行'  
		},*/
		USER_STATE_TYPE: {
			'0': '正常',
			'2': '临时冻结',
			'4': '永久冻结',
			'5': '撤销'
		},
		/*
		 *手续费缴纳方式
		 */
		DEDUCTTYPE: {
			'0': '卡内余额缴纳',
			'1': '积分抵扣',
			'2': '套餐抵扣',
			'3': '积分抵扣',
			'4': '免手续费'
		},
		LOAN_SUB_TYPE_ZBANK:{
			'101': '个人住房贷款',
			'102': '个人下岗失业贷款',
			'103': '个人经营贷款',
			'104': '个人消费贷款',
			'105': '个人助学贷款',
			'106': '卡易贷'
		},
		//还款方式，目前只有众邦使用
		REPAY_MODE: {
			'1': '等额本息',
			'2': '等额本金',
			'3': '按频率付息、任意本金计划',
			'4': '一次还本付息/前收息',
			'5': '按频率付息、一次还本'
		},
		//贷款子类型
		LOAN_SUB_TYPE: {
			'101': '农户抵质押消费贷款',
			'102': '农户保证消费贷款',
			'103': '农户信用消费贷款',
			'104': '农户抵质押经营贷款',
			'105': '农户保证经营贷款',
			'106': '农户信用经营贷款',
			'107': '农户住房贷款',
			'108': '个人抵质押消费贷款',
			'109': '个人保证消费贷款',
			'110': '个人信用消费贷款',
			'111': '个人抵质押经营贷款',
			'112': '个人保证经营贷款',
			'113': '个人信用经营贷款',
			'114': '个人住房贷款',
			'201': '单位抵质押贷款',
			'202': '单位信用贷款',
			'203': '单位保证贷款',
			'301': '银团贷款我行参与',
			'302': '银团贷款我行管理',
			'303': '银团贷款我行代管',
			'401': '银承垫款',
			'402': '保函垫款',
			'409': '其他垫款',
			'501': '银票直贴',
			'502': '转贴现(银票）',
			'503': '商票直贴',
			'504': '买入返售转贴现(银承)',
			'505': '卖出回购转贴现(银承)',
			'506': '再贴现(银票）',
			'508': '银票直贴协议付息',
			'509': '商票直贴协议付息',
			'601': '公司委托贷款',
			'602': '个人委托贷款',
			'701': '保函垫款',
			'702': '承兑垫款',
			'703': '信用证垫款',
			'801': '信贷资产转让'
		},
		//循环标志
		ISLOOP: {
			'Y': '是',
			'N': '否'
		},
		//注册状态
		PRO_STATE:{
				"6":"初审审核中",
				"7":"复审审核中",
				"8":"需要补件",
				"9":"拒绝",
				"0":"成功"
		},
		//各国国籍码表
		NATIONALITY_TYPE:{
			"ABW":"阿鲁巴",
			"AFG":"阿富汗",
			"AGO":"安哥拉",
			"AIA":"安圭拉",
			"ALB":"阿尔巴尼亚",
			"AND":"安道尔",
			"ANT":"荷属安的列斯",
			"ARE":"阿联酋",
			"ARG":"阿根廷",
			"ARM":"亚美尼亚",
			"ASM":"美属萨摩亚",
			"ATA":"南极洲",
			"ATF":"法属南部领土",
			"ATG":"安提瓜和巴布达",
			"AUS":"澳大利亚",
			"AUT":"奥地利",
			"AZE":"阿塞拜疆",
			"BDI":"布隆迪",
			"BEL":"比利时",
			"BEN":"贝宁",
			"BFA":"布基纳法索",
			"BGD":"孟加拉国",
			"BGR":"保加利亚",
			"BHR":"巴林",
			"BHS":"巴哈马",
			"BIH":"波斯尼亚和黑塞哥维那",
			"BLR":"白俄罗斯",
			"BLZ":"伯利兹",
			"BMU":"百幕大",
			"BOL":"玻利维亚",
			"BRA":"巴西",
			"BRB":"巴巴多斯",
			"BRN":"文莱",
			"BTN":"不丹",
			"BVT":"布维岛",
			"BWA":"博茨瓦纳",
			"CAF":"中非",
			"CAN":"加拿大",
			"CCK":"科科斯群岛",
			"CHE":"瑞士",
			"CHL":"智利",
			"CHN":"中国",//中国在这里(中华人民共和国)
			"CIV":"科特迪瓦",
			"CMR":"喀麦隆",
			"COD":"刚果民主共和国",
			"COG":"刚果",
			"COK":"库克群岛",
			"COL":"哥伦比亚",
			"COM":"科摩罗",
			"CPV":"佛得角",
			"CRI":"哥斯达黎加",
			"CUB":"古巴",
			"CXR":"圣诞岛",
			"CYM":"开曼群岛",
			"CYP":"塞浦路斯",
			"CZE":"捷克",
			"DEU":"德国",
			"DJI":"吉布提",
			"DMA":"多米尼加",
			"DNK":"丹麦",
			"DOM":"多米尼家共和国",
			"DZA":"阿尔及利亚",
			"ECU":"厄瓜多尔",
			"EGY":"埃及",
			"ERI":"厄立特里亚",
			"ESH":"西撒哈拉",
			"ESP":"西班牙",
			"EST":"爱沙尼亚",
			"ETH":"埃塞俄比亚",
			"FIN":"芬兰",
			"FJI":"斐济",
			"FLK":"马尔维纳斯群岛",
			"FRA":"法国",
			"FRO":"法罗群岛",
			"FSM":"密克罗尼西亚",
			"GAB":"加蓬",
			"GBD":"英国（独立领土公民、出国不用）",
			"GBN":"英国（海外国民，出国不用）",
			"GBO":"英国（海外公民，出国不用）",
			"GBP":"英国（保护公民，出国不用）",
			"GBR":"英国",
			"GBS":"英国（隶属，出国不用）",
			"GEO":"格鲁吉亚",
			"GHA":"加纳",
			"GIB":"直布罗陀",
			"GIN":"几内亚",
			"GLP":"瓜德罗普",
			"GMB":"冈比亚",
			"GNB":"几内亚比绍",
			"GNQ":"赤道几内亚",
			"GRC":"希腊",
			"GRD":"格林纳达",
			"GRL":"格陵兰",
			"GTM":"危地马拉",
			"GUF":"法属圭亚那",
			"GUM":"关岛",
			"GUY":"圭亚那",
			"HKG":"香港",
			"HMD":"赫德岛和麦克唐纳岛",
			"HND":"洪都拉斯",
			"HRV":"克罗地亚",
			"HTI":"海地",
			"HUN":"匈牙利",
			"IDN":"印度尼西亚",
			"IND":"印度",
			"IOT":"英属印度洋领土",
			"IRL":"爱尔兰",
			"IRN":"伊朗",
			"IRQ":"伊拉克",
			"ISL":"冰岛",
			"ISR":"以色列",
			"ITA":"意大利",
			"JAM":"牙买加",
			"JOR":"约旦",
			"JPN":"日本",
			"JTN":"约翰斯顿岛",
			"KAZ":"哈萨克斯坦",
			"KEN":"肯尼亚",
			"KGZ":"吉尔吉斯斯坦",
			"KHM":"柬埔寨",
			"KIR":"基里巴斯",
			"KNA":"圣基茨和尼维斯",
			"KOR":"韩国（南朝鲜）",
			"KWT":"科威特",
			"LAO":"老挝",
			"LBN":"黎巴嫩",
			"LBR":"利比里亚",
			"LBY":"利比亚",
			"LCA":"圣卢西亚",
			"LIE":"列支敦土登",
			"LKA":"斯里兰卡",
			"LSO":"莱索托",
			"LTU":"立陶宛",
			"LUX":"卢森堡",
			"LVA":"拉脱维亚",
			"MAC":"澳门",
			"MAR":"摩洛哥",
			"MCO":"摩纳哥",
			"MDA":"摩尔多瓦",
			"MDG":"马达加斯加",
			"MDV":"马尔代夫",
			"MEX":"墨西哥",
			"MHL":"马绍尔群岛",
			"MID":"中途岛",
			"MKD":"马其顿",
			"MLI":"马里",
			"MLT":"马耳他",
			"MMR":"缅甸",
			"MNG":"蒙古",
			"MNP":"北马里亚纳",
			"MOZ":"莫桑比克",
			"MRT":"毛里塔尼亚",
			"MSR":"蒙特塞拉特",
			"MTQ":"马提尼克",
			"MUS":"毛里求斯",
			"MWI":"马拉维",
			"MYS":"马来西亚",
			"MYT":"马约特",
			"NAM":"纳米比亚",
			"NCL":"新喀里多尼亚",
			"NER":"尼日尔",
			"NFK":"诺福克岛",
			"NGA":"尼日利亚",
			"NIC":"尼加拉瓜",
			"NIU":"纽埃",
			"NLD":"荷兰",
			"NOR":"挪威",
			"NPL":"尼波尔",
			"NRU":"瑙鲁",
			"NTZ":"中间地带",
			"NZL":"新西兰",
			"OMN":"阿曼",
			"PAK":"巴基斯坦",
			"PAN":"巴拿马",
			"PCN":"皮特凯恩群岛",
			"PER":"秘鲁",
			"PHL":"菲律宾",
			"PLW":"贝劳",
			"PNG":"巴布亚新几内亚",
			"POL":"波兰",
			"PRI":"波多黎各",
			"PRK":"朝鲜",
			"PRT":"葡萄牙",
			"PRY":"巴拉圭",
			"PST":"巴勒斯坦",
			"PYF":"法属菠利尼西亚",
			"QAT":"卡塔尔",
			"REU":"留尼汪",
			"ROM":"罗马尼亚",
			"RUS":"俄罗斯",
			"RWA":"卢旺达",
			"SAU":"沙特阿拉伯",
			"SDN":"苏丹",
			"SEN":"塞内加尔",
			"SGP":"新加坡",
			"SGS":"南乔治亚岛和南桑德韦奇岛",
			"SHN":"圣赫勒拿",
			"SJM":"斯瓦尔巴群岛",
			"SLB":"所罗门群岛",
			"SLE":"塞拉利昂",
			"SLV":"萨尔瓦多",
			"SMR":"圣马力诺",
			"SOM":"索马里",
			"SPM":"圣皮埃尔和密克隆",
			"SS":"塞班",
			"STP":"圣多美和普林西比",
			"SUR":"苏里南",
			"SVK":"斯洛伐克",
			"SVN":"斯洛文尼亚",
			"SWE":"瑞典",
			"SWZ":"斯威士兰",
			"SX":"锡金",
			"SF":"塞尔维亚",
			"SYC":"塞舌尔",
			"SYR":"叙利亚",
			"TCA":"特克斯和凯科斯群岛",
			"TCD":"乍得",
			"TGO":"多哥",
			"THA":"泰国",
			"TJK":"塔吉克斯坦",
			"TKL":"托克劳",
			"TKM":"土库曼斯坦",
			"TMP":"东帝汶",
			"TON":"汤加",
			"TTO":"特立尼达和多巴哥",
			"TUN":"突尼斯",
			"TUR":"土耳其",
			"TUV":"图瓦卢",
			"TWN":"台湾",
			"TZA":"坦桑尼亚",
			"UGA":"乌干达",
			"UKR":"乌克兰",
			"UMI":"美属太平洋各群岛",
			"UN":"联合国",
			"UNA":"联合国",
			"UNO":"联合国",
			"URY":"乌拉圭",
			"USA":"美国",
			"UZB":"乌兹别克斯坦",
			"VAT":"梵蒂冈",
			"VCT":"圣文森特和格林纳丁斯",
			"VEN":"委内瑞拉",
			"VGB":"英属维尔京群岛",
			"VIR":"美属维尔京群岛",
			"VNM":"越南",
			"VUT":"瓦努阿图",
			"WAK":"威克岛",
			"WLF":"瓦利斯和富图纳群岛",
			"WSM":"西萨摩亚",
			"XXA":"无国籍（无国籍人）",
			"XXB":"无国籍（难民）",
			"XXX":"无国籍（未声明国籍）",
			"YEM":"也门",
			"YUG":"南斯拉夫",
			"ZAF":"南非",
			"ZAR":"扎伊尔",
			"ZMB":"赞比亚",
			"ZWE":"津巴布韦",
			"ZZZ":"国籍不详"
		},
		getSelect: function(appName, selectCode, filter, blankSelect) {
			var html = "";

			var map = null;

			if(typeof(appName) === 'string') {
				map = $.param[appName];
			} else {
				map = appName;
			}

			if(!map) {
				alert("param: " + appName + " not defined!");
				return null;
			}
			if(blankSelect)
				html += "<option value=\"\">请选择</option>";

			for(var key in map) {
				var value = map[key];
				if(filter) {
					if(filter.include(key))
						continue;
				}
				if(selectCode && selectCode == key) {
					html += "<option value=\"" + key + "\" areaName=\"" + value + "\" selected=\"selected\">" + value + "</option>";
				} else {
					html += "<option value=\"" + key + "\" areaName=\"" + value + "\">" + value + "</option>";
				}
			}
			return html;
		},
		/**
		 * 根据类型名称 和id获取value
		 * @param appName 类型名称
		 * @param appValue 类型id
		 * @returns
		 */
		getDisplay: function(appName, appValue) {

			var map = null;

			if(typeof(appName) === 'string') {
				map = $.param[appName];
			} else {
				map = appName;
			}
			if(!map) {

				return null;
			}
			appValue = $.trim(appValue);
			if(map[appValue] == undefined || map[appValue] == 'undefined') {
				return appValue;
			}

			return map[appValue];
		},

		translateSysFlag: function(errorCode) {
			var errorTran = errorCode.substring(0, 6);
			var errorList = $.param['ERRCODE_SYS_FLAG'];

			for(var key in errorList) {
				if(key == errorTran) {
					var sys = this.getDisplay('ERRCODE_SYS_FLAG', errorTran);

					return sys + '▪' + errorCode.substring(6);
				}

			}

			return errorCode;
		},
		trim: function(input) {
			return input.replace(/(^\s*)|(\s*$)/g, "");
		},
		isEmpty: function(input) {
			if(input == null || this.trim(input).length == 0 || input == 'null')
				return true;
			else
				return false;

		}

	});

})(jQuery)