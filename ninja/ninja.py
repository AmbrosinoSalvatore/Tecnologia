from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/all')
def get_coordinates():
    with open('coordinates.json') as f:
        data = json.load(f)
    return jsonify(data)


@app.route('/<name>')
def get_turtle(name):
    if name in ["raffaello", "donatello", "michelangelo", "leonardo"]:
        with open('coordinates.json') as f:
            data = json.load(f)
        coordinate = random.choice(data["coordinates"])
        return jsonify({name: coordinate})
    else:
        return "Turtle not found", 404
         
if __name__ == "__main__":
    app.run(debug=True)