pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/arvind280605/PORTFOLIO.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('My Sonar Server') {
                    sh 'sonar-scanner'
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
