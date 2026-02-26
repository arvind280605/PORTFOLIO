pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/arvind280605/PORTFOLIO.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building Application"
            }
        }

        stage('Test') {
            steps {
                echo "Testing Application"
            }
        }
    }
}
