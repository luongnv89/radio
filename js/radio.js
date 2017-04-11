luongnvinfo={
	langs:['English','French','Instrument','Other'],
	cats :['News','Music','Talk'],
	data:[],
	doFirst:function () {
		
		audioplayer = document.getElementById('audioplayer');
		audioplayer.volume=0.5;
		btnPlay = document.getElementById('btnPlay');
		rsName = document.getElementById('radioName');
		rsDesc = document.getElementById('rs-description');
		rsLogo = document.getElementById('currentLogo');
		rsP = document.getElementById('previousName');
		rsN = document.getElementById('nextName');
		btnNext = document.getElementById('btnNext');
		// btnTime = document.getElementById('btnTime');
		rsVolume = document.getElementById('volume');
		rsVolume.value = audioplayer.volume*100;
		rsVolume.addEventListener('change',luongnvinfo.setVolume,false);
		volumeValue = document.getElementById('volumeValue');
		volumeValue.innerHTML = rsVolume.value/10;
		
		btnNext.onclick = function () {
			var currentIndex = audioplayer.getAttribute('currentRS');
			if(currentIndex>=luongnvinfo.data.length-1){

			}else{
				luongnvinfo.selectStream(Number(currentIndex)+1);	
			}
		}
		btnPrevious = document.getElementById('btnPrevious');
		btnPrevious.onclick = function () {
			var currentIndex = audioplayer.getAttribute('currentRS');
			if(currentIndex==0){

			}else{
				luongnvinfo.selectStream(Number(currentIndex)-1);	
			}
		}

		btnPlay.onclick = function () {
			luongnvinfo.btnPlayClick();
		}
		listEnglish = document.getElementById('listEnglish');
		listFrench = document.getElementById('listFrench');
		listIns = document.getElementById('listIns');
		listOthers = document.getElementById('listOthers');
		luongnvinfo.getData();
	},
	btnPlayClick:function () {
		if(audioplayer.paused){
			btnPlay.setAttribute('class','glyphicon glyphicon-stop');
			audioplayer.play();
		}else{
			btnPlay.setAttribute('class','glyphicon glyphicon-play');
			audioplayer.pause();
		}
	},
	selectStream:function (rsIndex) {
		console.log('Selected: ' + rsIndex);
		var rsData = luongnvinfo.data[rsIndex];
		rsName.innerHTML=rsData.name;
		if (rsDesc) rsDesc.innerHTML=rsData.desc;
		if (rsLogo) rsLogo.src=rsData.logo;
		if(rsIndex>0){
			rsP.innerHTML=luongnvinfo.data[rsIndex-1].name;
		}else{
			rsP.innerHTML="No previous";
		}

		if(rsIndex<luongnvinfo.data.length-1){
			var nextRS =luongnvinfo.data[rsIndex+1];
			rsN.innerHTML=nextRS.name;
		}else{
			rsN.innerHTML="No Next";	
		}

		audioplayer.setAttribute('currentRS',rsIndex);
		var listSource = audioplayer.querySelectorAll('source');
		for(var i=0;i<listSource.length;i++){
			listSource[i].remove();
		}
		urlStream = luongnvinfo.data[rsIndex].url;
		for(var j=0;j<urlStream.length;j++){
			var source = document.createElement('source');
			source.src = urlStream[j];
			audioplayer.appendChild(source);
		}
		audioplayer.load();
	},
	createDOMElement:function (index,rs) {
		var col = document.createElement('div'),
		thumbnail = document.createElement('div'),
		logo = document.createElement('img'),
		caption = document.createElement('div'),
		name = document.createElement('h3'),
		other = document.createElement('div'),
		otherText = document.createElement('h4');
		col.setAttribute('class','col-sm-6 col-xs-12 col-md-3');
		col.setAttribute('id','rs-'+index);
		col.setAttribute('data-dismiss','modal');
		thumbnail.setAttribute('class','thumbnail');
		logo.setAttribute('class','thumb-image grow-rotate box-shadow-outset hidden-xs');
		logo.src=rs.logo;
		caption.setAttribute('class','caption');
		name.innerHTML=rs.name;
		other.setAttribute('class','otherInfo hidden-xs');
		otherText.innerHTML='['+luongnvinfo.cats[rs.category]+']';
		caption.appendChild(name);
		other.appendChild(otherText);
		caption.appendChild(other);
		thumbnail.appendChild(logo);
		thumbnail.appendChild(caption);
		col.appendChild(thumbnail);
		col.onclick= function () {
			luongnvinfo.selectStream(index);
		}; 
		return col;
	},
	setVolume :function () {
		audioplayer.volume=rsVolume.value/100;
		volumeValue.innerHTML = rsVolume.value/10;
	},
	getData:function () {
		console.log('request data');
		var url = 'data.json';
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function () {
			if(xmlHttp.readyState==4&&xmlHttp.status==200){
				console.log(xmlHttp.responseText);
				luongnvinfo.data=JSON.parse(xmlHttp.responseText);
				for(var i=0;i<luongnvinfo.data.length;i++){
					var rsDOM = luongnvinfo.createDOMElement(i,luongnvinfo.data[i]);
					switch(luongnvinfo.data[i].language){
						case 0:
						listEnglish.appendChild(rsDOM);
						break;
						case 1:
						listFrench.appendChild(rsDOM);
						break;
						case 2:
						listIns.appendChild(rsDOM);
						break;
						default:
						listOthers.appendChild(rsDOM);
						break;
					}
				}
				luongnvinfo.selectStream(0);
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send();

	}
}

document.addEventListener('DOMContentLoaded',luongnvinfo.doFirst,false);
