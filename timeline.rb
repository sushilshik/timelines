#encoding: utf-8
require 'fileutils'

datesFileName = ARGV[0]

filename = "timeline.jsx"
text = File.read(filename) 
puts = text.gsub(/	datesFileName: ".*",/, "	datesFileName: \""+datesFileName+"\",")
File.open(filename, "w") { |file| file << puts }

appendLine = ARGV[1]

if appendLine != nil && appendLine.length > 0
	open(datesFileName, 'a') { |f|
	f.puts appendLine
}
end

pattern = Regexp.new("^#timelineWebName:(.*)$")
datesFile = File.read(datesFileName)
timelineWebName = !(match_data = datesFile.match(pattern)).nil? ? match_data[1] : ""

system('C:\Program Files\Adobe\Adobe Illustrator CC 2014 (32 Bit)\Support Files\Contents\Windows\Illustrator.exe','C:\Users\mike\Desktop\timeline\timeline.jsx')

FileUtils.copy(timelineWebName+".pdf", "z:\\")

p timelineWebName

#File.open("log.txt", "a") { |file| file << appendLine+"\n" }
# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
