### imports

from googletrans import Translator, constants
from pprint import pprint
from flask import Flask, request, jsonify
import asyncio
from flask_cors import CORS



### CONNECTION ###

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
### translation
async def translate():
    data = request.get_json()
    text = data['text']
    # translates to arabic
    translator = Translator()
    y = await translator.translate(text, src="en",dest="ar")
    return jsonify({'translated': y.text})


if __name__ == "__main__":
    app.run(debug=True)
