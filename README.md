
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

