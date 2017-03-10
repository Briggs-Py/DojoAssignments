from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'mySecretKey'
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninjas')
def ninja():
    return render_template('ninjas.html')

@app.route('/dojo/new')
def dojo():
    return render_template('dojos.html')

app.run(debug=True)
