from flask import Flask, render_template
import pymongo
import certifi

client = pymongo.MongoClient("mongodb+srv://aakashpathak1:plexspots123@plexspotsdata.wwym9gb.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.plexspots_database

collection = db['plexspots_collection']

app = Flask(__name__)

@app.route('/spots/all')
def get_all_spots():
    documents = collection.find({})
    return [document for document in documents]

@app.route('/spots/add')
def add_spot():
    collection.insert({})


if __name__ == '__main__':
    app.run(debug=True)