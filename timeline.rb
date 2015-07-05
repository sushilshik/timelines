#encoding: UTF-8
require 'fileutils'

datesFileName = ARGV[0].strip
timelineLang = ARGV[1].strip
line = ARGV[2].strip
order = ARGV[3].strip

def job(datesFileName, timelineLang, line, order)

	pdf_goal_dir = "z:\\"
	illustrator_exe = 'C:\Program Files\Adobe\Adobe Illustrator CC 2014 (32 Bit)\Support Files\Contents\Windows\Illustrator.exe'
	timeline_jsx = 'timeline.jsx'

	text = File.read(timeline_jsx) 
	t = text.gsub(/	datesFileName: ".*",/, "	datesFileName: \""+datesFileName+"\",")
	File.open(timeline_jsx, "w:UTF-8") { |file| file << t } 


	text = File.read(timeline_jsx) 
	t = text.gsub(/	timelineLang: ".*",/, "	timelineLang: \""+timelineLang+"\",")
	File.open(timeline_jsx, "w:UTF-8") { |file| file << t } 

	if line != nil && line.length > 0
		appendLine = line.dup.force_encoding("cp1251").encode("cp866")
		File.open(datesFileName, "a+:UTF-8") { |file| file.puts appendLine }
	end

	pattern = Regexp.new("^#timelineWebName:(.*)$")
	datesFile = File.read(datesFileName)
	timelineWebName = !(match_data = datesFile.match(pattern)).nil? ? match_data[1] : ""

	system(illustrator_exe, timeline_jsx)

	if order != nil && order.length > 0 && order == "move_pdf" && File.directory?(pdf_goal_dir)
		timelineWebNameLangSuffix = ""
		timelineWebNameLangSuffix = "_en" if timelineLang == "en"
		FileUtils.move(timelineWebName+timelineWebNameLangSuffix+".pdf", pdf_goal_dir)
	end

	p timelineWebName
end

if datesFileName == "buildAll"
        files = Dir.open("./").inject([]) do |files, file|
            files << file if File.basename(file).scan(/.*txt$/).size > 0 
            files
        end
	files.each do |f|
		job(f, timelineLang, line, order)
	end
else
	job(datesFileName, timelineLang, line, order)
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
