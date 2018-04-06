from application import app
from flask_socketio import SocketIO, emit,  send
from flask_session import Session

Session(app)
socketio = SocketIO(app, binary=False, manage_session=False)

#db.create_all()

@socketio.on("connection")
def piip():
	print("user has connected")

@socketio.on('message')
def handle_message(message):
    print('\nreceived message: ' + message + '\n')
    send('ok - connection succeed', broadcast=False)

if __name__ == '__main__':
#    app.run(debug=True)
    socketio.run(app, debug=True)