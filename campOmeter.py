from flask import Flask, jsonify, Response, request, redirect, url_for, render_template
import requests
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/parks")
def parks():
    return render_template("parks.html")

@app.route("/getparks")
def parksInState():
    state = request.args.get("state")
    res = Response(requests.get("https://developer.nps.gov/api/v1/parks?stateCode=" + state + "&api_key=bap6bNqEedO9pto5PNzA42NrWgbMF5UnKER6QJGj").text)
    res.headers["Content-type"] = "application/json"
    return res


app.run(debug=True,port=5001)
