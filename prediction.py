import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression


class Prediction:
    def __init__(self, filename):
        self.data = pd.read_csv('datasets/' + filename)
        self.df = pd.DataFrame(self.data)
        self.x = self.df.drop("target", axis=1)
        self.y = self.df.target
        self.clf = LogisticRegression(
            random_state=0, max_iter=700).fit(self.x, self.y)

    def predict(self, lst):
        predict = self.clf.predict(lst)
        return predict

    def probability(self, lst):
        probability = self.clf.predict_proba(lst)
        return probability

    def score(self):
        score = self.clf.score(self.x, self.y)
        return score
