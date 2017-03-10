from flask import Flask, render_template, request, redirect, session
import random
import datetime

app = Flask(__name__)
app.secret_key = "theSecretNinja"

@app.route('/')
def index():
    if 'gold' in session:
        gold = session['gold']
    else:
        session['gold'] = 0
    if 'message' in session:
        message = session['message']
    else:
        message = ""
    return render_template('index.html', gold=session['gold'], message=message)

@app.route('/process', methods=['POST'])
def process():
    date = datetime.date
    if request.form['building'] == 'farm':
        num = random.randint(10, 20)
        session['gold'] += num
        session['message'] = "Earned "+str(num)+ " gold from the farm! "
    elif request.form['building'] == 'cave':
        session['gold'] += random.randint(5, 10)
    elif request.form['building'] == 'house':
        session['gold'] += random.randint(2, 5)
    else:
        session['gold'] += random.randint(-50, 50)

    return redirect('/')

app.run(debug=True)
