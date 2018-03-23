
from flask import Flask
from flask_socketio import SocketIO, emit,  send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app)

from application import views

@socketio.on("connection")
def piip():
	print("user has connected")

@socketio.on('message')
def handle_message(message):
    send("ok - connection succeed", broadcast=False)
    print('\nreceived message: ' + message + '\n')

if __name__ == "__main__":
	socketio.run(app, debug=True)

