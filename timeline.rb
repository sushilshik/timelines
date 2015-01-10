#encoding: UTF-8
require 'fileutils'

pdf_goal_dir = "z:\\"

illustrator_exe = 'C:\Program Files\Adobe\Adobe Illustrator CC 2014 (32 Bit)\Support Files\Contents\Windows\Illustrator.exe'
timeline_jsx = 'timeline.jsx'

datesFileName = ARGV[0]

text = File.read(timeline_jsx) 
t = text.gsub(/	datesFileName: ".*",/, "	datesFileName: \""+datesFileName+"\",")
File.open(timeline_jsx, "w:UTF-8") { |file| file << t } 

if ARGV[1] != nil && ARGV[1].length > 0
	appendLine = ARGV[1].dup.force_encoding("cp1251").encode("cp866")
	File.open(datesFileName, "a+:UTF-8") { |file| file.puts appendLine }
end

pattern = Regexp.new("^#timelineWebName:(.*)$")
datesFile = File.read(datesFileName)
timelineWebName = !(match_data = datesFile.match(pattern)).nil? ? match_data[1] : ""

system(illustrator_exe, timeline_jsx)

if ARGV[2] != nil && ARGV[2].lenght > 0 && ARGV[2] == "move_pdf" && File.directory?(pdf_goal_dir)
	FileUtils.move(timelineWebName+".pdf", pdf_goal_dir)
end

p timelineWebName

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
