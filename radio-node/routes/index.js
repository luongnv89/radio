var express = require('express');
var router = express.Router();
var allChannels= require('../data/data.json');
var listChs = allChannels.data,
listLanguages = allChannels.langs,
listCats = allChannels.cats;
listChs.forEach(function(channel){
	channel.lang = listLanguages[channel.language];
	channel.cat = listCats[channel.category];
});
router.get('/',function (req,res) {
	loadPage(req,res,'index',listLanguages,listCats);
});

router.get('/:tags',function (req,res) {
	var pageType='index',
	langs = listLanguages,
	cats = listCats;
	var tags = getTags(req.params.tags);
	console.log("Tags: " + tags);
	if(tags.length>0){
		console.log(tags);
		pageType = tags.indexOf('compact')<0?'index':'compact';
		langs = getLanguages(tags);
		cats = getCategories(tags);
	}
	loadPage(req,res,pageType,langs,cats);
});

function getTags (params) {
	var tags = params.split(','),
	ret = [];
	for(var i=0;i<tags.length;i++){
		if(tags[i]!="") ret.push(tags[i].replace(' ',''));
	}
	return ret;
}
function loadPage (req,res,pageType,langs,cats) {
	var listChannels = [];
	for(var i=0;i<listChs.length;i++){
		if(langs.indexOf(listChs[i].lang)>-1 && cats.indexOf(listChs[i].cat)>-1) listChannels.push(listChs[i]);
	}
	var id=0;
	listChannels.forEach(function(channel){
		channel.id = id;
		id++;
	});
	var pa = (langs.concat(cats)).toString();
	pa+=pageType=='compact'?',compact':'';
	// console.log('data: ' + JSON.stringify(listChannels));
	res.render(pageType, { title: 'Radio online', listChannel:listChannels,listLanguages:listLanguages,listCats:listCats,currentParams:pa});
}

function getLanguages (tags) {
	var l = [];
	for(var i=0;i<tags.length;i++){
		if (listLanguages.indexOf(tags[i])>-1) l.push(tags[i]);
	}
	return l.length==0?listLanguages:l;
}

function getCategories (tags) {
	var l = [];
	for(var i=0;i<tags.length;i++){
		if (listCats.indexOf(tags[i])>-1) l.push(tags[i]);
	}
	return l.length==0?listCats:l;
}
module.exports = router;
