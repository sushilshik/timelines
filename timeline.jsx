String.prototype.splitrim = function(t){
	return this.split(new RegExp('\s*'+t+'\s*'))
}

if(typeof JSON!=='object'){JSON={};}(function(){'use strict';function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf();};}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());;  

function forEach(collection, fn) {
	var n = collection.length;
	for(var i=0; i<n; ++i) {
		fn(collection[i]);
	}
}

var conf = {
	myDocument: null,
	templateFileName: "template.ai",
	timelineResultFileName: null,
	timelineWebName: null,
	datesFileName: "pushkin.txt",
	timelineLang: "ru",
	templateObjectsLayerName: "",
	yearScaleTemplateObjectName: "",
	eventTemplateObjectName: "",
	periodTemplateObjectName: "",
	startYear: null,
	endYear: null,
	timelineTitleLineRu: "",
	timelineTitleLineEn: "",
	timelineCommenLineRu: "",
	timelineCommenLineEn: "",
	timelineVersion: "",
	timelineAuthorLine: "",
	timelineAuthorLink: "",
	timelineScaleType: "",
	timelineDefaultScaleYearFontSizeRatio: "",
	timelineDefaultScaleMonthXSpaceRatio: "",
	timelineDefaultScaleMonthYSpaceRatio: "",
	timelineDefaultScaleYearXSpaceRatio: "",
	timelineDefaultScaleYearYSpaceRatio: "",
	timelineDefaultScaleSpaceBetweenScaleAndArtboardBottomRatio: "",
	timelineDefaultScaleFinsHeightRatio: "",
	timelineDefaultScaleFinsSizeWidthRatio: "",
	timelineDefaultScaleMonthsFontSizeRatio: "",
	timelineMillenniumScaleCenturyFontSizeRatio: "",
	timelineMillenniumScaleYearXSpaceRatio: "",
	timelineMillenniumScaleYearYSpaceRatio: "",
	timelineMillenniumScaleCenturyXSpaceRatio: "",
	timelineMillenniumScaleCenturyYSpaceRatio: "",
	timelineMillenniumScaleSpaceBetweenScaleAndArtboardBottomRatio: "",
	timelineMillenniumScaleFinsHeightRatio: "",
	timelineMillenniumScaleFinsSizeWidthRatio: "",
	timelineMillenniumScaleYearsFontSizeRatio: "",
	timelineStyles: {},
	eventsArray: [],
	periodsArray: [],
	artboardWidthPixels: null,
	artboardHeightPixels: null,
	readTimelineSetup: function() {  
		fileObj = File( this.datesFileName );  
		var fileArray, thisLine, csvArray;  
		fileArray =[];  
		//if ( !csvFile.exists ) { return fileArray; } 
		fileObj.open( 'r' );  
		while( !fileObj.eof ) {  
			thisLine = fileObj.readln();  
			this.parseSetupLine(thisLine);
		}  
		fileObj.close();  
		this.startYear = parseInt(this.startYear,10);
		this.endYear = parseInt(this.endYear,10);
		this.artboardWidthPixels = parseInt(this.artboardWidthPixels,10);
		this.artboardHeightPixels = parseInt(this.artboardHeightPixels,10);
		return fileArray;  
	},
	setupVal: function(name, line) {
		var r = new RegExp("^#"+name+":\s*(.*)\s*$");
		if (line.match(r) != null && line.match(r).length == 2) {
			this[name] = line.match(r)[1].replace(/^\s+|\s+$/gm,'');
		}
	},
	setupStylesVal: function(name, line) {
		var r = new RegExp("^#"+name+":\s*(.*)\s*$");
		if (line.match(r) != null) {
			//$.write(line.match(r).length);
			//$.write(">>> " + line.match(r)[1]);
		}
		if (line.match(r) != null && line.match(r).length == 2) {
			var style = JSON.parse(line.match(r)[1]);
			this[name][style.name] = style;
		}
	},
	parseSetupLine: function (line) {
		if (line.substring(0,2) != "//" && line.length != 0) {
			if (line.substring(0,1) == "#") {
				this.setupVal("startYear", line);
				this.setupVal("endYear", line);
				this.setupVal("timelineResultFileName", line);
				this.setupVal("timelineWebName", line);
				this.setupVal("timelineTitleLineRu", line);
				this.setupVal("timelineTitleLineEn", line);
				this.setupVal("timelineCommentLineRu", line);
				this.setupVal("timelineCommentLineEn", line);
				this.setupVal("timelineVersion", line);
				this.setupVal("timelineAuthorLine", line);
				this.setupVal("timelineAuthorLink", line);
				this.setupVal("timelineScaleType", line);
				this.setupVal("artboardWidthPixels", line);
				this.setupVal("artboardHeightPixels", line);
				this.setupVal("timelineDefaultScaleYearFontSizeRatio", line);
				this.setupVal("timelineDefaultScaleMonthXSpaceRatio", line);
				this.setupVal("timelineDefaultScaleMonthYSpaceRatio", line);
				this.setupVal("timelineDefaultScaleYearXSpaceRatio", line);
				this.setupVal("timelineDefaultScaleYearYSpaceRatio", line);
				this.setupVal("timelineDefaultScaleSpaceBetweenScaleAndArtboardBottomRatio", line);
				this.setupVal("timelineDefaultScaleFinsHeightRatio", line);
				this.setupVal("timelineDefaultScaleFinsSizeWidthRatio", line);
				this.setupVal("timelineDefaultScaleMonthsFontSizeRatio", line);
				this.setupVal("timelineMillenniumScaleCenturyFontSizeRatio", line);
				this.setupVal("timelineMillenniumScaleYearXSpaceRatio", line);
				this.setupVal("timelineMillenniumScaleYearYSpaceRatio", line);
				this.setupVal("timelineMillenniumScaleCenturyXSpaceRatio", line);
				this.setupVal("timelineMillenniumScaleCenturyYSpaceRatio", line);
				this.setupVal("timelineMillenniumScaleSpaceBetweenScaleAndArtboardBottomRatio", line);
				this.setupVal("timelineMillenniumScaleFinsHeightRatio", line);
				this.setupVal("timelineMillenniumScaleFinsSizeWidthRatio", line);
				this.setupVal("timelineMillenniumScaleYearsFontSizeRatio", line);
				this.setupStylesVal("timelineStyles", line);
			} else {
				csvArray = line.splitrim(',');  
				if (csvArray[1].length != 0) {
					this.periodsArray.push(csvArray);
				} else {
					this.eventsArray.push(csvArray);
				}
			}
		}
	}
}

