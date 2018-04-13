from application import db

class TagsTopics(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	tag_id = db.Column(db.Integer, db.ForeignKey('tag.id'),
        nullable=False)
	topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'),
        nullable=False)

	def __init__(self, tag_id, topic_id):
	    self.tag_id = tag_id
	    self.topic_id = topic_id
