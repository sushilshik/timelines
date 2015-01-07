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
	timelineTitleName: "",
	timelineVersion: "",
	timelineAuthorLine: "",
	timelineAuthorLink: "",
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
			this[name] = line.match(r)[1];
		}
	},
	parseSetupLine: function (line) {
		if (line.substring(0,2) != "//" && line.length != 0) {
			if (line.substring(0,1) == "#") {
				this.setupVal("startYear", line);
				this.setupVal("endYear", line);
				this.setupVal("timelineResultFileName", line);
				this.setupVal("timelineWebName", line);
				this.setupVal("timelineTitleName", line);
				this.setupVal("timelineVersion", line);
				this.setupVal("timelineAuthorLine", line);
				this.setupVal("timelineAuthorLink", line);
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

			eIX = this.bldr.timelineDatePosition(this.date) * this.bldr.conf.artboardWidthPixels;

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

			pIXStart = this.bldr.timelineDatePosition(this.startDate) * this.bldr.conf.artboardWidthPixels;
			pIXEnd = this.bldr.timelineDatePosition(this.endDate) * this.bldr.conf.artboardWidthPixels;

			this.periodItem.position = [pIXStart,this.bldr.distanceBetweenYearScaleAndArtboardBottom+this.periodItem.height];
			path2.width = pIXEnd - pIXStart;
			path3.position = [pIXEnd,path3.top];

		}
	};
}

var builder = {
	conf: null,
	timelineLayer: null,
	templateLayer: null,
	yearScale: null,
	eventItem: null,
	periodItem: null,
	yearScaleShift: 1.2,
	headShift: 0.1,
	minEventOrPeriodLegsHeight: 50,
	scaleYearsCount: null,
	scalesSizeProportion: null,
	scalesSizeProportionPercents: null,
	distanceBetweenYearScaleAndArtboardBottom: null,
	eventsAndPeriodsObjectsArray: [],
	prepareObjects: function() {
		this.timelineLayer = this.conf.myDocument.layers["timelineLayer"];  
		this.templateLayer = this.conf.myDocument.layers["templateLayer"];  
		this.yearScale = this.conf.myDocument.groupItems["yearScale"];
		this.eventItem = this.conf.myDocument.groupItems["eventItem"];
		this.periodItem = this.conf.myDocument.groupItems["periodItem"];
		this.scaleYearsCount = this.conf.endYear - this.conf.startYear + 1;
		this.scalesSizeProportion = this.conf.artboardWidthPixels/(this.yearScale.width*this.scaleYearsCount);
		this.scalesSizeProportionPercents = this.scalesSizeProportion*100;
		this.distanceBetweenYearScaleAndArtboardBottom = this.yearScale.height*this.yearScaleShift*this.scalesSizeProportion;
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
	},
	drawArtboard: function() {
		this.conf.myDocument.artboards[0].artboardRect = 
			[0,this.conf.artboardHeightPixels,this.conf.artboardWidthPixels,0];
	},
	drawScale: function() {
		var pX = 0;
		for (var i = this.conf.startYear; i <= this.conf.endYear; i++) {
			var yS = this.yearScale.duplicate(this.timelineLayer);
			yS.resize(this.scalesSizeProportionPercents, this.scalesSizeProportionPercents);
			yS.position = [pX,this.distanceBetweenYearScaleAndArtboardBottom];
			pX = pX + yS.width;
			var yearScaleTextFrames = yS.textFrames["year"];
			yearScaleTextFrames.contents = i;
		}	
	},
	drawEventsAndPeriods: function() {
		for (var i = 0; i < this.eventsAndPeriodsObjectsArray.length; i++) {
			this.eventsAndPeriodsObjectsArray[i].draw();
		}
	},
	eventOrPeriodHeight: function(heightPercent) {
		var scaleHeight = this.distanceBetweenYearScaleAndArtboardBottom+this.yearScale.height*this.scalesSizeProportion;
		var verticalTimelineFreeField = this.conf.artboardHeightPixels*(1-this.headShift) - scaleHeight;
		return this.minEventOrPeriodLegsHeight + verticalTimelineFreeField*heightPercent/100;
	},
	timelineDatePosition: function(dateLine) {
		var date = dateLine.split(".");
		var day = parseInt(date[0],10);
		var month = parseInt(date[1],10)-1;
		var year = parseInt(date[2],10);	
		var now = new Date(year, month, day);
		var start = new Date(this.conf.startYear, 0, 0);
		var end = new Date(this.conf.endYear+1, 0, 0);
		var diffStartEvent = now - start;
		var diffStartEnd = end - start;
		return diffStartEvent / diffStartEnd;
	},
	drawDetails: function() {
		//TODO
	},
	drawTestLinesFromSetupFile: function() {
		var dates = this.conf.readInCSV();
		var x = 230;
		var y = 230;
		for (var i = 0; i < dates.length; i++) {
			this.newTextFrame(dates[i][0], x, y);
			x = x + 30;
			y = y + 30;
		}
	},
	finishingTouch: function() {
		this.templateLayer.visible = true;;
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
			saveOpts.generateThumbnails = true;
			saveOpts.preserveEditability = false;
			doc.saveAs(file, saveOpts);
		}
	}

};

conf.readTimelineSetup();
conf.openIllustratorFile();

builder.conf = conf;
builder.prepareObjects();

builder.drawArtboard();
builder.drawScale();
builder.drawEventsAndPeriods();
builder.drawDetails();
builder.finishingTouch();

exportTimeline.conf = conf;
exportTimeline.saveFileToPDF();

//conf.saveIllustratorFile();
conf.close();

//Nado vivodit preduprejdenie o starom stile.
//Ukazivat kalendar u dati
//God sokrati do dvuh cifr

// vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
