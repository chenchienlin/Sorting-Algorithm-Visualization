node {
    git url: 'https://github.com/chenchienlin/Sorting-Algorithm-Visualization.git/',
    branch: 'master'
    def commit_id
    def app
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"                        
        commit_id = readFile('.git/commit-id').trim()                      
    }
    stage('Docker Build') {
        app = docker.build("chenchienlin/sort_visual")
    }
    stage('Docker Push') {
        docker.withRegistry('http://docker-registry:5000/v2/', '') {
            app.push("${commit_id}")
            app.push("latest")
        }
    }
    stage('Deploy') {
        kubernetesDeploy(configs: "sort_visual.yaml", kubeconfigId: "kubeconfig")
    }
}