from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app = Flask(__name__)
mysql = MySQLConnector(app,'emailRegister')
bcrypt = Bcrypt(app)
app.secret_key = "ThisIsSecret!"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    valid = True

    for field in request.form:
        if len(request.form[field]) == 0:
            flash(field + " must not be empty")
            valid = False

    if len(request.form['first_name']) < 2 or len(request.form['last_name']) < 2:
        flash("name must be more that two characters")
        valid = False

    if not EMAIL_REGEX.match(request.form['email']):
        flash("Please Enter A Valid Email")
        valid = False

    if not request.form['password'] == request.form['confirm']:
        flash("Password Must Match Confirm Password")
        valid = False

    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters")
        valid = False

    if(valid == False):
        return redirect('/')

    password = request.form['password']
    pw_hash = bcrypt.generate_password_hash(password)

    input_data = {
        'fname': request.form['first_name'],
        'lname': request.form['last_name'],
        'email': request.form['email'],
        'pw_hash': pw_hash
    }

    user_data = "INSERT INTO users (first_name, last_name, email, password) VALUES (:fname, :lname, :email, :pw_hash)"

    add_user = mysql.query_db(user_data, input_data)
    flash("Success!")
    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    data =  {'email': request.form['email']}
    user_email = mysql.query_db("SELECT first_name, email, password FROM users WHERE email = :email", data)
    print user_email
    if user_email:
        if bcrypt.check_password_hash(user_email[0]['password'], request.form['password']):
            session['user'] = user_email[0]['first_name']
            flash("Welcome,  "+ str(session['user']))
        else:
            flash('Incorrect Password')
    else:
        flash("Invalid Email")


    return redirect('/')



app.run(debug=True)
