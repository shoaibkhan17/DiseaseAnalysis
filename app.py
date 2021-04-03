from flask.app import Flask
from flask import request
from flask_cors import CORS, cross_origin
from flask import jsonify

app = Flask(__name__, static_folder='./client/build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config.from_object(__name__)


@app.errorhandler(404)
def page_not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route("/predictHeartDisease", methods=['POST'])
@cross_origin()
def predictHeartDisease():
    response = request.get_json()
    return jsonify({"success": "true"})
