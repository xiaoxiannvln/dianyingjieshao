window.onload = function() {
	
	//获得元素对象
	var pic = document.getElementById('pic');
	var imgs = pic.getElementsByTagName('img');//图片列表
	var wenzi = document.getElementsByClassName('wenzi');//内容列表
	
	//设置图片的自定义属性
	for (var i = 0;i < imgs.length;i ++) {
		imgs[i].setAttribute('tid',i);
	}
	
	//事件委托，pic父元素注册单击事件
	pic.onclick = function(e) {
		
		e = e || window.event;
		
		//判断点击的是不是图片
		var currObj = e.target || e.srcElement;
		
		if (currObj.nodeName != 'IMG') 
			return;
		
		//获得图片对应的自定义属性值
		var tid = currObj.getAttribute('tid');
		
		//设置所有的内容隐藏，所有图片失去高亮
		for (var i = 0;i < wenzi.length;i ++) {
			wenzi[i].style.display = 'none';
			imgs[i].className = '';
		}
		
		
		//当前图片对应的内容显示
		wenzi[tid].style.display = 'block';		
		//当前图片高亮边框
		currObj.className = 'select';		
	}
	
}