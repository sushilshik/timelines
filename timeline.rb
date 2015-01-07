#encoding: UTF-8
require 'fileutils'

datesFileName = ARGV[0]

filename = "timeline.jsx"
text = File.read(filename) 
puts = text.gsub(/	datesFileName: ".*",/, "	datesFileName: \""+datesFileName+"\",")
File.open(filename, "w:UTF-8") { |file| file << puts }

appendLine = ARGV[1].dup.force_encoding("cp1251").encode("cp866")

if appendLine != nil && appendLine.length > 0
	File.open(datesFileName, "a+:UTF-8") { |file| file.puts appendLine }
end

pattern = Regexp.new("^#timelineWebName:(.*)$")
datesFile = File.read(datesFileName)
timelineWebName = !(match_data = datesFile.match(pattern)).nil? ? match_data[1] : ""

system('C:\Program Files\Adobe\Adobe Illustrator CC 2014 (32 Bit)\Support Files\Contents\Windows\Illustrator.exe','C:\Users\mike\Desktop\timeline\timeline.jsx')

FileUtils.move(timelineWebName+".pdf", "z:\\")

p timelineWebName

#File.open("log.txt", "a+") { |file| file << line }
# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
