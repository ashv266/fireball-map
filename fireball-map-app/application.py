from flask import Flask
 
application = Flask(__name__)
keyAlias = "alias/testKMSKey"

@application.route('/CheckKeyName')
def hello_world():
    return 'Hello World! This is Ash and the Beanstalk. Here is the key: '+keyAlias

if __name__ == '__main__':
    application.debug = True
    application.run()
 
