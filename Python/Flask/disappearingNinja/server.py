from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninja/<color>')
def submit(color):
    if color == None:
        pass
    elif color == blue:
        pass
    elif color == orange:
        pass
    elif color == red:
        pass
    elif color == purple:
        pass
    else:
        pass
    return render_template('ninja.html')

app.run(debug=True)
