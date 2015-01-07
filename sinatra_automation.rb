# encoding: UTF-8
require 'sinatra'
require 'cgi'

get '/timeline' do
  datesFileName = CGI.unescape(params[:file])
  line = !params[:line].nil? ? params[:line] : ""
  `ruby timeline.rb #{datesFileName} "#{line.encode("utf-8")}"`
end

# vim: tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 number
