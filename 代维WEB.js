//重构列表 (修改列表)
	var script = "<script language=\"javascript\">\r\n";
	script += "$(document).ready(function(){\r\n";
	script += "	var jsonOPT= '';\r\n";
	script += "	var options = '<option value=\"\"></option>';\r\n";
	script += "	if(jsonOPT!=null && jsonOPT!=''){\r\n";
	script += "		var json = eval('(' + jsonOPT + ')');\r\n";
	script += "		var optionsMap = json.options;\r\n";
	script += "		for(var key in optionsMap){\r\n";
	script += "			options = options+\"<option value='\"+optionsMap[key]+\"'>\"+optionsMap[key]+\"</option>\" ;\r\n";
	script += "		}\r\n";
	script += "	}else{\r\n";
	script += "		options = \"<option value='城一'>城一</option>\" ;\r\n";
	script += "	}\r\n";
	script += "	$(\"select[id='branch']\").append(options);\r\n";
	script += "	$(\"select[id='branch']\").val('城一');\r\n";
	script += "	$('#dg').datagrid({\r\n";
	script += "		url:'',\r\n";
	script += "		queryParams:{branch:'城一',querytype:'fromOrder',datefrom:'',dateto:''},\r\n";
	script += "		columns:[[\r\n";
	script += "		{field:'checkbox',title:'<input id=\"detailcheckbox\" type=\"checkbox\">',checkbox:true,hidden:true},\r\n";
	script += "		{field:'PID',title:'PID',hidden:true},\r\n";
	script += "		{field:'BRANCH',title:'分公司',width:40,formatter:clickfunc},\r\n";
	script += "		{field:'CREATETIME',title:'建单时间',width:135,formatter:clickfunc},\r\n";
	script += "		{field:'BIZMODE',title:'接入模式',width:50,formatter:clickfunc},\r\n";
	script += "		{field:'ORDERSN',title:'流水号',width:200,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'ORDERID',title:'订单号',width:175,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'PASSWORD',title:'品级',width:55,formatter:clickfunc},\r\n";
	script += "		{field:'CUSTNAME',title:'客户姓名',width:70,formatter:clickfunc},\r\n";
	script += "		{field:'ACCOUNT',title:'客户账号',width:120,formatter:clickfunc},\r\n";
	script += "		{field:'PASSWORD',title:'密码',width:55,formatter:clickfunc},\r\n";
	script += "		{field:'CONTACTTEL',title:'客户电话',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'ZONENAME',title:'小区',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'ADDRDESC',title:'客户地址',width:200,formatter:clickfunc},\r\n";
	script += "		{field:'DWGROUP',title:'网格',width:60,formatter:clickfunc},\r\n";
	script += "		{field:'SPEED',title:'测速结果',width:80,hidden:false},\r\n";
	script += "		{field:'TESTRESULT',title:'测速达标',width:70,hidden:false},\r\n";
	script += "		{field:'OPTICALPOWER',title:'光功率',width:60,hidden:false},\r\n";
	script += "		{field:'FIXDESC',title:'回单内容',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'DEALERNAME',title:'处理人',width:60,formatter:clickfunc},\r\n";
	script += "		{field:'DEALERMOBILE',title:'处理人电话',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'OPERID',title:'操作员ID',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'OPERNAME',title:'操作员姓名',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'OPERTEL',title:'操作员电话',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'AUTHCHECK',title:'鉴权方式',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'AUTHVALUE',title:'ONU鉴权码',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'POSNAME',title:'分光器名称',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'POSPORT',title:'分光器端口ID',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'SERVICELIST',title:'服务列表',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'BANDINFOSVLAN',title:'业务外层Vlan',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'BANDINFOCVLAN',title:'业务内层Vlan',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'ITMSINFOSVLAN',title:'ITMS外层VLAN',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'ITMSINFOCVLAN',title:'ITMS内层VLAN',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'OLTID',title:'OLTIP',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'PONID',title:'端口ID',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'ACCEPTOUTTIME',title:'受理时限',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'BOOKOUTTIME',title:'预约时限',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'DEALOUTTIME',title:'处理时限',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'ACCEPTTIME',title:'受理时间',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'BOOKTIME',title:'预约时间',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'BOOKOPENTIME',title:'预约上门时间',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'RECEIVETIME',title:'上门时间',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'BACKTIME',title:'退单时间',width:150,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'FILETIME',title:'归档时间',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'CLOSEACTIONNAME',title:'关单动作',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'STATUS',title:'工单状态',width:100,formatter:clickfunc},\r\n";
	script += "		{field:'ISMELT',title:'是否热熔',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'OUTSIDETYPE',title:'室外是否穿管',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'INSIDETYPE',title:'室内是否穿管',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'COVERTYPE',title:'深浅覆盖',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'CAMPONPORT',title:'预占端口名称',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'OPERORG',title:'预占端口名称',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'BOOKRESULT',title:'预约结果',width:200,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'LV1REASON',title:'预约一级原因',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'LV2REASON',title:'预约二级原因',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'BOOKDESC',title:'预约备注',width:250,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'REBOOKDESC',title:'二次预约说明',width:100,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'TURNBACKREMARK',title:'退单说明',width:200,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'TURNBACKREASON',title:'退单一级原因',width:150,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'TURNBACKSECONDARYREASON',title:'退单二级原因',width:150,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'ORDERTHEME',title:'工单主题',width:250,formatter:clickfunc},\r\n";
	script += "		{field:'SNCODE',title:'OTVSN码',width:250,formatter:clickfunc},\r\n";
	script += "		{field:'OLD_ONUCODE',title:'旧ONU串码',width:350,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'NEW_ONUCODE',title:'新ONU串码',width:150,formatter:clickfunc},\r\n";
	script += "		{field:'RECEIVEONTIME',title:'是否及时上门',width:250,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'YYYKQNUM',title:'语音遥控器个数',width:250,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'REALSN',title:'AAA采集ONU串码',width:150,formatter:clickfunc,hidden:false},\r\n";
	script += "		{field:'IS_CHECKED',title:'在线',width:50,formatter:clickfunc,hidden:false},\r\n";
	script += "		{field:'IS_BANDSN',title:'ONU串码是否一致',width:150,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'OTVBAND',title:'OTV串码是否一致',width:150,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'AAAADDRES',title:'AAA端地址',width:200,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'FSDADDRES',title:'飞思达端地址',width:200,formatter:clickfunc,hidden:true},\r\n";
	script += "		{field:'ORDERTHEME',title:'业务类型',width:250,formatter:clickfunc}\r\n";
	script += "		]],\r\n";
	script += "		pagination:true,\r\n";
	script += "		rownumbers:true,\r\n";
	script += "		collapsible:true,\r\n";
	script += "		singleSelect:false,\r\n";
	script += "		autoRowHeight:true,\r\n";
	script += "		checkOnSelect:true,\r\n";
	script += "		border:false,\r\n";
	script += "		toolbar:'#tb1',\r\n";
	script += "		pagePosition:'bottom',\r\n";
	script += "		frozen:false,\r\n";
	script += "		pageSize:800,\r\n";
	script += "		pageList:[10,20,30,40,60,100,300,500,800,1000,5000,10000,20000]\r\n";
	script += "	});\r\n";
	script += "	resizeGrid();\r\n";
	script += "	$(window).resize(function(){\r\n";
	script += "		setTimeout(function(){\r\n";
	script += "			resizeGrid();\r\n";
	script += "			Sele();\r\n";
	script += "		},100);\r\n";
	script += "	});\r\n";
	script += "	function resizeGrid(){\r\n";
	script += "		$('#dg').datagrid('resize', {\r\n";
	script += "			width:function(){\r\n";
	script += "				return document.body.clientWidth-40;\r\n";
	script += "			}\r\n";
	script += "		});\r\n";
	script += "		$.addScroll('#show1');\r\n";
	script += "		}\r\n";
	script += "		$('#show1 .datagrid-header').stick_in_parent({offset_top:42});\r\n";
	script += "		$('#show1 .u-tb1').stick_in_parent({offset_top:0});\r\n";
	script += "		function clickfunc(value,rowData,rowIndex){\r\n";
	script += "			var wg = new RegExp(/(装维网格)/);\r\n";
	script += "			var a = wg.exec(value);\r\n";
	script += "			if(a!=null && a!=''){\r\n";
	script += "				var Temp = Grid(value);\r\n";
	script += "			}else{\r\n";
	script += "				var Temp = Addrde(value);\r\n";
	script += "			}\r\n";
	script += "			var data = rowData.PID+\"&ADDRDESC=\"+ Addrde(rowData.ADDRDESC);\r\n";
	script += "			return \"<a title=\"+value+\" onclick=openurl('\"+data+\"')>\"+Temp+\"</a>\";\r\n";
	script += "		};\r\n";
	script += "		$('#exportbtn').click(function(){\r\n";
	script += "			if(confirm('确定要导出吗？')){\r\n";
	script += "				var exportUrl='/cqmams';\r\n";
	script += "				var temBranch = $('#branch').val();\r\n";
	script += "				var jsonOPT= '';\r\n";
	script += "				if(jsonOPT!=null && jsonOPT!=''){\r\n";
	script += "				}else{\r\n";
	script += "					if(temBranch==null || temBranch==''){\r\n";
	script += "						alert('请填写分公司！');\r\n";
	script += "						return ;\r\n";
	script += "					}\r\n";
	script += "			}\r\n";
	script += "			var status=$('#status').val();\r\n";
	script += "			var branch=temBranch;\r\n";
	script += "			var custname=$('#custname').val();\r\n";
	script += "			var ordertheme=$('#ordertheme').val();\r\n";
	script += "			var endTime1=$('#dateto').val();\r\n";
	script += "			var date = new Date(endTime1);\r\n";
	script += "			date.setDate(date.getDate()+1);\r\n";
	script += "			var endTime=date.Format('yyyy-MM-dd');\r\n";
	script += "			var startTime=$('#datefrom').val();\r\n";
	script += "			var data={};\r\n";
	script += "			var url = exportUrl+'/dataExport/upload.action';\r\n";
	script += "			data['type']='install';\r\n";
	script += "			data['reportName']='SQL_BF_AT_NOW_NEW.Export';\r\n";
	script += "			data['dataSource']='dw';\r\n";
	script += "			data['startTime']=startTime;\r\n";
	script += "			data['endTime']=endTime;\r\n";
	script += "			var querytype=$('#querytype').val();\r\n";
	script += "			var closeaction=$('#closeaction').val();\r\n";
	script += "			var bizmode=$('#bizmode').val();\r\n";
	script += "			var custaccount=$('#custaccount').val();\r\n";
	script += "			if(querytype != null && querytype!=''){\r\n";
	script += "				data['querytype']=querytype;\r\n";
	script += "			}\r\n";
	script += "			if(status != null && status!=''){\r\n";
	script += "				data['status']=status;\r\n";
	script += "			}\r\n";
	script += "			if(closeaction != null && closeaction!=''){\r\n";
	script += "				data['closeaction']=closeaction;\r\n";
	script += "			}\r\n";
	script += "			if(branch != null && branch!=''){\r\n";
	script += "				data['branch']=branch;\r\n";
	script += "			}\r\n";
	script += "			if(bizmode != null && bizmode!=''){\r\n";
	script += "				data['bizmode']=bizmode;\r\n";
	script += "			}\r\n";
	script += "			if(custname != null && custname!=''){\r\n";
	script += "				data['custname']=custname;\r\n";
	script += "			}\r\n";
	script += "			if(custaccount != null && custaccount!=''){\r\n";
	script += "				data['custaccount']=custaccount;\r\n";
	script += "			}\r\n";
	script += "			if(ordertheme != null && ordertheme!=''){\r\n";
	script += "				data['ordertheme']=ordertheme;\r\n";
	script += "			}\r\n";
	script += "			$.ajax({\r\n";
	script += "				type:'post',\r\n";
	script += "				url:url,\r\n";
	script += "				data:data,\r\n";
	script += "				success:function(result){\r\n";
	script += "					result=$.parseJSON(result);\r\n";
	script += "					alert(result.msg);\r\n";
	script += "				}\r\n";
	script += "			});\r\n";
	script += "\r\n";
	script += "			}\r\n";
	script += "		});\r\n";
	script += "});\r\n";
	script += "\r\n";
	script += "function openurl(pid){\r\n";
	script += "	window.open('/cqmams/fttx/showBizInfor.action?pid='+pid+'&bizType=EL_FTTH_BF');\r\n";
	script += "};\r\n";
	script += "function checkDate(dateType){\r\n";
	script += "	var datefrom = $('#datefrom').val();\r\n";
	script += "	var dateto = $('#dateto').val();\r\n";
	script += "	if(datefrom!=null && datefrom!='' && dateto!=null && dateto!='' && datefrom.substring(0,7)!=dateto.substring(0,7)){\r\n";
	script += "		if(dateType=='datefrom'){\r\n";
	script += "			var year = datefrom.substring(0,4);\r\n";
	script += "			var moon = datefrom.substring(5,7);\r\n";
	script += "			var day = new Date(year,moon,0);\r\n";
	script += "			$('#dateto').val(datefrom.substring(0,8)+day.getDate());\r\n";
	script += "			}else{\r\n";
	script += "			$('#datefrom').val(dateto.substring(0,7)+'-01');\r\n";
	script += "			}\r\n";
	script += "		}\r\n";
	script += "};\r\n";
	script += "Date.prototype.Format = function (fmt){\r\n";
	script += "	var o = {\r\n";
	script += "		'M+': this.getMonth() + 1,\r\n";
	script += "		'd+': this.getDate(),\r\n";
	script += "		'h+': this.getHours(),\r\n";
	script += "		'm+': this.getMinutes(),\r\n";
	script += "		's+': this.getSeconds(),\r\n";
	script += "		'q+': Math.floor((this.getMonth() + 3) / 3),\r\n";
	script += "		'S': this.getMilliseconds()\r\n";
	script += "	};\r\n";
	script += "	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));\r\n";
	script += "	for (var k in o)\r\n";
	script += "	if (new RegExp('(' + k + ')').test(fmt))\r\n";
	script += "	fmt = fmt.replace(RegExp.$1,(RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));\r\n";
	script += "	return fmt;\r\n";
	script += "};\r\n";
	script += "!function(){\r\n";
	script += "	function n(n,t){\r\n";
	script += "		for(property in t)t.hasOwnProperty(property)&&(n[property]=t[property]);\r\n";
	script += "		return n\r\n";
	script += "	}function t(n,t){\r\n";
	script += "		var i=document.createElement('div');\r\n";
	script += "		i.className=' notyf';\r\n";
	script += "		var e=document.createElement('div');\r\n";
	script += "		e.className=' notyf-wrapper';\r\n";
	script += "		var o=document.createElement('div');\r\n";
	script += "		o.className=' notyf-icon';\r\n";
	script += "		var a=document.createElement('i');\r\n";
	script += "		a.className=t;\r\n";
	script += "		var r=document.createElement('div');\r\n";
	script += "		r.className=' notyf-message',\r\n";
	script += "		r.innerHTML=n,o.appendChild(a),\r\n";
	script += "		e.appendChild(o),\r\n";
	script += "		e.appendChild(r),\r\n";
	script += "		i.appendChild(e);\r\n";
	script += "		var c=this;\r\n";
	script += "		return setTimeout(function(){\r\n";
	script += "			i.className += ' disappear',\r\n";
	script += "			i.addEventListener(c.animationEnd,function(n){\r\n";
	script += "				n.target == i && c.container.removeChild(i)\r\n";
	script += "			});\r\n";
	script += "		var n=c.notifications.indexOf(i);\r\n";
	script += "		c.notifications.splice(n,1)\r\n";
	script += "		},c.options.delay),i}\r\n";
	script += "		function i(){\r\n";
	script += "			var n,t=document.createElement('fake'),\r\n";
	script += "			i={\r\n";
	script += "				transition:'animationend',\r\n";
	script += "				OTransition:'oAnimationEnd',\r\n";
	script += "				MozTransition:'animationend',\r\n";
	script += "				WebkitTransition:'webkitAnimationEnd'\r\n";
	script += "			};\r\n";
	script += "			for(n in i)if(void 0!==t.style[n])return i[n]\r\n";
	script += "		}this.Notyf=function(){\r\n";
	script += "			this.notifications=[];\r\n";
	script += "			var t={delay:2e3,alertIcon:'notyf-alert-icon',confirmIcon:'notyf-confirm-icon'};\r\n";
	script += "			arguments[0]&&'object'==typeof arguments[0]?this.options=n(t,arguments[0]):this.options=t;\r\n";
	script += "			var e=document.createDocumentFragment(),o=document.createElement('div');\r\n";
	script += "			o.className='notyf-container',e.appendChild(o),document.body.appendChild(e),\r\n";
	script += "			this.container=o,this.animationEnd=i()\r\n";
	script += "		},this.Notyf.prototype.alert = function(n){\r\n";
	script += "			var i = t.call(this,n,this.options.alertIcon);\r\n";
	script += "			i.className +=' alert',\r\n";
	script += "			this.container.appendChild(i),\r\n";
	script += "			this.notifications.push(i)\r\n";
	script += "		},this.Notyf.prototype.confirm=function(n){\r\n";
	script += "			var i = t.call(this,n,this.options.confirmIcon);\r\n";
	script += "			i.className +=' confirm',\r\n";
	script += "			this.container.appendChild(i),\r\n";
	script += "			this.notifications.push(i)\r\n";
	script += "		}\r\n";
	script += "}();\r\n";
	script += "function dwalert(t,a,b){\r\n";
	script += "	if(t==1){\r\n";
	script += "		var notyf = new Notyf({delay:b});\r\n";
	script += "		notyf.confirm(a);\r\n";
	script += "	};\r\n";
	script += "	if(t==2){\r\n";
	script += "		var notyf = new Notyf({delay:b});\r\n";
	script += "		notyf.alert(a);\r\n";
	script += "	};\r\n";
	script += "};\r\n";
	script += "function Addrde(a){\r\n";
	script += "	var Address = a;\r\n";
	script += "	Address = Address.replace('—', '-');\r\n";
	script += "	return Address.replace('主城片区', '');\r\n";
	script += "};\r\n";
	script += "function Grid(a){\r\n";
	script += "	var wg = new RegExp(/(大坪|弹子石|高九路|万达|国会山|四公里|亚太|两路口|迎龙|茶园|天信双骄|上新街|解放碑|六公里|上清寺|黄桷垭|长生)/);\r\n";
	script += "	var ret = wg.exec(a);\r\n";
	script += "	if(ret !='undefined' && ret!=null){return ret[1];}else{return a;}\r\n";
	script += "};\r\n";
	script += "function Sele(){;\r\n";
	script += "	var Seq = [15,16,17,18,43,61,63,66,67,70,71];\r\n";
	script += "	var Sto = [57,58,59];\r\n";
	script += "	if($('#closeaction').val()!='BtnBackToDeal'){\r\n";
	script += "	for(var i=0;i<Seq.length;i++){\r\n";
	script += "	Action(Seq[i],1);\r\n";
	script += "	};\r\n";
	script += "	for(var i=0;i<Sto.length;i++){\r\n";
	script += "	Action(Sto[i],0);\r\n";
	script += "	};\r\n";
	script += "	}else{\r\n";
	script += "		for(var i=0;i<Seq.length;i++){\r\n";
	script += "		Action(Seq[i],0);\r\n";
	script += "	};\r\n";
	script += "	for(var i=0;i<Sto.length;i++){\r\n";
	script += "	Action(Sto[i],1);\r\n";
	script += "	};\r\n";
	script += "	}\r\n";
	script += "};\r\n";
	script += "$('#closeaction').change(function(){\r\n";
	script += "	Sele();\r\n";
	script += "	if($('table').length == 7){\r\n";
	script += "		$('table').eq(4).remove();\r\n";
	script += "	}\r\n";
	script += "});\r\n";
	script += "function Action(a,b){\r\n";
	script += "	if(b==0){\r\n";
	script += "		$('table').eq(3).find('tr').eq(0).find('td').eq(a).hide();\r\n";
	script += "		if($('table').length == 7){\r\n";
	script += "			for(var i=0;i<$('table').eq(4).find('tr').length;i++){\r\n";
	script += "				$('table').eq(4).find('tr').eq(i).find('td').eq(a).hide();\r\n";
	script += "			}\r\n";
	script += "		};\r\n";
	script += "			}else{\r\n";
	script += "			$('table').eq(3).find('tr').eq(0).find('td').eq(a).show();\r\n";
	script += "		if($('table').length == 7){\r\n";
	script += "			for(var i=0;i<$('table').eq(4).find('tr').length;i++){\r\n";
	script += "				$('table').eq(4).find('tr').eq(i).find('td').eq(a).show();\r\n";
	script += "			}\r\n";
	script += "		};\r\n";
	script += "}\r\n";
	script += "};\r\n";
	script += "function ListFormat(){\r\n";
	script += "	var t=[10,19,20,24,25,29,30,31,32,33,34,35,36,37,38,39,40,41,45,53,54,60];\r\n";
	script += "	if($('#closeaction').val()=='BtnBackToDeal'){\r\n";
	script += "		for(var l = 0;l <t.length;l++){\r\n";
	script += "			$('table').eq(3).find('tr').eq(0).find('td').eq(t[l]).hide()\r\n";
	script += "			for (let i = 0; i < $('table').eq(4).find('tr').length; i++){\r\n";
	script += "				$('table').eq(4).find('tr').eq(i).find('td').eq(t[l]).hide();\r\n";
	script += "			}\r\n";
	script += "		}\r\n";
	script += "	}else{\r\n";
	script += "		for(var l = 0;l <t.length;l++){\r\n";
	script += "			$('table').eq(3).find('tr').eq(0).find('td').eq(t[l]).show()\r\n";
	script += "			for (let i = 0; i < $('table').eq(4).find('tr').length; i++){\r\n";
	script += "				$('table').eq(4).find('tr').eq(i).find('td').eq(t[l]).show();\r\n";
	script += "			}\r\n";
	script += "		}\r\n";
	script += "	}\r\n";
	script += "};\r\n";
	script += "</script>\r\n";

	if (window.location.href!='http://10.227.18.59:8010/cqmams/fttx/ntw/queryAtNow.action?id=ff8080816c5123c9016c60a15bb91227&nodeName=%E4%B8%9A%E5%8A%A1%E5%B7%A5%E5%8D%95%E3%80%8B%E6%99%BA%E8%83%BD%E7%BB%84%E7%BD%91%E5%B7%A5%E5%8D%95%E3%80%8B%E7%BB%BC%E5%90%88%E6%9F%A5%E8%AF%A2'){
	$("head").append(script);
	$('script')[8].remove();
	}else{
	script = "<script language=\"javascript\">\r\n";
	script += "	$('#dg').datagrid({\r\n";
	script += "		pageSize:800,\r\n";
	script += "		pageList:[10,20,30,40,60,100,300,500,800,1000,5000,10000,20000]\r\n";
	script += "	});\r\n";
	script += "</script>\r\n";
	$("head").append(script);
	}

