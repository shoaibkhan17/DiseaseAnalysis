import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression


class Prediction:
    def __init__(self, filename, columnName):
        self.data = pd.read_csv('cleanedDatasets/' + filename + ".csv")
        self.df = pd.DataFrame(self.data)
        self.x = self.df.drop(columnName, axis=1)
        self.y = self.df[columnName]
        self.clf = LogisticRegression(
            random_state=0, max_iter=1000).fit(self.x, self.y)

    def predict(self, lst):
        predict = self.clf.predict(lst)
        return predict

    def probability(self, lst):
        probability = self.clf.predict_proba(lst)
        return probability

    def score(self):
        score = self.clf.score(self.x, self.y)
        return score


# Clean and save heart dataset
# heartDF = pd.read_csv('datasets/heart.csv')
# heartColumn = "target"
# predictionHeart = Prediction(heartDF, heartColumn)
# heartDF.to_csv('cleanedDatasets/heart.csv', index=False, header=True)
# print(predictionHeart.score())

# Clean and save stroke dataset
# strokeDF = pd.read_csv('datasets/stroke.csv')
# strokeColumn = "stroke"
# strokeDF.drop(columns=['id'], inplace=True)
# strokeDF.drop(columns=['ever_married'], inplace=True)
# strokeDF.drop(columns=['work_type'], inplace=True)
# strokeDF.drop(columns=['Residence_type'], inplace=True)
# strokeDF.drop(columns=['smoking_status'], inplace=True)
# strokeDF[strokeDF['stroke'] == 1 & strokeDF['bmi'].isna()]
# strokeDF['bmi'].fillna(np.round(strokeDF['bmi'].mean(), 1), inplace=True)
# strokeDF = strokeDF[strokeDF['gender'] != 'Other']
# strokeDF['gender'] = strokeDF.gender.replace({'Male': 1, 'Female': 0})
# predictionStroke = Prediction(strokeDF, strokeColumn)
# strokeDF.to_csv('cleanedDatasets/stroke.csv', index=False, header=True)
# print(predictionStroke.score())

# Clean and save liver dataset
# liverDF = pd.read_csv('datasets/liver.csv')
# liverColumn = "Liver_Disease"
# liverDF.drop(columns=['Direct_Bilirubin'], inplace=True)
# liverDF['Gender'] = liverDF.Gender.replace({'Male': 1, 'Female': 0})
# liverDF['Dataset'] = liverDF.Dataset.replace({1: 1, 2: 0})
# liverDF.rename(columns={'Dataset': 'Liver_Disease'}, inplace=True)
# liverDF = liverDF.fillna(liverDF.mean())
# liverDF.to_csv('cleanedDatasets/liverTemp.csv', index=False, header=True)
# predictionLiver = Prediction(liverDF, liverColumn)
# print(predictionLiver.score())

# Prediction scores
# heart = Prediction("heart", "target")
# print(heart.score())

# stroke = Prediction("stroke", "stroke")
# print(stroke.score())

# liver = Prediction("liver", "Liver_Disease")
# print(liver.score())
