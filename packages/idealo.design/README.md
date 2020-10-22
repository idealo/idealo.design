# Design System


[Internal Rancher Stage](https://design.k8s-dpg.eu.idealo.com/)

[Public Page: idealo.design](http://idealo.design)

## Contribution
Thank you for considering a contribution! This project lives with its contributors:

*HERE WILL BE A LIST OF CONTRIBUTORS*

### Deployment
Note 1
> Currently the Deployment is semi-automated: there is a script which locally builds a Docker image and pushes
it to the idealo Artifactory instance. Then the newly built image needs to be manually deployed in the Rancher UI.

Note 2
> The script is not tested on other systems than MacOSX but it is expected to work on Linux-based systems.

#### 1. Log in to Artifactory Container Image Repo

```
 design-system $ docker login  repo.eu.idealo.com:5101
```

(If asked, use your idealo LDAP credentials)

#### 2. Build the Docker Image and push it to Artifactory

```
 design-system $ ./scripts/deploy
```

(This requires a local Docker client)

#### 3. Redeploy on Rancher
Then go to [the Rancher UI](https://prc.k8s.eu.idealo.com/p/c-fjthq:p-hxgmn/workloads) and in the line with the Name
*"design-system-deployment"* click the three-dotted-button and select *"Redeploy"*.
