# Chronic Disease Analysis and Prediction

## Description

A broad range of reasons give rise to chronic diseases such as heart, stroke and liver diseases. The objective of this repository is to co-relate and focus on how various data, such residency, cardiovascular attributes, protein levels, and soon, affect public health.

Factors such as age, gender, ethnicity, resting blood pressure, and so on are examined to predict the likely hood of patients that are most vulnerable to heart, stroke and liver diseases.

## Getting Started

### Prerequisites

Software you need for the project

```
Python
Node.js
```

### Installation

- To run python flask server, please refer to the requirements.txt file and download all the python dependencies.

- To the Jupyter Notebooks, install the following python dependencies

```
pandas
numpy
matplotlib
seaborn
pandas-profiling
```

- The supported python version is listed in the runtime.txt file

- To run the react js front end application, follow the commands below

```
cd frontend
npm install
npm start
```

## Datasets

### Heart Disease UCI

[Dataset](https://www.kaggle.com/ronitf/heart-disease-uci)

### Heart Disease Mortality Data Among US Adults (35+)

[Dataset](https://catalog.data.gov/dataset/heart-disease-mortality-data-among-us-adults-35-by-state-territory-and-county-2016-2018)

### Stroke Prediction Dataset

[Dataset](https://www.kaggle.com/fedesoriano/stroke-prediction-dataset)

### Indian Liver Patient Records

[Dataset](https://www.kaggle.com/uciml/indian-liver-patient-records)

The datasets are downloaded and cleaned based on the requirement needs. The cleaned datasets are stored in the cleanedDataset directory.

## Jupyter Notebooks

Below is a brief description of what each notebook analyses

- HeartDiseaseAnalysis: analyses the heart disease UCI dataset
- HeartEthnicityAnalysis: analyses the heart ethnicity dataset
- StrokeDiseaseAnalysis: analyses the stroke prediction dataset
- LiverAnalysis: analyses the Indian liver patient records dataset

## Pandas Profiling Report

Pandas profiling report is generated for the following datasets

- Heart Disease UCI
- Stroke Prediction Dataset
- Indian Liver Patient Records

The reports can be found in the reports directory

## Deployment

[Heroku Dyno](https://diseaseanalysis.herokuapp.com/)

## Authors

- **Shoaib Khan**
- **Tamer Ibrahim**
- **Abdillahi Nur**
- **Kamaluddin Shakiri**
- **Abdelrahman Darwish**
- **Krishang Karir**
