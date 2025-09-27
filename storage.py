### imports

from googletrans import Translator, constants
from pprint import pprint
from flask import Flask, request, jsonify
import asyncio
from flask_cors import CORS
from flask_cors import cross_origin
import tracemalloc 


# function that translates text inputted
async def simple(item):
    translator = Translator()
    item = await translator.translate(item, src="en", dest="ar")
    return item.text

### CONNECTION ###
app = Flask(__name__)

CORS(app, resources={r"/writetofile": {"origins": "http://127.0.0.1:5500"}})


@app.route('/writetofile', methods=['POST'])
async def writetofile():
   # This will be inputted from a JS File in the same way the function above is provided

    # will pull dictionary from JS file
    data = request.get_json()
    
    file = open("Secure-Data-File.txt", "a", encoding="utf-16")
    for i in data:
        print(i)
        print(data[i])
        format = f"{i} : {await simple(data[i])} \n"
        file.write(format)
        file.write("\n")
    file.close()

    return jsonify({"status": "success"}), 200
if __name__ == "__main__":
    app.run(debug=True)

