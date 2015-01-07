#encoding: utf-8
require 'sinatra'
require 'cgi'

get '/timeline' do
  datesFileName = CGI.unescape(params[:file])
  line = !params[:line].nil? ? params[:line] : ""
  line = CGI.unescape(line)
  `ruby timeline.rb #{datesFileName} "#{line}"`
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
