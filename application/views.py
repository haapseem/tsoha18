
from flask import render_template, request
from application import app

#main route, home
@app.route("/")
def home():
	return render_template("index.html")
#	return app.send_static_file('index.html') 


