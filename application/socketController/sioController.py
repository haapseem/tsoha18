from application import db
from application.users.models import User
from application.logger.logger import Logger
from application.userSession.userSession import UserSession

import json
import pprint
import logging
from hashlib import blake2b



class SioController():
    connectedUsers = []

    _logger = Logger(logging.getLogger(__name__)).getLogger()
    _logger.info("starting logger: " + __name__)

    def createUserSession(self):
        print("sdf")


    def _createUser(self, data):
        self._logger.info("creating user: " + data["username"])
        p = blake2b(bytes(data["password"], "utf-8")).hexdigest()

        # Check if user already exists
        if not User.query.filter_by(email=data["email"]).count() + \
                User.query.filter_by(name=data["name"]).count() + \
                User.query.filter_by(username=data["username"]).count():
            # if user doesn't exists then create
            u = User(data["username"], data["name"], data["email"], p)
            db.session.add(u)
            db.session().commit()
            self._logger.info("User has been created")
            return True
        else:
            # if users exists then not creating
            self._logger.warning("User already exists")
            return False

    def messageSolver(self, message):
        res = User.query.all()
        for r in res:
        	print("hello " + r.name)

        # send('message was: ' + message, broadcast=False)
        print('\nreceived message: ' + message + '\n')
        data = json.loads(message)
        print(data["command"])
        if data["command"] == "createUser":
            if(self._createUser(data["data"])):
                return 'user created'
            else:
                return "user not created"


        # return 'message was: ' + message
