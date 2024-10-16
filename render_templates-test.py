from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register.html", methods=["GET", "POST"])
def register():
    return render_template("register.html")

@app.route("/signin.html", methods=["GET", "POST"])
def signin():
    return render_template("signin.html")

if __name__ == "__main__":
    app.run(debug=True)
