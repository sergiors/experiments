#!/usr/bin/python

from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/hello.json')
def hello_json():
    return jsonify({
        'name': 'Sérgio'
    })

if __name__ == "__main__":
    app.run()
