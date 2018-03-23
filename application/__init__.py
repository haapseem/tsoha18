#from application import app
from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'

from flask_sqlalchemy import SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)

from application import views

from application.users import models

db.create_all()