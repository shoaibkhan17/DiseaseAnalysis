import pandas as pd
import numpy as np
# from sklearn.linear_model import LogisticRegression

data = pd.read_csv('../Datasets/UCI-heart-disease.csv')
df = pd.DataFrame(data)
x = df.drop("target", axis=1).values
y = df.target.values
print(x)
print("---")
print(y)

# print(x.values)
# print(x.iloc[:1, :].)
# clf = LogisticRegression(random_state=0).fit(x, y)
# clf.predict(X[:2, :])