var lang = {
	conf: null,
	caption: function(data) {
		if (this.conf.timelineLang == "ru") return data[2]; 
		if (this.conf.timelineLang == "en") return data[3]; 
	},
	titleLine: function() {
		if (this.conf.timelineLang == "ru") return this.conf.timelineTitleLineRu;
		if (this.conf.timelineLang == "en") return this.conf.timelineTitleLineEn;
	},
	commentLine: function() {
		if (this.conf.timelineLang == "ru") return this.conf.timelineCommentLineRu;
		if (this.conf.timelineLang == "en") return this.conf.timelineCommentLineEn;
	},
	webNameSuffix: function() {
		if (this.conf.timelineLang == "ru") return "";
		if (this.conf.timelineLang == "en") return "_en";
	}
}

function prepareCaption(line) {
	line = line.split('###').join(',');
	return line;
}

function newEvent(eventData, builder) {
	return {
		bldr: builder,
		caption: lang.caption(eventData),
		date: eventData[0],
		height: parseFloat(eventData[4]),
		kalend: eventData[5],
		eventItem: null,
		style: eventData[6],
		draw: function() {
			this.eventItem = this.bldr.eventItem.duplicate(this.bldr.timelineLayer);
			var path1 = this.eventItem.groupItems["eventItemInternalGroup"].pathItems["path1"];
			var eTFcaption = this.eventItem.groupItems["eventItemInternalGroup"].textFrames["caption"];
			var eTFdate = this.eventItem.textFrames["date"];

			path1.height = this.bldr.eventOrPeriodHeight(this.height);

			eIX = this.bldr.timelineDatePosition(this.date);

			this.eventItem.position = [eIX.pixels,this.bldr.scalePositionX+this.eventItem.height];

			eTFcaption.contents = prepareCaption(this.caption);
			eTFdate.contents = this.date;

			//this.eventItem.uRL = "asdf";
			//var tagList = this.eventItem.tags;
			//if (tagList.length == 0) {
			//	var tag = tagList.add();
			//	tag.name = "OneWord";
			//	tag.value = "anything you want";
			//}
		}
	};
}

