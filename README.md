<h1>HttpdDocker</h1>
<p>A project to set up a simple http web server using Docker.</p>
<br />
<br />
<h3>1. Install Docker</h3>
<p>Download Docker Desktop from the below link and install.</p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1"><a href="https://www.docker.com/">Docker</a></span></pre>
</div>
<br />
<br />
<h3>2. Install WSL Update</h3>
<p>Download the WSL Update for Windows 10 and install.</p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1"><a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi">WSL Update</a></span></pre>
</div>
<br />
<br />
<h3>3. Install httpd Docker Image</h3>
<p>Run the below in the command prompt to download and install the httpd Docker image. This image only contains Apache
    httpd with the defaults from upstream. <a href="https://hub.docker.com/_/httpd">httpd Image</a></p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1">docker pull httpd</span></pre>
</div>
<br />
<br />
<h3>4. Add Dockerfile</h3>
<p>Create a Dockerfile in your project, this is just a regular file with no extension called "Dockerfile" in the root of
    your project that is used to create the image.</p>
<br />
<br />
<h3>5. Add the image instructions</h3>
<p>Add the below to create a copy of the image httpd:2.4 and then COPY you web application to the hosted path on the
    http image/server.</p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1">FROM httpd:2.4<br />COPY ./public-html/ /usr/local/apache2/htdocs/</span></pre>
</div>
<br />
<br />
<h3>6. Build the image</h3>
<p>Run the below in the command prompt to build the image for Docker and then to run the image.</p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1">$ docker build -t my-apache2 .<br />$ docker run -dit --name my-running-app -p 8080:80 my-apache2</span></pre>
</div>
<br />
<br />
<h3>7. Confirm</h3>
<p>Confirm the web application is hosted and available.</p>
<div class="highlight highlight-text-shell-session position-relative">
    <pre><span class="pl-c1"><a href="http://localhost:8080">http://localhost:8080</a></span></pre>
</div>
<br />
<br />
