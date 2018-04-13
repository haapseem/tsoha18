from application import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(255), nullable=False)
	email = db.Column(db.String(255), nullable=False)
	name = db.Column(db.String(255), nullable=False)
	password = db.Column(db.String(255), nullable=False)

	def __init__(self, user, name, email, passw):
	    self.username = user
	    self.name = name
	    self.email = email
	    self.password = passw