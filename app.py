from flask import Flask, render_template, request, g, send_from_directory

app = Flask(__name__)

@app.route('/')
# def hello():
#     return "Hello World!"
def index():
    return render_template('DinO.html')

if __name__ == '__main__':
    app.run()
