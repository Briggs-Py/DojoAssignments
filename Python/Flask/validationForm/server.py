from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
    session['name'] = request.form['name']
    temp = session['name']
    if len(temp) < 1:
        flash("Name Cannot Be Blank.")
        return redirect('/')
    session['dojo'] = request.form['dojo']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    temp = session['comment']
    if len(temp) > 51:
       flash("Your Comment Was Too Long.")
       return redirect('/')
    return redirect('/submit')

@app.route('/submit')
def submit():
    return render_template('submit.html')

@app.route('/back', methods=['POST'])
def back():
	session.clear()
  	return redirect('/')

app.run(debug=True)
