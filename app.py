from flask.app import Flask
from flask import request
from flask_cors import CORS, cross_origin
from flask import jsonify, json
from prediction import Prediction

heart = Prediction("heart", "target")
stroke = Prediction("stroke", "stroke")
liver = Prediction("liver", "Liver_Disease")

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')
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
    disease = response['disease']

    if (disease == "heart"):
        predictionDict = getHeartPrediction(response)

    elif (disease == "stroke"):
        predictionDict = getStrokePrediction(response)

    elif (disease == "liver"):
        predictionDict = getLiverPrediction(response)

    else:
        return 'No Disease Option Specified'

    return json.dumps(predictionDict)


def getHeartPrediction(response):
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

    heartDisease = heart.predict([lst])
    probability = heart.probability([lst])
    score = heart.score()

    predictionDict = {
        "prediction": round(int(heartDisease) * 100, 2),
        "nonDiseaseProb": round(float(probability[0][0]) * 100, 2),
        "diseaseProb": round(float(probability[0][1]) * 100, 2),
        "accuracy": round(float(score) * 100, 2)
    }

    return predictionDict


def getStrokePrediction(response):
    lst = []
    strokeDisease = stroke.predict([lst])
    probability = stroke.probability([lst])
    score = stroke.score()

    predictionDict = {
        "prediction": round(int(strokeDisease) * 100, 2),
        "nonDiseaseProb": round(float(probability[0][0]) * 100, 2),
        "diseaseProb": round(float(probability[0][1]) * 100, 2),
        "accuracy": round(float(score) * 100, 2)
    }

    return predictionDict


def getLiverPrediction(response):
    lst = []
    liverDisease = liver.predict([lst])
    probability = liver.probability([lst])
    score = liver.score()

    predictionDict = {
        "prediction": round(int(liverDisease) * 100, 2),
        "nonDiseaseProb": round(float(probability[0][0]) * 100, 2),
        "diseaseProb": round(float(probability[0][1]) * 100, 2),
        "accuracy": round(float(score) * 100, 2)
    }

    return predictionDict
