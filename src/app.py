from flask import Flask, render_template, request
import json
import pymongo
import certifi
from bson import json_util

client = pymongo.MongoClient("mongodb+srv://aakashpathak1:plexspots123@plexspotsdata.wwym9gb.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.plexspots_database

collection = db['plexspots_collection']

app = Flask(__name__)

@app.route('/spots/all')
def get_all_spots():
    documents = collection.find({})
    documents = json.loads(json_util.dumps(documents))
    return [document for document in documents]

@app.route('/spots/add', methods = ['POST'])
def add_spot():
    data = request.get_json()
    #item = {'label': data.get('label'), 'text': data.get('text')}
    collection.insert_one(data)
    return data

if __name__ == '__main__':
    app.run(debug=False)