# Awesome Clinic Front with React 

This is a basic react landing page for Awesome Clinic, showing how to configure a react-application with basic routing and basic css styling.

# Working site at: http://20.69.206.0/


How to run: 

1. Download or fork this repository to your local machine.<br/>
2. before starting the local development environment, run the following command: 

> yarn install

This is to install all the dependencies required to run the library.

3. Execute the following command to start your server

> yarn start

4. To run test from `src/test` folder

> yarn test

5. Head to `localhost:3000` to check out the application

Docker Image Frontend: `ashwilliams/awesome-clinic-front:react` https://hub.docker.com/repository/docker/ashwilliams/awesome-clinic-front <br/>
Docker Image Backend: `ashwilliams/awesome-clinic-backend:flask` https://hub.docker.com/repository/docker/ashwilliams/awesome-clinic-backend <br/><br/>

#AKS Deployment

1. Create the static ip for the Loadbalancer https://docs.microsoft.com/en-us/azure/aks/static-ip <br/>
2. Create one `namespace`, like `kubectl create ns clinic`
3. Replace the static IP in the `FullDeployment.yaml` manifest
4. Apply the manifest with `kubectl apply -f FullDeployment.yaml -n clinic`