//添加按钮 (显示*号/获取密码/导出CSV)
	if (window.location.href=='http://10.227.18.59:8010/cqmams/fttx/ntw/queryAtNow.action?id=ff8080816c5123c9016c60a15bb91227&nodeName=%E4%B8%9A%E5%8A%A1%E5%B7%A5%E5%8D%95%E3%80%8B%E6%99%BA%E8%83%BD%E7%BB%84%E7%BD%91%E5%B7%A5%E5%8D%95%E3%80%8B%E7%BB%BC%E5%90%88%E6%9F%A5%E8%AF%A2'){
	var html = '<td><div class="pagination-btn-separator"></div></td><td id="ming2" class="custom"><a href="javascript:void(0)" class="l-btn">';
	html += '<span><span class="l-btn-text" style="font-size:14px;text-align: center;padding: 0px 5px 0;">显示*号</span><span></span></span></a></td>';
	html += '<td id="mi" class="custom"><a href="javascript:void(0)" class="l-btn">';
	$('table').eq(4).find('tbody tr').eq(0).append(html);
	}else{
	html = '<td><div class="pagination-btn-separator"></div></td><td id="ming" class="custom"><a href="javascript:void(0)" class="l-btn">';
	html += '<span><span class="l-btn-text" style="font-size:14px;text-align: center;padding: 0px 5px 0;">显示*号</span><span></span></span></a></td>';
	html += '<td id="mi" class="custom"><a href="javascript:void(0)" class="l-btn">';
	html += '<span><span class="l-btn-text" style="font-size:14px;text-align: center;padding: 0px 3px 0;">获取密码</span><span class=""></span></span></a></td>';
	html += '<td id="toexcel" class="custom"><a href="javascript:void(0)" class="l-btn">';
	html += '<span><span class="l-btn-text" style="font-size:14px;text-align: center;padding: 0px 3px 0;">导出CSV</span><span class=""></span></span></a></td>';
	html += '<td><div class="pagination-btn-separator"></div></td><td>';
	html += '<label class="l-btn-text" style="font-family:"hkyt";font-size:15px;text-align: center;padding: 0px 15px 0;"><input id="auto" type="checkbox" style="text-align:center;';
	html += 'vertical-align:middle" checked/>自动补齐</span></label></td>';
	$('table').eq(4).find('tbody tr').eq(0).append(html);
	};
	html = '<span style="margin-left:100px;"><a href="/cqmams/fttx/bf/queryAtNow.action?id=8a3edfe45564130a0155641dba5e0005&nodeName=宽带装维报表（新）》装机实时查询" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="zjcx"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">装机查询</span></span>';
	html += '<a href="/cqmams/fttx/otv/queryAtNow.action?id=8a3edfe45767e17c01576842cc7a0026&nodeName=业务工单》OTV工单》综合查询" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="otv"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">OTV工单</span></span>';
	html += '<a href="/cqmams/fttx/bookpool/queryAll.action?id=8a636b856121f497016122378694000e&nodeName=业务工单》改约池》改约池综合查询" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="gyc"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">改约池</span></span>';
	html += '<a href="/cqmams/ftthOrderReport/queryGrabOrderData.action?id=ff8080816441d4ef0164442123e80021&nodeName=业务工单》抢单明细查询" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="qdmx"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">抢单明细</span></span>';
	html += '<a href="/cqmams/ftthOrderReport/jkchOrderReport.action?id=8a636b855e1a4a4e015e21c9f4b20011&nodeName=宽带装维报表（新）》投诉实时查询" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="tscx"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">投诉查询</span></span>';
	html += '<a href="/cqmams/fttx/monitor/showSubscribeOnTimeList.action?id=8a3edfe4570ab9c801570cfbd477129f&nodeName=家宽综合调度》预约及时监控" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="yyjs"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">预约及时</span></span>';
	html += '<a href="/cqmams/statistical/ftthInstallactionSameDay.action?id=8a636b85614c1fd701614f1427cb0004&nodeName=宽带装维报表（新）》当日待装明细" ';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="drdz"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">当日待装</span></span></span>';
	html += '<a href="/cqmams/fttx/ntw/queryAtNow.action?id=ff8080816c5123c9016c60a15bb91227&nodeName=业务工单》智能组网工单》综合查询" target="_blank"';
	html += 'class="easyui-linkbutton l-btn l-btn-small l-btn-plain" id="ldtb"><span class="l-btn" style="text-size:14px;text-align: center;';
	html += 'padding:0 10px 0;"><span class="l-btn-text">智能组网</span></span></span>';
	$('.f-fl').append(html);