function newPeriod(periodData, builder) {
	return {
		bldr: builder,
		caption: lang.caption(periodData),
		startDate: periodData[0],
		endDate: periodData[1],
		height: parseFloat(periodData[4]),
		kalend: periodData[5],
		periodItem: null,
		style: periodData[6],
		draw: function() {
			this.periodItem = this.bldr.periodItem.duplicate(this.bldr.timelineLayer);
			var path1 = this.periodItem.pathItems["path1"];
			var path2 = this.periodItem.pathItems["path2"];
			var path3 = this.periodItem.pathItems["path3"];
			var pTFdate = this.periodItem.textFrames["date"];
			var pTFcaption = this.periodItem.textFrames["caption"];

			path1.height = this.bldr.eventOrPeriodHeight(this.height);
			path3.height = this.bldr.eventOrPeriodHeight(this.height);

			pIXStart = this.bldr.timelineDatePosition(this.startDate);
			pIXEnd = this.bldr.timelineDatePosition(this.endDate);

			pTFcaption.contents = prepareCaption(this.caption);
			pTFdate.contents = this.startDate+"-"+this.endDate;

			this.periodItem.position = [pIXStart.pixels,this.bldr.scalePositionX+this.periodItem.height];
			path2.width = pIXEnd.pixels - pIXStart.pixels;
			path3.position = [pIXEnd.pixels,path3.top];

			if (typeof this.style != 'undefined' && 
					this.style != null && 
					this.style.length > 0 && 
					this.bldr.conf.timelineStyles[this.style] != null) {
				var stl = this.bldr.conf.timelineStyles[this.style];
				if (typeof stl.strokeWidth != 'undefined' && 
						stl.strokeWidth != null && 
						stl.strokeWidth.length > 0 ) {
					path2.strokeWidth = parseInt(stl.strokeWidth);
				}
				if (typeof stl.strokeColor != 'undefined' && 
						stl.strokeColor != null && 
						stl.strokeColor.length > 0 ) {
					var c = stl.strokeColor.split(",");
					var rgbColor = new RGBColor();
					rgbColor.red = parseInt(c[0]);
					rgbColor.green = parseInt(c[1]);
					rgbColor.blue = parseInt(c[2]);
					path2.strokeColor = rgbColor;
				}
			}

		}
	};
}

