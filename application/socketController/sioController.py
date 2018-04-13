from application import db
from application.users.models import User
from application.logger.logger import Logger

import json
import pprint
import logging

class SioController():
    # _name = ""

    _logger = Logger(logging.getLogger(__name__)).getLogger()
    _logger.info("starting logger: " + __name__)

    # def __init__(self):
    #     self._name = __name__

    def _createUser(self, data):
        self._logger.info("creating user: " + data)
        u = User(data["username"], data["name"], data["email"], data["password"])
        db.session.add(u)
        db.session().commit()
        self._logger("User has been created")

    def messageSolver(self, message):

        res = User.query.all()
        for r in res:
        	print("hello " + r.name)

        # send('message was: ' + message, broadcast=False)
        print('\nreceived message: ' + message + '\n')
        data = json.loads(message)
        print(data["command"])
        if data["command"] == "createUser":
            self._createUser(data["data"])

        return 'message was: ' + message
