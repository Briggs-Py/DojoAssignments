from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = 'thisisasecret'

@app.route('/')
def index():
	if not 'answer' in session:
		session['answer'] = random.randint(1, 100)

	if 'message' in session:
		message = session['message']
	else:
		message = None
	return render_template('index.html', message=message)

@app.route('/result', methods=["POST"])
def result():
	number = int(request.form['number'])

	if number > session['answer']:
		session['message'] = 'Too high!'
	elif number < session['answer']:
		session['message'] = 'Too low!'
	else:
		session['message'] = str(session['answer']) + ' was the number!'
	return redirect('/')

@app.route('/reset')
def reset():
	session.pop('message')
	session.pop('answer')

	return redirect('/')



app.run(debug=True)
