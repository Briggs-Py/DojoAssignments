from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import re

app = Flask(__name__)
mysql = MySQLConnector(app,'emailValidation')
app.secret_key = "ThisIsSecret!"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        flash("Email Cannot Be Blank")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address")
        return redirect('/')
    info ={'email':request.form['email'],
    'created': datetime.today()}
    session['mail'] = mysql.query_db("SELECT email FROM emails")
    email = request.form['email']
    for x in session['mail']:
        if x['email'] == email:
            flash("Email Already Exists")
            return redirect('/')
    mail_id = mysql.query_db("INSERT INTO emails (email, created_at) VALUES(:email, :created);",info)
    return redirect('/list')

@app.route('/list')
def list():
  session['validEmail']=""
  session['email']=mysql.query_db("SELECT email, created_at FROM emails")
  for data in session['email']:
    date = data['created_at'].strftime('%c')
    session['validEmail']+='<p>'+data['email']+' '+ date +'</p>'
  return render_template('submit.html')
app.run(debug=True)
