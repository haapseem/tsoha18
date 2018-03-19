
from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit,  send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app)

#main route, home
@app.route("/")
def home():
	return render_template("index.html")
#	return app.send_static_file('index.html') 

@socketio.on("connection")
def piip():
	print("user has connected")

@socketio.on('message')
def handle_message(message):
    print('\nreceived message: ' + message + '\n')
    send("ok", broadcast=False)

if __name__ == "__main__":
	socketio.run(app, debug=True)

