
from flask import render_template, request
from application import app

#main route, home
@app.route("/")
@app.route("/login")
def home():
	return render_template("index.html")
#	return app.send_static_file('index.html')

@app.route("/login/<name>")
def home2(name):
	return render_template("index.html")
