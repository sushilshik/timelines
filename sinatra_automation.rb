# encoding: UTF-8
require 'sinatra'
require 'cgi'

get '/check_connection' do
  'ok'
end
get '/timeline' do
  datesFileName = CGI.unescape(params[:file])
  line = !params[:line].nil? ? params[:line] : ""
  `ruby timeline.rb #{datesFileName} "#{line.encode("utf-8")}" "move_pdf"`
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
