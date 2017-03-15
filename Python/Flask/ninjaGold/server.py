from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime

app = Flask(__name__)
app.secret_key = "theSecretNinja"

@app.route('/')
def index():
    if not 'gold' in session:
        session['gold'] = 0
    if not 'message' in session:
        session['message'] = ""
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    date = datetime.date
    if request.form['building'] == 'farm':
        num = random.randint(10, 20)
        session['gold'] += num
        session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the farm! " + " {:%Y/%m/%d %H:%M}".format(datetime.now())+" </p>"
    elif request.form['building'] == 'cave':
        num = random.randint(5, 10)
        session['gold'] += num
        session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the cave! " + " {:%Y/%m/%d %H:%M}".format(datetime.now())+" </p>"
    elif request.form['building'] == 'house':
        num = random.randint(2, 5)
        session['gold'] += num
        session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the house! " + " {:%Y/%m/%d %H:%M}".format(datetime.now())+" </p>"
    else:
        num = random.randint(-50, 50)
        session['gold'] += num
        if num > 0:
            session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the casino! " + " {:%Y/%m/%d %H:%M}".format(datetime.now())+" </p>"
        else:
            session['message'] += "<p style='color:red;'> Lost "+str(num)+ " gold from the casino... " + " {:%Y/%m/%d %H:%M}".format(datetime.now())+" </p>"

    return redirect('/')

app.run(debug=True)
