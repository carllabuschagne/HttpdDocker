<h1>HttpdDocker</h1>
<p>A project to set up a simple http web server using Docker.</p>

<br />

<h3>1. Install Docker</h3>
<p>Download Docker Desktop from the below link and install.</p>
<a href="https://www.docker.com/">Docker</a>

<br />

<h3>2. Install WSL Update</h3>
<p>Download the WSL Update for Windows 10 and install.</p>
<a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi">WSL Update</a>

<br />

<h3>3. Add Dockerfile</h3>
<p>Create a Dockerfile in your project, this is just a regular file with no extension called "Dockerfile" in the root of
    your project that is used to create the image.</p>

<br />

<h3>4. Add the image instructions</h3>
<p>Add the below to create a copy of the image httpd:2.4 and then COPY you web application to the hosted path on the
    http image/server.</p>
<div style="font-family: 'Courier New', Courier, monospace; font-size: small;">
    <ul>
        <li>FROM httpd:2.4</li>
        <li>COPY ./public-html/ /usr/local/apache2/htdocs/</li>
    </ul>
</div>

<br />

<h3>5. Build the image</h3>
<p>Run the below in the command prompt to build the image for Docker and then to run the image.</p>
<div style="font-family: 'Courier New', Courier, monospace; font-size: small;">
    <ul>
        <li>$ docker build -t my-apache2 .</li>
        <li>$ docker run -dit --name my-running-app -p 8080:80 my-apache2</li>
    </ul>
</div>

<br />

<h3>6. Confirm</h3>
<p>Confirm the web application is hosted and available.</p>
<p>Visit http://localhost:8080</p>
