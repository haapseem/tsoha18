
from flask import render_template, request
from application import app

#main route, home
@app.route("/")
@app.route("/viikko2")
def home():
	return render_template("index.html")
#	return app.send_static_file('index.html')

@app.route("/viikko2/<name>")
def home2(name):
	return render_template("index.html")
