from application import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(255), nullable=False)
	password = db.Column(db.String(255), nullable=False)

	def __init__(self, name, passw):
	    self.username = name
	    self.password = passw