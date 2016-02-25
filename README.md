# fireball-map
Interactive fireball intensity map

#Pre-requisites
* Flask
    - Ensure Flask is installed from : http://flask.pocoo.org/
* Python 
    - Ensure Python is installed (version 2.7 or higher): https://www.python.org/downloads/

#Run the UI
- npm install
- npm start

The configuration files are included in the repo and the application changes can be deployed directly to the existing environment on the console: dev1-dev.
#Deployment options
To deploy a NEW environment do the following:
    1. eb init -i 
        -to start interactive mode for initialization. Follow the prompts that come up. Choose us-east-1 (N.Virginia) and set up ssh keys. Choose python version 2.7 in keeping with the env for the app.
    2. eb create
        -to create the environment and deploy.
    3. eb open
        -opens the url to the application in your default browser.

To deploy to an existing environment:
    1. eb deploy
    
When a .gitignore file is present in the repository, the eb cli reads the gitignore and does not include those files in the source bundle. Specificy a .ebignore file to supersede the .gitignore (which the eb cli looks for by default).

For troubleshooting, start here: http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html
