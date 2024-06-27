# app.py
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mydatabase'
CORS(app)
mongo = PyMongo(app)

users_collection = mongo.db.users

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Please provide username, email, and password'}), 400

    existing_user = users_collection.find_one({'email': email})
    if existing_user:
        return jsonify({'error': 'User with this email already exists'}), 400

    new_user = {'username': username, 'email': email, 'password': password}
    users_collection.insert_one(new_user)

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/users', methods=['POST'])
def signup_extended():
    data = request.json

    age_group = data.get('ageGroup')
    gender_identity = data.get('genderIdentity')
    ethnicity = data.get('ethnicity')
    job_role = data.get('jobRole')
    department = data.get('department')
    interests = data.get('interests')
    learning_style = data.get('learningStyle')
    language_preference = data.get('languagePreference')

    if not (age_group and gender_identity and ethnicity):
        return jsonify({'error': 'Please provide all required fields'}), 400

    new_user = {
        'ageGroup': age_group,
        'genderIdentity': gender_identity,
        'ethnicity': ethnicity,
        'jobRole': job_role,
        'department': department,
        'interests': interests,
        'learningStyle': learning_style,
        'languagePreference': language_preference
    }
    users_collection.insert_one(new_user)

    return jsonify({'message': 'User signed up successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=8443)
