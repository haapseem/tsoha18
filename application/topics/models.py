from application import db

class Topic(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(255), nullable=False)

	def __init__(self, name):
	    self.name = name
