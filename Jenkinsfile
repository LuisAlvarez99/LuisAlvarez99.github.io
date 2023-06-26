pipeline {
    agent { dockerfile true }
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr:'',artifactNumToKeepStr:'5',daysToKeepStr:'', numToKeepStr:'5')
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh 'docker run --rm -p 1017:3000 7c6b1e7d8c9ab9c14b0f5ee49f45910fe633c023'
                sh 'echo "Hello World"'
            }
        }
    }
}