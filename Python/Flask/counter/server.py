from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "counter_key"

@app.route('/')
def index():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template('index.html', counts=session['count'])

@app.route('/ninja', methods=['POST'])
def ninja():
    session['count'] += 1
    return redirect('/')

@app.route('/hacker', methods=['POST'])
def hacker():
    session['count'] = 0
    return redirect('/')

app.run(debug=True)
