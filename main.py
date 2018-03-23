from application import app
from flask_socketio import SocketIO, emit,  send

socketio = SocketIO(app, host='localhost', port=5000)

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