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


@app.route("/predictDisease", methods=['POST'])
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
    bloodPressure = float(response['bloodPressure'])
    serumCholesterol = float(response['serumCholesterol'])
    bloodSugar = float(response['bloodSugar'])
    vesselsColored = int(response['vesselsColored'])
    maxHeartRate = float(response['maxHeartRate'])
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
    age = int(response['age'])
    gender = int(response['gender'])
    hypertension = int(response['hypertension'])
    heartDisease = int(response['heartDisease'])
    avgGlucoseLevel = float(response['avgGlucoseLevel'])
    bmi = float(response['bmi'])

    lst = []
    lst.append(gender)
    lst.append(age)
    lst.append(hypertension)
    lst.append(heartDisease)
    lst.append(avgGlucoseLevel)
    lst.append(bmi)

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
    age = int(response['age'])
    gender = int(response['gender'])
    totalProteins = float(response['totalProteins'])
    totalBilirubin = float(response['totalBilirubin'])
    alkalinePhosphatase = int(response['alkalinePhosphatase'])
    alamineAminotransferase = int(response['alamineAminotransferase'])
    aspartateAminotransferase = int(response['aspartateAminotransferase'])
    albumin = float(response['albumin'])
    albuminGlobulinRatio = float(response['albuminGlobulinRatio'])

    lst = []
    lst.append(age)
    lst.append(gender)
    lst.append(totalBilirubin)
    lst.append(alkalinePhosphatase)
    lst.append(alamineAminotransferase)
    lst.append(aspartateAminotransferase)
    lst.append(totalProteins)
    lst.append(albumin)
    lst.append(albuminGlobulinRatio)

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
