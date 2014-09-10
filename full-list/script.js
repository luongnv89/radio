luongnvinfo={
	langs:['English','French','Instrument','Other'],
	cats :['News','Music','talk'],
	data : [
	{
		url:['http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-eieuk'],
		logo:'images/bbc.jpg',
		name:'BBC World Service',
		language:0,
		category:0
	},
	{
		url:['http://listen.onmyradio.net:8002/;'],
		logo:'images/jazzfm.jpg',
		name:'Jazz FM',
		language:0,
		category:1
	},
	{
		url:['http://media-ice.musicradio.com:80/ClassicFMMP3'],
		logo:'images/classicfm.gif',
		name:'Classic FM',
		language:0,
		category:1
	},
	{
		url:['http://newyorkcity.radiostreamlive.com:8014/radionylive_128'],
		logo:'images/ny.jpg',
		name:'Radio New Yok',
		language:0,
		category:0
	},
	{
		url:['http://5.152.208.98:8058/;'],
		logo:'images/ancientfm.jpg',
		name:'Ancient Music',
		language:3,
		category:0
	},
	{
		url:['http://streaming.hotmix-radio.net/hotmixradio-dance-128.mp3'],
		logo:'images/hotmix.jpg',
		name:'Hotmix Dance',
		language:0,
		category:1
	},
	{
		url:["http://streaming64.radionomy.com/70s-Disco-Nights"],
		logo:"images/70sdisco.jpg",
		name:'70s Disco Night',
		language:0,
		category:1
	},
	{
		url:["http://lin2.ash.fast-serv.com:9022/"],
		logo:"images/otr.jpg",
		name:'Old Time Radio',
		language:0,
		category:1
	},
	{
		url:["http://stream.rfi.fr/2588/rfi_en_anglais/rfianglais.mp3"],
		logo:"images/rfi.gif",
		name:'RFI Anglais',
		language:0,
		category:0
	},
	{
		url:["http://telechargement.rfi.fr/rfi/francais/audio/last/RFI_24H_en_france_1_1.mp3"],
		logo:"images/rfi24.png",
		name:'RFI 24H en France',
		language:1,
		category:0
	},
	{
		url:["http://telechargement.rfi.fr/rfi/francais/audio/last/rfi_jrn_dernier_journal.mp3"],
		logo:"images/rfi.gif",
		name:'Dernier Journal Monde',
		language:1,
		category:0
	},
	{
		url:["http://mp3.live.tv-radio.com/rfimonde/all/rfimonde-64k.mp3"],
		logo:"images/rfi.gif",
		name:'Direct Monde',
		language:1,
		category:0
	},
	{
		url:["http://mp3.live.tv-radio.com/rfimusiquemonde/all/rfimusiquemonde-64k.mp3"],
		logo:"images/rfi.gif",
		name:'Musique',
		language:1,
		category:1
	},
	{
		url:["http://telechargement.rfi.fr/rfi/francais/audio/last/rfi_jrn_dernier_journal_fr_facile.mp3"],
		logo:"images/rfi.gif",
		name:'Dernier Journal en Francais Facile',
		language:1,
		category:0
	},
	{
		url:["http://mp3tslg2.tdf-cdn.com/6675/francemusique.mp3"],
		logo:"images/francemusique.jpg",
		name:'France Musique',
		language:1,
		category:1
	},
	{
		url:["http://audio-mp3.ibiblio.org:8000/wcpe.mp3"],
		logo:"images/wcpe.jpg",
		name:'The Classical Station',
		language:0,
		category:1
	},
	{
		url:["http://pianosolo.streamguys.net:80/live"],
		logo:"images/piano.png",
		name:'Piano Solo',
		language:2,
		category:1
	},
	{
		url:["http://46.28.49.164:7504//stream"],
		logo:"images/restrosoul.jpg",
		name:'Restro Soul',
		language:0,
		category:1
	},
	{
		url:["http://kuvo-ice.streamguys.org:80/kuvo-mp3-64"],
		logo:"images/kuvo.jpg",
		name:'KUVO Jazz',
		language:0,
		category:1
	},
	{
		url:["http://wgltradio.ilstu.edu:8000/wgltmain.mp3"],
		logo:"images/glt.jpg",
		name:'Illinois State University',
		language:0,
		category:0
	},
	
	{
		url:["http://pd.npr.org/anon.npr-mp3/npr/news/newscast.mp3"],
		logo:"images/npr.png",
		name:'NPR Hourly News',
		language:0,
		category:0
	},
	
	{
		url:["http://wgltradio.ilstu.edu:8000/wgltjazz.mp3"],
		logo:"images/glt.jpg",
		name:'GLT Jazz Radio',
		language:0,
		category:1
	},
	{
		url:["http://wgltradio.ilstu.edu:8000/wgltfolk.mp3"],
		logo:"images/glt.jpg",
		name:'GLT Acousticity',
		language:0,
		category:1
	},
	{
		url:["http://50.31.180.202:80/"],
		logo:"images/kexp.jpg",
		name:'KEXP',
		language:0,
		category:1
	},
	{
		url:["http://reachonair.net:8320/live320"],
		logo:"images/reachonair.png",
		name:'Reach On Air',
		language:0,
		category:1
	},
	{
		url:["http://stereo.dfm.nu"],
		logo:"images/dfm.jpg",
		name:'DFM RTV INT',
		language:0,
		category:1
	},
	{
		url:["http://icecast.uvm.edu:8005/wruv_fm_256"],
		logo:"images/wruv.jpg",
		name:'WRUV FM',
		language:0,
		category:1
	},
	{
		url:["http://stream0.wfmu.org/freeform-128k","http://stream1.wfmu.org/freeform-128k","http://stream2.wfmu.org/freeform-128k","http://stream3.wfmu.org/freeform-128k"],
		logo:"images/wfmu.jpg",
		name:'WFMU',
		language:0,
		category:2
	}
	],
	doFirst:function () {
		audioplayer = document.getElementById('audioplayer');
		btnPlay = document.getElementById('btnPlay');
		rsName = document.getElementById('radioName');
		btnPlay.onclick = function () {
			luongnvinfo.btnPlayClick();
		}
		listEnglish = document.getElementById('listEnglish');
		listFrench = document.getElementById('listFrench');
		listIns = document.getElementById('listIns');
		listOthers = document.getElementById('listOthers');
		for(var i=0;i<luongnvinfo.data.length;i++){
			var rsData = new RadioStream(luongnvinfo.data[i]);
			var rsDOM = rsData.createDOMElement();
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

	},
	btnPlayClick:function () {
		if(audioplayer.paused){
			//console.log('Going to play');
			btnPlay.src='images/stop.png';
			audioplayer.play();
		}else{
			//console.log('Going to stop');
			btnPlay.src='images/play.png';
			audioplayer.pause();
		}
	},
	selectStream:function (urlStream,nameStream) {
		//console.log('Stream: ' + urlStream);
		rsName.innerHTML=nameStream;
		luongnvinfo.btnPlayClick();
		var listSource = audioplayer.querySelectorAll('source');
		for(var i=0;i<listSource.length;i++){
			listSource[i].remove();
		}
		for(var j=0;j<urlStream.length;j++){
			var source = document.createElement('source');
			source.src = urlStream[j];
			audioplayer.appendChild(source);
		}
		audioplayer.load();
		luongnvinfo.btnPlayClick();
	}

}

document.addEventListener('DOMContentLoaded',luongnvinfo.doFirst,false);

function RadioStream (rs) {
	this.url = rs.url;
	this.logo=rs.logo;
	this.name = rs.name;
	this.language = luongnvinfo.langs[rs.language];
	this.category = luongnvinfo.cats[rs.category];
}

RadioStream.prototype.createDOMElement = function() {
	var that = this;
	var col = document.createElement('div'),
	thumbnail = document.createElement('div'),
	logo = document.createElement('img'),
	caption = document.createElement('div'),
	name = document.createElement('h3'),
	other = document.createElement('div'),
	otherText = document.createElement('h4');
	col.setAttribute('class','col-sm-6 col-md-4');
	thumbnail.setAttribute('class','thumbnail');
	logo.setAttribute('class','thumb-image grow-rotate box-shadow-outset hidden-xs');
	logo.src=this.logo;
	caption.setAttribute('class','caption');
	name.innerHTML=that.name;
	other.setAttribute('class','otherInfo hidden-xs');
	otherText.innerHTML='['+that.category+']';
	caption.appendChild(name);
	other.appendChild(otherText);
	caption.appendChild(other);
	thumbnail.appendChild(logo);
	thumbnail.appendChild(caption);
	col.appendChild(thumbnail);
	col.onclick= function () {
		luongnvinfo.selectStream(that.url,that.name);
	}; 
	return col;
};