//自动补齐
$('#searchBtn').on('click',function(){
	if($('#custaccount').val()!=''){
		return ;
	}
	if($('table').length == 7){
		$('table').eq(4).remove();
	}
	if($('#auto').is(':checked')==true){
		setTimeout(function (){
			$('table').eq(4).ready(function(){
				setTimeout(function (){
					if($('table').eq(4).find('tr').length >1){
						$('#ming').click();
					}
					}, 500);
			})
			}, 3000);
	}
});

$(document).ready(function (){
	Pre();
	var href = window.location.href;
	if (href !="http://10.227.18.59:8010/cqmams/fttx/bf/queryAtNow.action?id=8a3edfe45564130a0155641dba5e0005&nodeName=%E5%AE%BD%E5%B8%A6%E8%A3%85%E7%BB%B4%E6%8A%A5%E8%A1%A8%EF%BC%88%E6%96%B0%EF%BC%89%E3%80%8B%E8%A3%85%E6%9C%BA%E5%AE%9E%E6%97%B6%E6%9F%A5%E8%AF%A2"){
	Read();
	}
});

//首次登入自动填写
function Pre() {
	if ($('#show-detail1') != null) {
		$('#show-detail1').show();
		$("#datefrom").attr("onchange", "newDate('datefrom')");
		$("#dateto").attr("onchange", "newDate('datefrom')");
	}
	if ($('#branch').val() == "") {
		$('#branch').val("城一");
		if ($('#closeaction').val() == "") {
		$('#closeaction').val("BtnFinishFix");
		}
		//$('#exportbtn').hide();
	}
};

