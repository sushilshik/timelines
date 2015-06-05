# encoding: UTF-8
require 'sinatra'
require 'cgi'

get '/check_connection' do
  'ok'
end
get '/timeline' do
  datesFileName = CGI.unescape(params[:file])
  lang = !params[:lang].nil? ? params[:lang] : ""
  line = !params[:line].nil? ? params[:line] : "ru"
  `ruby timeline.rb #{datesFileName} "#{lang.encode("utf-8")}" "#{line.encode("utf-8")}" "move_pdf"`
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
