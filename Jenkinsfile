pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker { image 'node:18.16.0-alpine' }
            }
            steps {
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}