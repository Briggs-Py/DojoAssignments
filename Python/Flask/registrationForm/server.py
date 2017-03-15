from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login', methods=['POST'])
def login():
    return render_template("wall.html")
    
@app.route('/newaccount', methods=['POST'])
def result():

    if len(request.form['email']) < 1:
        flash('Email Cannot Be Blank', 'error')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Email Must Be Valid', 'error')
        return redirect('/')
    if len(request.form['first']) < 1:
        flash('First Name Cannot Be Blank', 'error')
        return redirect('/')
    elif not (request.form['first']).isalpha():
        flash('First Name Cannot Contain Numbers', 'error')
        return redirect('/')
    if len(request.form['last']) < 1:
        flash('Last Name Cannot Be Blank', 'error')
        return redirect('/')
    elif not request.form['last'].isalpha():
        flash('Last Name Cannot Contain Numbers', 'error')
        return redirect('/')
    if len(request.form['password']) < 1:
        flash('Password Cannot Be Blank', 'error')
        return redirect('/')
    elif len(request.form['password']) < 8:
        flash('Password Must Be At Least 8 Characters', 'error')
        return redirect('/')
    if len(request.form['confirm']) < 1:
        flash('You Must Confirm Your Password', 'error')
        return redirect('/')
    elif request.form['confirm'] != request.form['password']:
        flash('Password Fields Must Match', 'error')
        return redirect('/')


    flash('Thanks for submitting your information!', 'clear')
    return redirect('/')

@app.route('/submit')
def submit():

    return render_template('submit.html')

@app.route('/back', methods=['POST'])
def back():
	session.clear()
  	return redirect('/')

app.run(debug=True)
