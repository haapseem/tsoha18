
from flask import Flask, render_template

class Item:
    def __init__(self, name):
        self.name = name

app = Flask(__name__)

itemss = []
itemss.append(Item("eka"))

#default route
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/items")
def items():
    return render_template("items.html", items=itemss)

@app.route("/api")
def hello():
    return "Hello world"

#if main, run app in hot refresh mode
if __name__ == "__main__":
    app.run(debug=True)

