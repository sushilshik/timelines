# encoding: UTF-8
require 'sinatra'
require 'cgi'

get '/check_connection' do
  'ok'
end
get '/timeline' do
  datesFileName = CGI.unescape(params[:file])
  puts "datesFileName: " + datesFileName
  lang = !params[:lang].nil? ? params[:lang] : ""
  puts "lang: " + lang
  line = !params[:line].nil? ? params[:line] : "ru"
  puts "line: " + line
  `ruby timeline.rb #{datesFileName.strip} "#{lang.encode("utf-8").strip}" "#{line.encode("utf-8").strip}" "move_pdf"`
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