$('#resetBtn').mouseup(function(e){
		if(1 == e.which){
	$('#branch').val('');
	$('#closeaction').val('');
			return false;
		}
});

$('#zjcx').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('#otv').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('#gyc').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('#qdmx').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('#yyjs').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('#drdz').mouseup(function(e){
		if(1 == e.which){
			return false;
		}
});

$('input').mouseup(function(e){
	if(1 == e.which){
		//$(this).focus();
		return false;
	}
});

$('select').mouseup(function(e){
	if(1 == e.which){
		//$(this).focus();
		return false;
	}
});

$('#tb1').mousedown(function(e){
	var x,y;
		x = e.pageX;
		y = e.pageY;
	$('#tb1').mouseup(function(e){
		var newX = e.pageX;
		var newY = e.pageY;
		if(x==newX && y==newY){
			if($('#show-detail1').is(':hidden')==true){
				$('#show-detail1').show();
			}else{
				$('#show-detail1').hide();
			}
		}
	})
});

$('#cancelBtn').on('click',function(){
	if($('#show-detail1').is(':hidden')==false){
		$('#show-detail1').hide();
	}
	return false;
});

$('#resetBtn').on('click',function(){
	return false;
});

$('#searchBtn').on('click',function(){
	return false;
});

$('#schbtn').on('click',function(){
	if($('#show-detail1').is(':hidden')==true){
		$('#show-detail1').show();
	}
	return false;
});

