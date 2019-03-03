from flask import Flask, render_template, request, g, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('DinO.html')

@app.route('/search')
def search():
	return render_template('search.html')

if __name__ == '__main__':
    app.run()
