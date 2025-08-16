from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

# Load model and vectorizer
model = joblib.load('naive_bayes_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# Create Flask app
app = Flask(__name__)
CORS(app)  # Allow frontend to connect easily

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data['text']
    vec = vectorizer.transform([text])
    prediction = model.predict(vec)[0]
    return jsonify({"category": prediction})

# VERY IMPORTANT: This must be there!
if __name__ == '__main__':
    app.run(port=5000, debug=True)
