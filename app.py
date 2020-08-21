from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# mySQL is installed. need to follow docs for database https://dev.mysql.com/doc/connector-python/en/connector-python-introduction.html