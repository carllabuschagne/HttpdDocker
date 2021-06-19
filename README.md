# HttpdDocker


<p>Project to set up a simple http web server using Docker.</p>



<h2>Download and install Docker Desktop:</h2>

<a href="https://www.docker.com/">Docker</a>



Download and install WSL for Windows 10.

https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi



Create a Dockerfile in your project, this is just a regullar file with no extension called "Dockerfile" in the root of your project.
Add the below to create a copy of the image httpd:2.4 and then COPY you web application to the hosted path on the http image/server.

FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/



Run the below in the command prompt to build the image for docker and then to run the image:

$ docker build -t my-apache2 .
$ docker run -dit --name my-running-app -p 8080:80 my-apache2



Confirm the web application is hosted and available:

Visit http://localhost:8080


