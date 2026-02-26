pipeline {
    agent any

    tools {
        sonarRunner 'SonarScanner'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/arvind280605/PORTFOLIO.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('My Sonar Server') {
                    sh "${tool 'SonarScanner'}/bin/sonar-scanner"
                }
            }
        }

        stage('Build') {
            steps {
                echo "Build Successful"
            }
        }
    }
}
