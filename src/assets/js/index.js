function TiMu(){
	var z
	for(z in data1){}
	z++
	for(var i in data1){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		var beijing = document.createElement("div");
		beijing.className = "entrance-bottom-frame-beijing";
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(beijing);
		
		var time = document.createElement("div");
		time.className = "entrance-center-time";
		time.innerHTML = "答题时间：00:00"
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(time);
		
		var title1 = document.createElement("div");
		title1.className = "topic-frameli"
		title1.innerHTML = "第" + "<div>" + data1[i].id + "</div>" + "/" + z + "题"
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(title1);
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
		
		
		for(var j in data1[i].xuanxiang){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j == 0){
				 div3_id.innerHTML = "A";
			}else if(j == 1){
				 div3_id.innerHTML = "B";
			}else if(j == 2){
				 div3_id.innerHTML = "C";
			}else{
				 div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
		}
	}
	
}

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}


function getStyle(obj,attr){ 
  if(obj.currentStyle){ 
    return obj.currentStyle[attr]; 
  } 
  else{ 
    return document.defaultView.getComputedStyle(obj,null)[attr]; 
  } 
}


function CountDown() {
          minutes = Math.floor(mintime / 60);
         seconds = Math.floor(mintime % 60);
         if(minutes < 10){
         	minutes1 = "0" + minutes
         }else{
         	minutes1 = minutes
         }
         if(seconds < 10){
         	seconds1 = "0" + seconds
         }else{
         	seconds1 = seconds
         }
         msg =   minutes1 + ":" + seconds1;
         for(var i=0;i<document.querySelectorAll(".entrance-center-time").length;i++){
         	document.querySelectorAll(".entrance-center-time")[i].innerHTML = "答题时间：" + msg;
         }
//       if (maxtime == 5 * 60)alert("还剩5分钟");
             ++mintime;
   
//       clearInterval(timer);

 }

window.onload = function(){
	TiMu()
	mintime = 1; 
    timer = setInterval("CountDown()", 1000); 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function(){
			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				var frame_left = getStyle(document.querySelector(".entrance-bottom-frame"),'marginLeft')
				document.querySelector(".entrance-bottom-frame").style.marginLeft = parseInt(frame_left) -1050 + "px"
				timu_id++;
				addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
				removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
				addClass(document.querySelectorAll(".entrance-bottom-frame-beijing")[timu_id-1],none)
			}else{
				window.location.href='result.html';
			}
		}
	}
}


var data1 =[ {
             "id" : "1",  
             "title": "1.众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",  			
             "xuanxiang":[
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				]
	
        },{  
             "id" : "2",  
             "title": "2.众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",  
             
             "xuanxiang":[
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				]
        },{  
             "id" : "3",  
             "title": "3.众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",  
             
             "xuanxiang":[
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				]
        },{  
             "id" : "4",  
             "title": "4.众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",  
            
             "xuanxiang":[
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				]
        },{  
             "id" : "5",  
             "title": "5.众所周知我们所处的宇宙的质能公式是E=mc2，其中c是真空中的光速，和我们的宇宙平行的另一个宇宙meta，研究显示他们使用的质能公式是E=(2+√3)m，当一个物体质量m很大的时候，对应的能量E非常大，数据也非常的长，但meta宇宙里面的智慧生物只愿意把E取整，然后记录对应的能量E的最后一位整数，比如m=0时，他们会记录1，m=1时，他们会记录3。m=2的时候，他们会记录3。现在请问当m=100时，他们会记录多少？",  
            
             "xuanxiang":[
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				"临场应变处理事情的能力",
             				]
        }
        ];
        