function Read() {
	var name,phone,ADDRDESC,content,acc,account,xyz,lat,lon,clockin,speed,pasw,standard;
	setTimeout(function () {
		$("div.bannerlogo").remove();
		$(".item_info").text("");
		$(".item_name").text("");
		name = $('#biCustName').val();
		phone = $("#biCustTel").val();
		ADDRDESC= getUrlParam("ADDRDESC");
		content = $("td").text();
		acc = /账号：[^\*]?[\w]*[\d]{4,11}[ABC]*/;
		account = content.match(acc);
		xyz = /2\d{1}\.\d{4}/;
		lat = content.match(xyz);
		xyz = /10\d{1}\.\d{4}/;
		lon = content.match(xyz);
		xyz = /打卡结果:\S+格/;
		clockin = content.match(xyz);
		xyz = /测速结果:\d+/;
		speed = content.match(xyz);
		xyz = /是否达标:[是|否]/;
		standard = content.match(xyz);
		xyz = /密码：\d{6}/;
		pasw = content.match(xyz);
			if (pasw != null) {
		$("span.item_name").append("<div id='container'><p><a href='#'>" + '客户名：' + name + '　　电话：' +
			phone + '　　' + account + '　　' + pasw + '　　经度：' + lon + '　　纬度：' + lat + '　　' + clockin +
			'　　' + speed + '　　' + standard  +'　　<br />地址：'+ADDRDESC+ "</a></p></div>");
		} else {
		$("span.item_name").append("<div id='container'><p><a href='#'>" + '客户名：' + name + '　　电话：' +
			phone + '　　' + account + '　　经度：' + lon + '　　纬度：' + lat + '　　' + clockin + '　　' + speed +
			'　　' + standard + '　　<br />地址：'+ADDRDESC+"</a></p></div>");
		}
		}, 1000);
};

