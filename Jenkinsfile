pipeline {
    agent { dockerfile true }
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr:'',artifactNumToKeepStr:'5',daysToKeepStr:'', numToKeepStr:'5')
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh 'echo "build docker container"'
                sh 'echo "Hello World"'
            }
        }
    }
}