var scale = {
	conf: null,
	yearScale: null,
	timelineLayer: null,
	centuryScale: null,
	zeroCenturyScale: null,
	bcCenturyScale: null,
	yearScaleShiftHeight: 0,
	scaleYearsCount: null,
	scalesSizeProportion: null,
	scalesSizeProportionPercents: null,
	scalePositionX: null,
	//scaleHeight: null,
	drawScale: function() {
		this.yearScale = this.conf.myDocument.groupItems["yearScale"];
		this.centuryScale = this.conf.myDocument.groupItems["centuryScale"];
		this.zeroCenturyScale = this.conf.myDocument.groupItems["zeroCenturyScale"];
		this.bcCenturyScale = this.conf.myDocument.groupItems["bcCenturyScale"];
		if (this.conf.timelineScaleType == "default") {
			this.scaleYearsCount = this.conf.endYear - this.conf.startYear + 1;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.yearScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.scalePositionX = this.yearScale.height*this.scalesSizeProportion*this.conf.timelineDefaultScaleSpaceBetweenScaleAndArtboardBottomRatio;
			this.drawScaleDefault();
		}
		if (this.conf.timelineScaleType == "century") {
			this.scaleYearsCount = this.conf.endYear - this.conf.startYear + 1;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.yearScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.scalePositionX = this.yearScale.height * this.scalesSizeProportion*this.conf.timelineDefaultScaleSpaceBetweenScaleAndArtboardBottomRatio + 10;
			this.drawScaleCentury();
		}
		if (this.conf.timelineScaleType == "millennium") {
			this.scaleYearsCount = (this.conf.endYear - this.conf.startYear)/100;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.centuryScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.scalePositionX = this.centuryScale.height*this.scalesSizeProportion*this.conf.timelineMillenniumScaleSpaceBetweenScaleAndArtboardBottomRatio;
			this.drawScaleMillennium();
		}
		//this.scaleHeight = this.tboardBottom+this.yearScale.height*this.scalesSizeProportion;
	},
	drawScaleDefault: function() {
		var pX = 0;
		for (var i = this.conf.startYear; i <= this.conf.endYear; i++) {
			var yS = this.yearScale.duplicate(this.timelineLayer);
			yS.resize(this.scalesSizeProportionPercents, this.scalesSizeProportionPercents);
			var fins = yS.groupItems["finsAndNumbers"].groupItems["fins"].pathItems;
			for (var j = 0; j < fins.length; j++ ) {
				fins[j].strokeWidth = fins[j].strokeWidth * this.scalesSizeProportion*this.conf.timelineDefaultScaleFinsSizeWidthRatio;
				fins[j].resize(100, 100*this.conf.timelineDefaultScaleFinsHeightRatio);
			}

			var months = yS.groupItems["finsAndNumbers"].groupItems["months"].textFrames;
			for (var j = 0; j < months.length; j++ ) {
				months[j].textRange.paragraphs[0].characterAttributes.size = months[j].textRange.paragraphs[0].characterAttributes.size*this.conf.timelineDefaultScaleMonthsFontSizeRatio;
				months[j].top = months[j].top*this.conf.timelineDefaultScaleMonthYSpaceRatio;
				months[j].left = months[j].left*this.conf.timelineDefaultScaleMonthXSpaceRatio;
			}

			var yearScaleTextFrame = yS.textFrames["year"];
			yearScaleTextFrame.contents = i;
			yearScaleTextFrame.textRange.paragraphs[0].characterAttributes.size = yearScaleTextFrame.textRange.paragraphs[0].characterAttributes.size*this.conf.timelineDefaultScaleYearFontSizeRatio;
			yearScaleTextFrame.top = yearScaleTextFrame.top*this.conf.timelineDefaultScaleYearYSpaceRatio;
			yearScaleTextFrame.left = yearScaleTextFrame.left*this.conf.timelineDefaultScaleYearXSpaceRatio;

			yS.position = [pX,this.scalePositionX];
			pX = pX + yS.width;
		}	
	},
	drawScaleMillennium: function() {
		var pX = 0;
		for (var i = this.conf.startYear; i <= this.conf.endYear; i += 100) {
			var cS = null;
			var centuryCaption = i;
			if (i < 0) {
				cS = this.bcCenturyScale.duplicate(this.timelineLayer);
			} else if (i == 0) {
				cS = this.zeroCenturyScale.duplicate(this.timelineLayer);
				centuryCaption = 1;
			} else {
				cS = this.centuryScale.duplicate(this.timelineLayer);
			}
			cS.resize(this.scalesSizeProportionPercents, this.scalesSizeProportionPercents);
			var fins = cS.groupItems["finsAndNumbers"].groupItems["fins"].pathItems;
			for (var j = 0; j < fins.length; j++ ) {
				fins[j].strokeWidth = fins[j].strokeWidth * this.scalesSizeProportion*this.conf.timelineMillenniumScaleFinsSizeWidthRatio;
				fins[j].resize(100, 100*this.conf.timelineMillenniumScaleFinsHeightRatio);
			}

			var years = cS.groupItems["finsAndNumbers"].groupItems["years"].textFrames;
			for (var j = 0; j < years.length; j++ ) {
				years[j].textRange.paragraphs[0].characterAttributes.size = years[j].textRange.paragraphs[0].characterAttributes.size*this.conf.timelineMillenniumScaleYearsFontSizeRatio;
				years[j].top = years[j].top*this.conf.timelineMillenniumScaleYearYSpaceRatio;
				years[j].left = years[j].left*this.conf.timelineMillenniumScaleYearXSpaceRatio;
			}

			var centuryScaleTextFrame = cS.textFrames["century"];
			centuryScaleTextFrame.contents = centuryCaption;
			centuryScaleTextFrame.textRange.paragraphs[0].characterAttributes.size = centuryScaleTextFrame.textRange.paragraphs[0].characterAttributes.size*this.conf.timelineMillenniumScaleCenturyFontSizeRatio;
			centuryScaleTextFrame.top = centuryScaleTextFrame.top*this.conf.timelineMillenniumScaleCenturyYSpaceRatio;
			centuryScaleTextFrame.left = centuryScaleTextFrame.left*this.conf.timelineMillenniumScaleCenturyXSpaceRatio;

			cS.position = [pX,this.scalePositionX];
			pX = pX + cS.width;
		}	
	},
	drawScaleCentury: function() {
		var pX = 0;
		for (var i = this.conf.startYear; i <= this.conf.endYear; i++) {
			var yS = this.yearScale.duplicate(this.timelineLayer);
			yS.resize(this.scalesSizeProportionPercents, this.scalesSizeProportionPercents);
			var fins = yS.groupItems["finsAndNumbers"].groupItems["fins"].pathItems;
			for (var j = 0; j < fins.length; j++ ) {
				fins[j].strokeWidth = fins[j].strokeWidth * this.scalesSizeProportion;
			}

			var yearScaleTextFrame = yS.textFrames["year"];
			yearScaleTextFrame.contents = i;

			yearScaleTextFrame.textRange.paragraphs[0].characterAttributes.size = 12;
			yearScaleTextFrame.top = yearScaleTextFrame.top - 8;

			yS.position = [pX,this.scalePositionX];
			pX = pX + yS.width;
		}	
	}
}

