node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"                        
        commit_id = readFile('.git/commit-id').trim()
    }
    stage('Test') {
        nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm install'
        }
    }
    stage('Docker build/push') {
        docker.withRegistry('https://index.docker.io/v1/', 'chenchienlin') {
        def app = docker.build("chenchienlin/sort_visual:${commit_id}", '.').push()
        }
    }
}