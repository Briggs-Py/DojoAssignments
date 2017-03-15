from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import re

app = Flask(__name__)
mysql = MySQLConnector(app,'cdTheWall')
app.secret_key = "ThisIsSecret!"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register')
def register():
    valid = True

    for field in request.form:
        if len(request.form[field]) == 0:
            flash(field + " mut not be empty")
            valid = False

    if len(request.form['first_name']) < 2 or len(request.form['last_name']) < 2:
        flash("name must be more that two characters")
        valid = False

    if not request.form['password'] == request.form['confirm']:
        flash("Password must match Confirm Password")
        valid = False

    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters")
        valid = False

    if(valid == False):
        return redirect('/')

    input_data = {
        'fname': request.form['first_name'],
        'lname': request.form['last_name'],
        'email': request.form['email'],
        'password': request.form['password']
    }

    user_data = (INSERT INTO users (first_name, last_name, email, password))



app.run(debug=True)
