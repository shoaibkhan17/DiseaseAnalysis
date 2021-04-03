import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression

data = pd.read_csv('../Datasets/UCI-heart-disease.csv')
df = pd.DataFrame(data)
x = df.drop("target", axis=1)
y = df.target
# print(x)
# print("---")
# print(y)

# df.head
# print(x.values)
# print(x.iloc[:1, :].)
clf = LogisticRegression(random_state=0, max_iter=500).fit(x, y)
# print(x.iloc[:1, :])
predict = clf.predict(x.head(1))
prob = clf.predict_proba(x.head(1))
score = clf.score(x,y)
print(predict)
print(prob)
print(score)