var builder = {
	conf: null,
	scale: null,
	timelineLayer: null,
	templateLayer: null,
	eventItem: null,
	periodItem: null,
	headShift: 0.15,
	minEventOrPeriodLegsHeight: 50,
	eventsAndPeriodsObjectsArray: [],
	//scaleHeight: null,
	openIllustratorFile: function() {
		var openName = new File(this.conf.templateFileName);
		userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
		this.conf.myDocument = app.open(openName);
	},
	saveIllustratorFile: function() {
	    var doc = app.activeDocument;
	    if ( app.documents.length > 0 ) {
			var saveName = new File(this.conf.timelineResultFileName+".ai");
			doc.saveAs(saveName);
	    }
	},
	close: function() {
		//this.saveIllustratorFile();
		app.quit();
	},
	prepareObjects: function() {
		this.timelineLayer = this.conf.myDocument.layers["timelineLayer"];  
		this.templateLayer = this.conf.myDocument.layers["templateLayer"];  
		this.eventItem = this.conf.myDocument.groupItems["eventItem"];
		this.periodItem = this.conf.myDocument.groupItems["periodItem"];
		for (var i = 0; i < this.conf.eventsArray.length; i++) {
			var eData = this.conf.eventsArray[i];
			this.eventsAndPeriodsObjectsArray.push(newEvent(eData,this));
		}
		for (var i = 0; i < this.conf.periodsArray.length; i++) {
			var pData = this.conf.periodsArray[i];
			this.eventsAndPeriodsObjectsArray.push(newPeriod(pData,this));
		}
		this.eventsAndPeriodsObjectsArray.sort(function(a,b) { return b.height - a.height } );
	},
	newTextFrame: function(text, x, y) {
		var myTextFrame = this.conf.myDocument.textFrames.add();
		myTextFrame.position = [x,y];
		myTextFrame.contents = text;
		return myTextFrame;
	},
	drawArtboard: function() {
		this.conf.myDocument.artboards[0].artboardRect = 
			[0,this.conf.artboardHeightPixels,this.conf.artboardWidthPixels,0];
	},
	drawEventsAndPeriods: function() {
		for (var i = 0; i < this.eventsAndPeriodsObjectsArray.length; i++) {
			this.eventsAndPeriodsObjectsArray[i].draw();
		}
	},
	eventOrPeriodHeight: function(heightPercent) {
		var verticalTimelineFreeField = this.conf.artboardHeightPixels*(1-this.headShift) - this.scalePositionX;
		return this.minEventOrPeriodLegsHeight + verticalTimelineFreeField*heightPercent/100;
	},
	daysBetween: function(date1, date2) {
		var ONE_DAY = 1000 * 60 * 60 * 24
		var date1_ms = date1.getTime()
		var date2_ms = date2.getTime()
		var difference_ms = Math.abs(date1_ms - date2_ms)
		return Math.round(difference_ms/ONE_DAY)
	},
	timelineDatePosition: function(dateLine) {
		var date = dateLine.split(".");
		var day = parseInt(date[0],10);
		var month = parseInt(date[1],10)-1;
		var year = parseInt(date[2],10);	
		var now = new Date(year, month, day);
		now.setFullYear(year);
		var start = new Date(0, 0, 0);
		start.setFullYear(this.conf.startYear-1);
		var end = new Date(0, 0, 0);
		var endYear = this.conf.endYear;
		if (this.conf.timelineScaleType == "millennium") endYear--;
		end.setFullYear(endYear);
		var allDaysInTimeLine = this.daysBetween(start,end);
		var daysFromStartToPosition = this.daysBetween(start,now);
		var dateXPositionInPixels = (this.conf.artboardWidthPixels/allDaysInTimeLine)*daysFromStartToPosition;
		var position = {
			pixels: dateXPositionInPixels,
			daysFromStartToPosition: daysFromStartToPosition,
			allDaysInTimeLine: allDaysInTimeLine
		}
		return position;
	},
	drawDetails: function() {
		var centerX = this.conf.artboardWidthPixels/2;
		var titleY = this.conf.artboardHeightPixels - this.conf.artboardHeightPixels/30;
		var title = this.newTextFrame(lang.titleLine(), centerX, titleY);
		title.textRange.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
		title.textRange.paragraphs[0].characterAttributes.size = 30;
		var date = new Date();
		var comment = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() + ". ";
		comment += lang.commentLine();
		var commentFrame = this.newTextFrame(comment, centerX, titleY - 40);
		commentFrame.textRange.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
		commentFrame.textRange.paragraphs[0].characterAttributes.size = 15;
	},
	finishingTouch: function() {
		this.templateLayer.visible = true;
		this.templateLayer.remove();
	}
}

