from application import db
from application.users.models import User
from application.tags.models import Tag
from application.comments.models import Comment
from application.topics.models import Topic
from application.tagsTopics.models import TagsTopics
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

    # def createUserSession(self):
    #     print("sdf")


    # create user
    def _createUser(self, data):
        self._logger.info("creating user: " + data["username"])
        p = blake2b(bytes(data["password"], "utf-8")).hexdigest()

        # Check if user already exists
        if not User.query.filter_by(email=data["email"]).count() + \
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

    # check if log in values are correct
    def _getLogIn(self, data):
        return User.query.filter_by(
            username=data["username"]).filter_by(
            password=blake2b(bytes(data["password"], "utf-8")).hexdigest()).count() > 0

    # get user data
    def _getUser(self, username):
        return User.query.filter_by(
            username=username).first()


    # create tag
    def _createTag(self, data):
        if not Tag.query.filter_by(name=data).count():
            logger.info("Creating a new tag: " + data)
            u = Tag(data)
            db.session.add(u)
            db.session().commit()

    # get tag
    def _getTag(self, name):
        return Tag.query.filter_by(name=data).first

    # create topic
    def _createTopic(self, data):
        if not Topic.query.filter_by(name=data).count():
            logger.info("Creating a new tag: " + data)
            u = Tag(data)
            db.session.add(u)
            db.session().commit()

    # get topic
    def _getTopic(self, topic):
        return Topic.query.filter_by(name=topic).first()

    # create Comment
    def _createComment(self, data):
        logger.info("Creating comment: " + data["text"] + ", Topic: " + data["topic"]["name"])
        u = Comment(data["text"], self._getUser(data["username"]).id, self._getTopic(data["topic"]).id)
        db.session.add(u)
        db.session().commit()

    # add tags for topic
    def _tagsForTopic(self, data):
        logger.info("Adding tags for: " + data["topic"])
        for i in data["tags"]:
            logger.info(" - " + i)
            tt = TagsTopics(self._getTag(i).id, self._getTopic(data["topic"]).id)









    #
    # The main brain of the Controller
    #

    def messageSolver(self, message):
        res = User.query.all()
        for r in res:
        	print("hello " + r.name)

        # send('message was: ' + message, broadcast=False)
        print('\nreceived message: ' + message + '\n')
        data = json.loads(message)
        print(data["command"])

        # User trying to create one
        if data["command"] == "createUser":
            if(self._createUser(data["data"])):
                return json.dumps({
                    'command': 'status',
                    'data': 'ok'})
            else:
                return json.dumps({
                    'command': 'status',
                    'data': 'not ok'})

        # if user trying to log in
        elif data["command"] == "login":

            if(self._getLogIn(data["data"])):
                u = self._getUser(data["data"]["username"])

                return json.dumps({
                    'command': 'status',
                    'data': 'ok',
                    'data2': {
                        'id': u.id,
                        'user': u.username,
                        'name': u.name,
                        'email': u.email
                    }})
            else:
                return json.dumps({
                    'command': 'status',
                    'data': 'not ok'})

        # if add topic
        elif data["command"] == "createTopic":
            # Create tag if not exists
            for i in data["data"]["tags"]:
                self._createTag(data)
            self._createTopic(data["data"]["topic"])
            self._createComment(data["data"])




        # return 'message was: ' + message
