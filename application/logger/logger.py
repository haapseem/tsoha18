import logging

class Logger():

    def __init__(self, logger):
        self._logger = logger
        formatter = logging.Formatter("%(asctime)2s - %(name)2s - %(levelname)2s - %(message)s")

        # self._logger = logging.getLogger(__name__)
        self._logger.setLevel(logging.DEBUG)
        handler = logging.FileHandler("./logger.log")
        handler.setLevel(logging.DEBUG)
        handler.setFormatter(formatter)
        self._logger.addHandler(handler)
        handler = logging.StreamHandler()
        handler.setLevel(logging.DEBUG)
        handler.setFormatter(formatter)
        self._logger.addHandler(handler)

    def getLogger(self):
        return self._logger