var exportTimeline = {
	conf: null,
	exportFileToPNG24: function() {
		if ( app.documents.length > 0 ) {
			//var exportOptions = new ExportOptionsPNG24();
			var exportOptions = new ExportOptionsJPEG();
			//var type = ExportType.PNG24;
			var type = ExportType.JPEG;
			var file = new File(this.conf.timelineWebName);
			exportOptions.antiAliasing = false;
			//exportOptions.transparency = false;
			//exportOptions.saveAsHTML = false;
			exportOptions.horizontalScale = 50;
			exportOptions.verticalScale = 50;
			app.activeDocument.exportFile( file, type, exportOptions );
		}
	},
	saveFileToPDF: function() {
		var doc = app.activeDocument;
		if ( app.documents.length > 0 ) {
			var file = new File(this.conf.timelineWebName + lang.webNameSuffix());
			saveOpts = new PDFSaveOptions();
			saveOpts.compatibility = PDFCompatibility.ACROBAT5;
			saveOpts.pDFXStandard = PDFXStandard.PDFXNONE;
			saveOpts.preserveEditability = false;
			saveOpts.optimization = true;
			saveOpts.generateThumbnails = false;
			saveOpts.enablePlainText = false;
			doc.saveAs(file, saveOpts);
		}
	}
};

var work = {
	conf: null,
	lang: null,
	builder: null,
	scale: null,
	exportTimeline: null,
	make: function() {
		this.conf.readTimelineSetup();

		this.lang.conf = conf;

		this.builder.conf = conf;
		this.builder.scale = scale;
		this.builder.openIllustratorFile();
		this.builder.prepareObjects();

		this.scale.conf = conf;
		this.scale.timelineLayer = builder.timelineLayer;
		this.scale.drawScale();

		//builder.ight = scale.scaleHeight;
		this.builder.scalePositionX = scale.scalePositionX;

		this.builder.drawArtboard();
		this.builder.drawEventsAndPeriods();
		this.builder.drawDetails();
		this.builder.finishingTouch();

		this.exportTimeline.conf = conf;
		this.exportTimeline.saveFileToPDF();

		this.builder.close();
	}
}

work.conf = conf;
work.lang = lang;
work.builder = builder;
work.scale = scale;
work.exportTimeline = exportTimeline;
work.make();

//Vivodit preduprejdenie o starom stile v datah
//Ukazivat kalendar u dati
//God sokrati do dvuh cifr

// vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
