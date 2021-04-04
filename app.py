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
    age = int(response['age'])
    sex = int(response['sex'])
    chestPainType = int(response['chestPainType'])
    bloodPressure = int(response['bloodPressure'])
    serumCholesterol = int(response['serumCholesterol'])
    bloodSugar = int(response['bloodSugar'])
    vesselsColored = int(response['vesselsColored'])
    maxHeartRate = int(response['maxHeartRate'])
    exerciseAngina = int(response['exerciseAngina'])

    lst = []
    lst.append(age)
    lst.append(sex)
    lst.append(chestPainType)
    lst.append(bloodPressure)
    lst.append(serumCholesterol)
    lst.append(bloodSugar)
    lst.append(vesselsColored)
    lst.append(maxHeartRate)
    lst.append(exerciseAngina)

    print(lst)

    return jsonify({"success": "true"})