function ListFormat(){
	var t=[10,19,20,24,25,29,30,31,32,33,34,35,36,37,38,39,40,41,45,53,54,60];
	if($('#closeaction').val()=='BtnBackToDeal'){
		for(var l = 0;l <t.length;l++){
			$('table').eq(3).find('tr').eq(0).find('td').eq(t[l]).hide()
			for (let i = 0; i < $('table').eq(4).find('tr').length; i++){
				$('table').eq(4).find('tr').eq(i).find('td').eq(t[l]).hide();
			}
		}
	}else{
		for(let l = 0;l <t.length;l++){
			$('table').eq(3).find('tr').eq(0).find('td').eq(t[l]).show()
			for (let i = 0; i < $('table').eq(4).find('tr').length; i++){
				$('table').eq(4).find('tr').eq(i).find('td').eq(t[l]).show();
			}
		}
	};
};

function Sele(){;
	var Seq = [15,16,17,18,43,61,63,66,67,70,71];
	var Sto = [57,58,59];
	if($('#closeaction').val()!='BtnBackToDeal'){
	for(var i=0;i<Seq.length;i++){
	Action(Seq[i],1);
	};
	for(var i=0;i<Sto.length;i++){
	Action(Sto[i],0);
	};
	}else{
		for(var i=0;i<Seq.length;i++){
		Action(Seq[i],0);
	};
	for(var i=0;i<Sto.length;i++){
	Action(Sto[i],1);
	};
	}
};

function Action(a,b){
	if(b==0){
		$('table').eq(3).find('tr').eq(0).find('td').eq(a).hide();
		if($('table').length == 7){
			for(var i=0;i<$('table').eq(4).find('tr').length;i++){
				$('table').eq(4).find('tr').eq(i).find('td').eq(a).hide();
			}
		};
			}else{
			$('table').eq(3).find('tr').eq(0).find('td').eq(a).show();
		if($('table').length == 7){
			for(var i=0;i<$('table').eq(4).find('tr').length;i++){
				$('table').eq(4).find('tr').eq(i).find('td').eq(a).show();
			}
		};
}
};

//复制内容
$(".item_name").click(function (){
	var text = $('.item_name').text();
	GM_setClipboard(text);
	dwalert(1,'信息已复制到剪切板',3000);
	return false;
});


