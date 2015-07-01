String.prototype.splitrim = function(t){
	return this.split(new RegExp('\s*'+t+'\s*'))
}

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
	datesFileName: "1913-1924.txt",
	templateObjectsLayerName: "",
	yearScaleTemplateObjectName: "",
	eventTemplateObjectName: "",
	periodTemplateObjectName: "",
	startYear: null,
	endYear: null,
	timelineTitleLine: "",
	timelineDateLine: "",
	timelineCommenLine: "",
	timelineVersion: "",
	timelineAuthorLine: "",
	timelineAuthorLink: "",
	timelineScaleType: "",
	eventsArray: [],
	periodsArray: [],
	artboardWidthPixels: null,
	artboardHeightPixels: null,
	openIllustratorFile: function() {
		var openName = new File(this.templateFileName);
		userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
		this.myDocument = app.open(openName);
	},
	saveIllustratorFile: function() {
	    var doc = app.activeDocument;
	    if ( app.documents.length > 0 ) {
			var saveName = new File(this.timelineResultFileName+".ai");
			doc.saveAs(saveName);
	    }
	},
	close: function() {
		//this.saveIllustratorFile();
		app.quit();
	},
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
			this[name] = line.match(r)[1].replace(/^\s+|\s+$/gm,'');;
		}
	},
	parseSetupLine: function (line) {
		if (line.substring(0,2) != "//" && line.length != 0) {
			if (line.substring(0,1) == "#") {
				this.setupVal("startYear", line);
				this.setupVal("endYear", line);
				this.setupVal("timelineResultFileName", line);
				this.setupVal("timelineWebName", line);
				this.setupVal("timelineTitleLine", line);
				this.setupVal("timelineDateLine", line);
				this.setupVal("timelineCommentLine", line);
				this.setupVal("timelineVersion", line);
				this.setupVal("timelineAuthorLine", line);
				this.setupVal("timelineAuthorLink", line);
				this.setupVal("timelineScaleType", line);
				this.setupVal("artboardWidthPixels", line);
				this.setupVal("artboardHeightPixels", line);
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

function newEvent(eventData, builder) {
	return {
		bldr: builder,
		caption: eventData[2],
		date: eventData[0],
		height: parseInt(eventData[3],10),
		kalend: eventData[4],
		eventItem: null,
		draw: function() {
			this.eventItem = this.bldr.eventItem.duplicate(this.bldr.timelineLayer);
			var path1 = this.eventItem.groupItems["eventItemInternalGroup"].pathItems["path1"];
			var eTFcaption = this.eventItem.groupItems["eventItemInternalGroup"].textFrames["caption"];
			var eTFdate = this.eventItem.textFrames["date"];

			path1.height = this.bldr.eventOrPeriodHeight(this.height);

			eTFcaption.contents = this.caption;
			eTFdate.contents = this.date;

			eIX = this.bldr.timelineDatePosition(this.date);

			this.eventItem.position = [eIX,this.bldr.distanceBetweenYearScaleAndArtboardBottom+this.eventItem.height];
		}
	};
}

function newPeriod(periodData, builder) {
	return {
		bldr: builder,
		caption: periodData[2],
		startDate: periodData[0],
		endDate: periodData[1],
		height: parseInt(periodData[3],10),
		kalend: periodData[4],
		periodItem: null,
		draw: function() {
			this.periodItem = this.bldr.periodItem.duplicate(this.bldr.timelineLayer);
			var path1 = this.periodItem.pathItems["path1"];
			var path2 = this.periodItem.pathItems["path2"];
			var path3 = this.periodItem.pathItems["path3"];
			var pTFdate = this.periodItem.textFrames["date"];
			var pTFcaption = this.periodItem.textFrames["caption"];

			path1.height = this.bldr.eventOrPeriodHeight(this.height);
			path3.height = this.bldr.eventOrPeriodHeight(this.height);

			pTFcaption.contents = this.caption;
			pTFdate.contents = this.startDate+"-"+this.endDate;

			pIXStart = this.bldr.timelineDatePosition(this.startDate);
			pIXEnd = this.bldr.timelineDatePosition(this.endDate);

			this.periodItem.position = [pIXStart,this.bldr.distanceBetweenYearScaleAndArtboardBottom+this.periodItem.height];
			path2.width = pIXEnd - pIXStart;
			path3.position = [pIXEnd,path3.top];

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
	yearScaleShift: 1.2,
	yearScaleShiftHeight: 0,
	scaleYearsCount: null,
	scalesSizeProportion: null,
	scalesSizeProportionPercents: null,
	distanceBetweenYearScaleAndArtboardBottom: null,
	scaleHeight: null,
	drawScale: function() {
		this.yearScale = this.conf.myDocument.groupItems["yearScale"];
		this.centuryScale = this.conf.myDocument.groupItems["centuryScale"];
		this.zeroCenturyScale = this.conf.myDocument.groupItems["zeroCenturyScale"];
		this.bcCenturyScale = this.conf.myDocument.groupItems["bcCenturyScale"];
		if (this.conf.timelineScaleType == "default") {
			this.scaleYearsCount = this.conf.endYear - this.conf.startYear + 1;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.yearScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.distanceBetweenYearScaleAndArtboardBottom = this.yearScale.height*this.yearScaleShift*this.scalesSizeProportion;
			this.drawScaleDefault();
		}
		if (this.conf.timelineScaleType == "century") {
			this.scaleYearsCount = this.conf.endYear - this.conf.startYear + 1;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.yearScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.distanceBetweenYearScaleAndArtboardBottom = this.yearScale.height * this.scalesSizeProportion + 10;
			this.drawScaleCentury();
		}
		if (this.conf.timelineScaleType == "millennium") {
			this.scaleYearsCount = (this.conf.endYear - this.conf.startYear)/100;
			this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.centuryScale.width*this.scaleYearsCount);
			this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
			this.distanceBetweenYearScaleAndArtboardBottom = this.centuryScale.height*this.yearScaleShift*this.scalesSizeProportion;
			this.drawScaleMillennium();
		}
		this.scaleHeight = this.distanceBetweenYearScaleAndArtboardBottom+this.yearScale.height*this.scalesSizeProportion;
	},
	drawScaleDefault: function() {
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

			yS.position = [pX,this.distanceBetweenYearScaleAndArtboardBottom];
			pX = pX + yS.width;
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

			yS.position = [pX,this.distanceBetweenYearScaleAndArtboardBottom];
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
			var fins = cS.groupItems["fins"].pathItems;
			for (var j = 0; j < fins.length; j++ ) {
				fins[j].strokeWidth = fins[j].strokeWidth * this.scalesSizeProportion;
			}

			var centuryScaleTextFrame = cS.textFrames["century"];
			centuryScaleTextFrame.contents = centuryCaption;

			cS.position = [pX,this.distanceBetweenYearScaleAndArtboardBottom];
			pX = pX + cS.width;
		}	
	},
}

var builder = {
	conf: null,
	scale: null,
	timelineLayer: null,
	templateLayer: null,
	eventItem: null,
	periodItem: null,
	headShift: 0.1,
	minEventOrPeriodLegsHeight: 50,
	eventsAndPeriodsObjectsArray: [],
	scaleHeight: null,
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
		var verticalTimelineFreeField = this.conf.artboardHeightPixels*(1-this.headShift) - this.scaleHeight;
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
		end.setFullYear(this.conf.endYear);
		var allDaysInTimeLine = this.daysBetween(start,end);
		var daysFromStartToPosition = this.daysBetween(start,now);
		var dateXPositionInPixels = (this.conf.artboardWidthPixels/allDaysInTimeLine)*daysFromStartToPosition;
		return dateXPositionInPixels;
	},
	drawDetails: function() {
		var centerX = this.conf.artboardWidthPixels/2;
		var titleY = this.conf.artboardHeightPixels - this.conf.artboardHeightPixels/30;
		var title = this.newTextFrame(this.conf.timelineTitleLine, centerX, titleY);
		title.textRange.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
		title.textRange.paragraphs[0].characterAttributes.size = 30;
		var date = new Date();
		var comment = this.conf.timelineDateLine + ": " + date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() + ". ";
		comment += this.conf.timelineCommentLine;
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
			var file = new File(this.conf.timelineWebName);
			saveOpts = new PDFSaveOptions();
			saveOpts.compatibility = PDFCompatibility.ACROBAT7;
			saveOpts.preserveEditability = false;
			saveOpts.optimization = true;
			saveOpts.generateThumbnails = false;
			doc.saveAs(file, saveOpts);
		}
	}
};

conf.readTimelineSetup();
conf.openIllustratorFile();

builder.conf = conf;
builder.scale = scale;
builder.prepareObjects();

scale.conf = conf;
scale.timelineLayer = builder.timelineLayer;
scale.drawScale();

builder.scaleHeight = scale.scaleHeight;
builder.distanceBetweenYearScaleAndArtboardBottom = scale.distanceBetweenYearScaleAndArtboardBottom;

builder.drawArtboard();
builder.drawEventsAndPeriods();
builder.drawDetails();
builder.finishingTouch();

exportTimeline.conf = conf;
exportTimeline.saveFileToPDF();

conf.close();

//Vivodit preduprejdenie o starom stile v datah
//Ukazivat kalendar u dati
//God sokrati do dvuh cifr

// vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
