import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression


class Prediction:
    def __init__(self, filename):
        self.data = pd.read_csv('Datasets/' + filename)
        self.df = pd.DataFrame(self.data)
        self.x = self.df.drop("target", axis=1)
        self.y = self.df.target
        self.clf = LogisticRegression(random_state=0, max_iter=700).fit(self.x, self.y)
    
    def predict(self, lst):
        predict = self.clf.predict(lst)
        return predict
    
    def probability(self, lst):
        probability = self.clf.predict_proba(lst)
        return probability
    
    def score(self):
        score = self.clf.score(self.x, self.y)
        return score


# prediction = Prediction('heart.csv')
# heartDisease = prediction.predict([[57, 1, 0, 130, 131, 0, 1, 115, 1]])
# probabilty = prediction.probability([[57, 1, 0, 130, 131, 0, 1, 115, 1]])
# score = prediction.score()

# print(heartDisease)
# print(probabilty)
# print(score)