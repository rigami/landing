Landing page for rigami project


#####Build project
`$ docker build -t rigami-landing --build-arg SSH_PRV_KEY="$(cat ~/.ssh/id_rsa)" --build-arg SSH_PUB_KEY="$(cat ~/.ssh/id_rsa.pub)" .`
