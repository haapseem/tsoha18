
# Import own classes
from application import app, db, views
from application.socketController.sioController import SioController
from application.users.models import User
from application.logger.logger import Logger

# import flask and SocketIO
from flask_socketio import SocketIO, emit,  send
from flask_session import Session
from flask import jsonify

# import other depencies
import logging


# Logger
logger = Logger(logging.getLogger(__name__)).getLogger()
logger.info("starting logger: " + __name__)

# Socket io session
Session(app)
socketio = SocketIO(app, binary=True, manage_session=True)

# socket io controller
sioCtrl = SioController()

#Socket connection created with client
@socketio.on("connect")
def connectionEstablished():
    logger.info("User has connected")

# Socket messages (json)
@socketio.on('message')
def handle_message(message):
    returnValue = sioCtrl.messageSolver(message)
    if(returnValue!=""):
        send(returnValue, broadcast=False)

# Starting application
if __name__ == '__main__':
    socketio.run(app, debug=True)
