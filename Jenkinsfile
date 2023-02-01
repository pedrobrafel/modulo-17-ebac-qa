pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git url:'https://github.com/pedrobrafel/modulo-17-ebac-qa', branch: 'main' 
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                 bat 'npm run test'
            }
        }
    }
}
