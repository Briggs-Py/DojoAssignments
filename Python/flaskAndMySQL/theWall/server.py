from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import bcrypt, re

app = Flask(__name__)
mysql = MySQLConnector(app,'cdTheWall')
app.secret_key = "ThisIsSecret!"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/createAccount', methods=['POST', 'GET'])
def createaccount():
    return render_template('createAccount.html')

@app.route('/register', methods=['POST'])
def register():
    valid = True

    for field in request.form:
        if len(request.form[field]) == 0:
            flash(field + " must not be empty")
            valid = False

    if len(request.form['first']) < 2 or len(request.form['last']) < 2:
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
        return redirect('/createAccount')

    input_data = {
        'fname': request.form['first'],
        'lname': request.form['last'],
        'email': request.form['email'],
        'password': bcrypt.hashpw(request.form['password'].encode('utf8'), bcrypt.gensalt())
    }

    user_data = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:fname, :lname, :email, :password, NOW(), NOW())"

    add_user = mysql.query_db(user_data, input_data)
    flash("Success!")

    session['user'] = add_user
    session['name'] = request.form['first']
    return redirect('/wall')

@app.route('/login', methods=['POST'])
def login():
    data =  {'email': request.form['email']}
    user_email = mysql.query_db("SELECT id, first_name, email, password FROM users WHERE email = :email", data)
    print user_email
    if user_email:
        if bcrypt.hashpw(request.form['password'].encode('utf8'), user_email[0]['password'].encode('utf8')) == user_email[0]['password']:
            session['user'] = user_email[0]['id']
            session['name'] = user_email[0]['first_name']
            return redirect('/wall')
        else:
            flash('Incorrect Password')
    else:
        flash("Invalid Email")


    return redirect('/')

@app.route('/wall')
def wall():
	messages = mysql.query_db("SELECT CONCAT(users.first_name, ' ', users.last_name) AS name, posts.*  FROM posts JOIN users ON users.id = posts.users_id ORDER BY created_at DESC;")
	for message in messages:
		data = {
			'message_id': message['id']
		}
		message['comments'] = mysql.query_db("SELECT comments.*, CONCAT(users.first_name, ' ', users.last_name) AS name FROM comments JOIN users ON users.id = comments.users_id WHERE posts_id = :message_id", data)

	return render_template('wall.html', messages=messages)

@app.route('/post', methods=['POST'] )
def post():
    data = {
		'user_id': session['user'],
		'message': request.form['post']
	}
    message_insert_query = "INSERT INTO posts (users_id, post) VALUES(:user_id, :message);"
    message_id = mysql.query_db(message_insert_query, data)
    return redirect('/wall')

@app.route('/comment')
def list():
    data = {
		'user_id': session['user'],
		'post_id': request.form['post_id'],
		'comment': request.form['comment']
	}
    comment_insert_query = "INSERT INTO comments (users_id, posts_id, comment) VALUES(:user_id, :post_id, :comment);"
    mysql.query_db(comment_insert_query, data)
    return redirect('/wall')

@app.route('/logout')
def logout():
	if 'user' in session:
		session.pop('user')
	if 'name' in session:
		session.pop('name')
	return redirect('/')

app.run(debug=True)
