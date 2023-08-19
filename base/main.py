from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import requests 
base_url='https://pokeapi.co/api/v2/'







app=Flask(__name__)
cors = CORS(app)
@app.route("/")
def hello():
    return "Hello, World!"
@app.route("/api/pokemon")
@cross_origin()
def get_pokemon():
    number=request.args.get('number')
    pokemon=requests.get(f'{base_url}/pokemon/{number}')
    return jsonify(pokemon.json())
if __name__=='__main__':
    app.run(host='0.0.0.0',debug=True)