//按钮事件
$('#ming').click(function (){
	ListFormat();
	Sele();
	if ($('table').length<7){
		dwalert(2,'*** 都被外星人带走了!!',3000);
		return;
	}
	if ($('table').eq(4).find('tr').length<=1) {
		dwalert(2,"*** 都被外星人带走了!!",3000);
	}else{
		if ($('table').eq(4).find('tr').length >= 300) dwalert(1,"一次别太多,电脑会爆炸的!!",3000);
		var html = '<div id="loading" class="datagrid-mask" style="display:block"></div><div id="graphic" class="datagrid-mask-msg" style="display:block;';
		html += 'left:50%;height:16px;margin-left:-85.5px;line-height:16px;line-height:22px;">正在处理，请稍待。。。</div>';
		$('.datagrid-body').eq(1).append(html);
		setTimeout(function (){
			for (let i = 0; i < $('table').eq(4).find('tr').length; i++){
				var pid = $('table').eq(4).find('tr').eq(i).find('td').eq(1).text();
				$.get('/cqmams/fttx/bf/showWaitDeal.action?pid=' + pid + '&bizType=EL_FTTH_BF',function(result){
					var name = result.match(/biCustName\" value=\"(\S*)\">/)[1];
					var tel = result.match(/biCustTel\" value=\"(\S*)\">/)[1];
					var types = result.match(/优惠列表：<\/td>\s*\n*\r*[\S\s]*?>(\S*)<\/td>/)[1];
					$('table').eq(4).find('tr').eq(i).find('td').eq(8).find('a').text(name);
					$('table').eq(4).find('tr').eq(i).find('td').eq(11).find('a').text(tel);
					$('table').eq(4).find('tr').eq(i).find('td').eq(72).find('a').text(types);
				});
				$.get('/cqmams/fttx/showBizInfor.action?pid=' + pid + '&bizType=EL_FTTH_BF',function(result){
					$('table').eq(4).find('tr').eq(i).find('td').eq(9).find('a').eq(0).text(result.match(/action\?account=(\S*)\'\)\;/)[1]);
				});
				StrNo(i);
			};
		}, 200)
	}
});

$('#ming2').click(function (){
	var html = '<div id="loading" class="datagrid-mask" style="display:block"></div><div id="graphic" class="datagrid-mask-msg" style="display:block;';
	html += 'left:50%;height:16px;margin-left:-85.5px;line-height:16px;line-height:22px;">正在处理，请稍待。。。</div>';
	$('.datagrid-body').eq(1).append(html);
	setTimeout(function (){
		for (let i = 0; i < $('table').eq(4).find('tr').length; i++){
			var pid = $('table').eq(4).find('tr').eq(i).find('td').eq(1).text();
			$.get('/cqmams/fttx/showBizInfor.action?pid=' + pid + '&bizType=EL_FTTH_NTW',function(result){
				$('table').eq(4).find('tr').eq(i).find('td').eq(9).find('a').eq(0).text(result.match(/action\?account=(\S*)\'\)\;/)[1]);
				if(i=$('table').eq(4).find('tr').length - 1){$('#loading').remove();$('#graphic').remove()};
			});
		};
	}, 200)
	if($('table').eq(4).find('tr').length<=1){$('#loading').remove();$('#graphic').remove()};
});

$('#mi').click(function (){
		if ($('table').length<7){
	   dwalert(2,"缺少查询条件!!!",3000);
		return;
	}
	if ($('table').eq(4).find('tr').length <=1) {
		dwalert(2,"缺少查询条件!!!",3000);
	} else {
		var html = '<div id="loading" class="datagrid-mask" style="display:block"></div><div id="graphic" class="datagrid-mask-msg" style="display:block;';
		html += 'left:50%;height:16px;margin-left:-85.5px;line-height:16px;line-height:22px;">正在处理，请稍待。。。</div>';
	$('.datagrid-body').eq(1).append(html);
		setTimeout(function () {
		for (let i = 0; i < $('table').eq(4).find('tr').length; i++) {
			if($('table').eq(4).find('tr').length<=1){$('#loading').remove();$('#graphic').remove()}
			StrNo(i)
		}
		}, 100)
	}
});

function StrNo(i){
	var pid,bizid,string,contents,sdata;
	pid = $('table').eq(4).find('tr').eq(i).find('td').eq(1).text();
	string = /[stepdata\]?[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{12}/g;
	$.ajax({
		type: 'post',
		headers: {
 			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		url: '/cqmams/wf2biz/openWfRecord.action',
		data: 'bizId=' + pid + '&bizType=EL_FTTH_BF',
		success: function (result) {
		contents = result.match(string);
		for (var c = 0; c < contents.length; c++) {
			if (c == 1) {
				bizid = contents[c];
			} else {
				bizid = contents[c] + '%2C' + bizid;
			}
		};
		Password(i, bizid);
		//console.log(bizid);
	}
	});
};

function Password(i, a){
	$.get('/cqmams/wf2biz/openFieldChangeRecord.action?bizId='+ a + '&bizType=EL_FTTH_BF',function(result){
		result = JSON.stringify(result);
		var pasw = result.match(/\[\"账号密码\"\,\"(\d*)\"\]/)[1];
		var grade = result.match(/客户级别\"\,\"([\u4e00-\u9fa5]*)\"/)[1];
		$('table').eq(4).find('tr').eq(i).find('td').eq(7).find('a').text(grade);
			if(pasw!=null && pasw!=''){
				$('table').eq(4).find('tr').eq(i).find('td').eq(10).find('a').text(pasw);
			};
		if(i=$('table').eq(4).find('tr').length - 1){$('#loading').remove();$('#graphic').remove()};
	});
};

$('#ldtb').click(function(){
});

//传参
function getUrlParam(name){
	var url = window.location.search;
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var result = url.substr(1).match(reg);
	return result ? decodeURIComponent(result[2]) : null;
};

//导出数据
$('#toexcel').on("click", function () {
   if ($('table').length<7){
		dwalert(2,"无可导出数据!!",3000);
		return;
	}
	if ($('table').eq(4).find('tr').length ==0) {
		dwalert(2,"无可导出数据!!",3000);
	} else {
		var exportCsvTool = {
		tableId: "",
		fileName: "",
		tableHeader: [],
		showHeader: true,
		ignoredColumns: [],
		ignoredRows: [],
		ignoreAttribute: [],
		removeStrExpression: "",
		ignoreEmptyColumns: true,
		ignoreEmptyRows: true,
		headerPosition: -1,
		export () {
			var _this = this;
			var dateArray = _this.getTableData();
			_this.outCsv(JSON.stringify(dateArray));
		},
		getTableData() {
			var _this = this;
			var dataArray = [];
			var index = 0;
			if (_this.headerPosition >= 0) index = _this.headerPosition + 1;
			var trs = $("table").eq(4).find("tr");
			for (index; index < trs.length; index++) {
			if (_this.ignoreEmptyRows && $(trs[index]).html() == "") continue;
			if (_this.ignoredRows.indexOf(index) >= 0) continue;
			var RowData = [];
			var tds = $(trs[index]).find("td,th");
			for (var i = 0; i < tds.length; i++) {
				if (_this.ignoredColumns.indexOf(i) >= 0) continue;
				var tdText = $(tds[i]).text();
				if (_this.ignoreEmptyColumns && tdText == "") continue;
				else {
				if (_this.ignoreAttribute.length > 0) {
					tdText = $(tds[i]).contents().filter(function () {
					var express = $(this).attr(_this.ignoreAttribute[0].attrName) !=
						_this.ignoreAttribute[0].attrValue;
					for (var x = 1; x < _this.ignoreAttribute.length; x++) {
						express = $(this).attr(_this.ignoreAttribute[x].attrName) !=
						_this.ignoreAttribute[x].attrValue && +express;
					}
					return express;
					}).text();
				}
				if (_this.removeStrExpression != "") {
					tdText = tdText.replace(_this.removeStrExpression, "");
				}
				RowData.push(tdText);
				}
			}
			dataArray.push(RowData);
			}
			return dataArray;
		},
		outCsv(JSONData) {
			var _this = this;
			var CSV = '';
			var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			if (_this.showHeader) {
			var row = '';
			if (_this.tableHeader.length > 0) {
				for (var j = 0; j < _this.tableHeader.length; j++) {
				row += _this.tableHeader[j] + ",";
				}
			} else {
				var trs = $("table").eq(4).find("tr");
				var tds = $(trs).eq(_this.headerPosition).find("th,td");
				for (j = 0; j < tds.length; j++) {
				if (_this.ignoredColumns.indexOf(j) >= 0) continue;
				var tdText = $(tds).eq(j).text();
				if (_this.ignoreEmptyColumns && tdText == "") continue;
				row += tdText + ",";
				}
			}
			row = row.slice(0, -1);
			CSV += row + "\r\n";
			}
			for (var i = 0; i < arrData.length; i++) {
			row = "";
			for (var index in arrData[i]) {
				if (arrData[i][index] instanceof Date) {
				row += '"' + arrData[i][index].toLocaleString() + '",';
				} else {
					if(index==5){
						row += '"\'' + arrData[i][index] + '",';
					}else{
						row += '"' + arrData[i][index] + '",';
					}
				}
			}
			row.slice(0, row.length - 1);
			CSV += row + "\r\n";
			}
			if (CSV == '') {
			alert("Invalid data");
			return;
			}
			var fileName = '';
			fileName += "导出数据";
			if (window.navigator.msSaveOrOpenBlob) {
			var csvContent = '';
			var uriie = csvContent + CSV;
			var blob = new Blob([decodeURIComponent(encodeURI(uriie))], {
				type: "data:text/csv;charset=utf-8,"
			});
			navigator.msSaveBlob(blob, fileName + ".csv");
			} else {
			csvContent = "data:text/csv;charset=utf-8,﻿";
			var uriother = csvContent + CSV;
			var encodedUri = encodeURI(uriother);
			var link = document.createElement("a");
			link.setAttribute("href", encodedUri);
			link.setAttribute("download", fileName + ".csv");
			document.body.appendChild(link);
			link.click();
			}
		}
		};
		exportCsvTool.tableId = "#excel";
		exportCsvTool.ignoredColumns = [0];
		exportCsvTool.tableHeader = ["PID","分公司","建单时间","接入模式","流水号","订单号","用户品级","客户姓名","客户账号","客户密码",
		"客户电话","小区","客户地址","网格","测速结果","测速达标","光功率","APP回复的内容","代维处理人姓名",
		"代维处理人电话","操作员ID","操作员姓名","操作员电话","鉴权方式","ONU鉴权码","分光器名称",
		"分光器端口ID","服务列表","业务外层Vlan","业务内层Vlan","ITMS外层VLAN","ITMS内层VLAN",
		"OLTIP","端口ID","受理时限","预约时限","处理时限","受理时间","预约时间","预约上门时间","上门时间",
		"退单时间","归档时间","关单动作","工单状态","是否热熔","室外是否穿管","室内是否穿管","深浅覆盖",
		"预占端口名称","预占端口名称","预约结果","预约一级原因","预约二级原因","预约备注","二次预约说明",
		"退单说明","退单一级原因","退单二级原因","工单主题","OTVSN码","旧ONU串码","新ONU串码",
		"是否及时上门","语音遥控器个数","AAA采集ONU串码","账号是否在线","ONU串码是否一致",
		"OTV串码是否一致","AAA端地址","飞思达端地址","业务类型"];
		exportCsvTool.removeStrExpression = /[,$]/g;
		exportCsvTool.removeStrExpression = /[#]/g;
		exportCsvTool.removeStrExpression = /[\r\n]/g;
		exportCsvTool.ignoreEmptyColumns = false;
		exportCsvTool.ignoreEmptyRows = true;
		exportCsvTool.ignoreAttribute = [{attrName: "style",attrValue: "display: none;"}];
		exportCsvTool.export();
		dwalert(1,"导出数据.csv 已保存到桌面",3000);
	}
});