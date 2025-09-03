from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Default landing page
    return render_template("base.html", partial="partials/_start.html")

@app.route("/claims")
def claims():
    # Default landing page
    return render_template("base.html", partial="partials/_select_claims.html")

@app.route("/view-claim")
def view_claim():
    # Default landing page
    return render_template("base.html", partial="partials/_view_claim.html")

@app.route("/login")
def login():
    # Default landing page
    return render_template("login.html")

@app.route("/logout")
def logout():
    # Default landing page
    return render_template("login.html")

@app.route("/create-account")
def create_account():
    # Default landing page
    return render_template("create_account.html")

if __name__ == "__main__":
    app.run(debug=True)
