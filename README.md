1. **Road-trip-api: Backend Setup**

	- Install Java 16(OpenJDK)
	- Install Docker:
		- Windows:
			- Go this link: https://docs.docker.com/desktop/windows/install/
			- Choose **Hyper-V backend and Windows containers** to install docker
			- For installation, you can follow this tutorial as well
			  **(https://www.youtube.com/watch?v=_9AWYlt86B8&t=251s)**
		- Mac:
			- Go to this link: https://docs.docker.com/desktop/install/mac-install/
			- Choose **Mac with Intel chip** or **Mac with Apple chip** depending on your specific machine

	- Setup Project in IntelliJ
		- Import the project at the road-trip-planner parent dir (root of repository) into IntelliJ using existing sources
		- Import the inner road-trip-api subdirectory
			1. Go File > Project Structure > Modules > + > Import Module
			2. For this, choose to import using external model with Gradle
			3. IntelliJ should autodetect your Gradle project and download dependencies
		- Configure Lombok
			- Install Lombok Plugin for IntelliJ (IntelliJ IDEA > Preferences > Plugins ... Search for "Lombok" by Michail Plushnikov)
			- Enable Annotation Processing in IntelliJ Compliation (IntelliJ IDEA > Preferences > Build, Execution, Deployment > Compiler > Annotation Processors > Check "Enable annotation processing")
		- Deploy MySql: https://medium.com/containerum/how-to-deploy-mysql-in-docker-containers-ba870247eff7
		- From IntelliJ, create the default road-trip-planner database on the server: File > New > Data Source > Mysql
            1. Configure the connection:
               - Name: RTP - Local
               - Host: localhost
               - Port: 3306
               - User: root
               - Password: password
            2. Test Connection and hit OK
            3. On the right-hand side of IntelliJ, click on the "Database" tab
            4. For the road-trip-planner database, right click and navigate to New > Schema
            5. Add a new database named road-trip-planner and hit OK
        - Startup the API from IntelliJ SpringBoot Run Configuration
            - Specify VM Options
              -Dspring.profiles.active=development
        - Navigate to http://localhost:8080/ping
          - You should see the following output:
              - GET localhost:8080/ping
              - **pong!**

2. **road-trip-frontend: Frontend Setup**

	- Install VSCode: https://code.visualstudio.com/Download
	- Install Node.js: https://nodejs.org/en/download/
	- In the terminal, navigate to the road-trip-frontend directory and run the following commands:
		- `npm init`
		- `npm install --location=global yarn`
		- **(Windows PowerShell only)** `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`
		- Check yarn version: `yarn –version`
        - `yarn install`
		- Finally: `yarn dev`
	- Navigate to http://localhost:3000 - you should see the road trip application

3. **CI/CD Setup**

	- Setup an account with GCP if you don't already have one.
	- Create a Linux VM in GCP: This will be your production server.
		- Enable the Compute Engine API, and create a Linux VM Instance under that resource.
		- check the options for allowing both HTTP and HTTPS traffic to the VM. This should give your VM an external IP address once it's created.
		- Navigate to "VM instances" tab and click the "Set up firewall rules" option.
		- Select the "default-allow-http" rule, and select "Edit" at the top of the page.
		- In the "TCP Ports" section, add 8080 and 3000. This will allow you to access those ports from your local machine. If, in the future, you need to add more or different HTTP ports, you would do so in the same way. Also, if you want to add HTTPS ports, you would do so in the same way, just under the "default-allow-https" rule.
	- setup a GitLab runner: The GitLab runner waits for commits to be made to the branch it is configured to watch and runs a user-defined set of commands when one occurs. This runner must be linked to your repository first.
		- open an SSH terminal to your VM in GCP
		- install a GitLab runner on the VM using the following instructions (for Debian/Ubuntu/Mint): https://docs.gitlab.com/runner/install/linux-repository.html 
		- register the GitLab runner using the following instructions (for Linux; The runner executor should be 'shell'): https://docs.gitlab.com/runner/register/index.html 
		- install docker on your VM, using the following instructions (using the repository): https://docs.docker.com/engine/install/debian/#install-using-the-repository 
		- run the following command, giving your gitlab runner permissions to run docker commands: `sudo usermod -aG docker gitlab-runner` 
	- Write a gitlab-cli.yml file.
		- This file tells the GitLab runner what to do whenever a commit is made to the branch the file is in; You can learn more here: https://docs.gitlab.com/ee/ci/quick_start/
		- We want our runner to build a docker image for both our frontend and backend on a commit and then deploy those images as containers, along with our database image, to our production server. The way this is done is largely up to you; we have provided sample Dockerfiles and a sample gitlab-cli.yml file to give an example of how it could be achieved.
		- whenever a commit is made, a pipeline should be created for your GitLab project. You can view this pipeline to see its status while it is executing in the "CI/CD -> Pipelines" tab on GitLab.

This will get basic CI/CD functionality setup for your project. Feel free to customize this process to fit your needs as the project progresses.
