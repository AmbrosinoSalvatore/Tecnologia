# Importa i moduli necessari
from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import requests

# Dichiara la base dell'URL
base_url = 'https://pokeapi.co/api/v2/'

# Crea la APP con CORS
app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/api/pokemon")
@cross_origin()
def get_pokemon():
    # Prende l'ID dal parametro della richiesta (?id=1)
    id = request.args.get('id')

    # Esegue la richiesta HTTP GET alle API ed ottiene un JSON
    pokemon = requests.get(f'{base_url}/pokemon/{id}').json()

    # Risponde con un JSON
    return jsonify(pokemon)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)



