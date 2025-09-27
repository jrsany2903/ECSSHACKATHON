### imports

from googletrans import Translator, constants
from pprint import pprint
from flask import Flask, request, jsonify
import asyncio
from flask_cors import CORS
import tracemalloc 




### CONNECTION ###
"""
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
    
"""

tracemalloc.start()


async def simple(item):
    translator = Translator()
    item = await translator.translate(item, src="en", dest="ar")
    return item.text

async def writetofile():
    # This will be inputted from a JS File in the same way the function above is provided
    text = {
        "fname":"Joeseph",
        "lname":"Joe",
        "fullname":"Joeseph Joe",
        "DOB":"53/5/2025",
        "PIN":"4567",
        "address":"Southampton",
        "email":"ISniffGlue@gluesniffingaddiction.com",
        "password":"prittsticks"
    }

    file = open("Secure-Data-File.txt", "a", encoding="utf-16")
    for i in text:
        print(i)
        print(text[i])
        format = f"{i} : { await simple(text[i])} \n"
        file.write(format)
    file.close()

async def main():

    await writetofile()
"""                         
if __name__ == "__main__":
    app.run(debug=True)
"""

if __name__ =="__main__":
    asyncio.run(main())

tracemalloc.stop()