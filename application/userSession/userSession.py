
class UserSession():

    _id = ''
    _login_id = -1
    _time = 0

    def __init__(self, id):
        self._id = id

    def getId(self):
        return self._id

    def equals(self, o):
        return self._id == o.getId
