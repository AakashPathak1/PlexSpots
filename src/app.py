import certifi
import pymongo
from pymongo.server_api import ServerApi
client = pymongo.MongoClient("mongodb+srv://Alam343:plexspots123@plexspotsdata.wwym9gb.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.plexspots_database
collection = db["plexspots_collection"]

post1= {"_id": "1", "name":"Moffit Library", "From": "7am", "To":"10pm", "Description": "sbkbs.ek kksjre kbv.krejkes.kjrbjk fjksjkv jkefnknkrs.ebn;jjknr;bnesjbndlr nresn. /.r;bnesjlne;lrbndsjlfnjlfdlb/ndjl;kbdnfsjl" }
post2= {"_id": "2", "name":"Doe Library", "From": "5am", "To":"5pm", "Description": "sbkbs.ek kksjre kbv.krejkes.kjrbjk fjksjkv jkefnknkrs.ebn;jjknr;bnesjbndlr nresn. /.r;bnesjlne;lrbndsjlfnjlfdlb/ndjl;kbdnfsjl" }
post3= {"_id": "3", "name":"Kresge Library", "From": "10am", "To":"10pm", "Description": "sbkbs.ek kksjre kbv.krejkes.kjrbjk fjksjkv jkefnknkrs.ebn;jjknr;bnesjbndlr nresn. /.r;bnesjlne;lrbndsjlfnjlfdlb/ndjl;kbdnfsjl" }
post4= {"_id": "4", "name":"Anthropology Library", "From": "8am", "To":"6pm", "Description": "sbkbs.ek kksjre kbv.krejkes.kjrbjk fjksjkv jkefnknkrs.ebn;jjknr;bnesjbndlr nresn. /.r;bnesjlne;lrbndsjlfnjlfdlb/ndjl;kbdnfsjl" }
post5= {"_id": "5", "name":"Morrison Library", "From": "9am", "To":"9pm", "Description": "sbkbs.ek kksjre kbv.krejkes.kjrbjk fjksjkv jkefnknkrs.ebn;jjknr;bnesjbndlr nresn. /.r;bnesjlne;lrbndsjlfnjlfdlb/ndjl;kbdnfsjl" }

collection.insert_many([post1, post2, post3,post4, post5])
