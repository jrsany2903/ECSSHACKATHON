### imports

from googletrans import Translator, constants
from pprint import pprint
from flask import Flask, request, jsonify
import asyncio


### CONNECTION ###

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
### translation
async def translate():
    data = request.get_json()
    text = data['text']
    # translates to arabic
    translator = Translator()
    y = await translator.translate(text, src="en",dest="ar")
    return jsonify({'translated': y})


if __name__ == "__main__":
    app.run(debug=True)
