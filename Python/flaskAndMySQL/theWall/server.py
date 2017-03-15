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

@app.route('/process', methods=['POST'])
def process():
    session['loginEmail'] = request.form['email']
    session['loginPassword'] = request.form['password']
    session['dbEmails'] = mysql.query_db("SELECT email, password FROM users")


    return redirect('/wall')


@app.route('/wall', methods=['POST', "GET"])
def login():
    return render_template("wall.html")

@app.route('/createaccount', methods=['POST', "GET"])
def create():
    return render_template("createAccount.html")

@app.route('/newaccount', methods=['POST'])
def newAccount():

#Validation
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
    

    return redirect('/wall')

@app.route('/post', methods=['POST', 'GET'] )
def post():
    if len(request.form['post']) < 1:
        flash("Post Cannot Be Blank!")
        return redirect('/wall')
    info ={'post':request.form['post'],
    'created': datetime.today()}
    my_post = mysql.query_db("INSERT INTO users (post, created_at) VALUES(:post, :created);", info)
    session['posts']=""
    session['post']=mysql.query_db("SELECT post, created_at FROM posts")
    for data in session['post']:
      date = data['created_at'].strftime('%c')
      session['posts']+='<p>'+data['post']+' '+ date +'</p>'
    return render_template('submit.html')

@app.route('/list')
def list():
  session['posts']=""
  session['post']=mysql.query_db("SELECT post, created_at FROM posts")
  for data in session['post']:
    date = data['created_at'].strftime('%c')
    session['posts']+='<p>'+data['post']+' '+ date +'</p>'
  return render_template('submit.html')
app.run(debug=True)
