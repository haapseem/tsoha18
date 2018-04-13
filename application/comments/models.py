from application import db

class Comment(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	text = db.Column(db.String(255), nullable=False)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
	topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'),
        nullable=False)

	def __init__(self, name, topic_id, user_id):
	    self.name = name
	    self.topic_id = topic_id
	    self.user_id = user_id
