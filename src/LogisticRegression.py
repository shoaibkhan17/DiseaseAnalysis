import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression


class LogisticRegression:
    def __init__(self):
        self.data = pd.read_csv('../Datasets/heart.csv')
        self.df = pd.DataFrame(self.data)
        x = self.df.drop("target", axis=1)
        y = self.df.target
        self.clf = LogisticRegression(random_state=0, max_iter=500).fit(x, y)


# [63, 1, 3, 145, 233, 1, 0, 150, 0]
# df.head
# print(x.values)
# print(x.iloc[:1, :].)
# clf = LogisticRegression(random_state=0, max_iter=500).fit(x, y)
# print(x.iloc[:1, :])
predict = clf.predict(x.head(1))
prob = clf.predict_proba(x.head(1))
score = clf.score(x, y)
print(predict)
print(prob)
print(score)
