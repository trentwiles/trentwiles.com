---
layout: page.liquid
pageTitle: Home
description: "I'm Trent Wiles, a Computer Science & Criminal Justice student studying at Northeastern University. I program, cycle, and travel the world from time to time."
showTitle: false
---

<h2>Welcome!</h2>
<img id="floating-image" src="https://trentwil.es/a/1694502358338.jpg" alt="Me, Trent Wiles">
<style>
#floating-image {
    position: absolute;
    width: 5%;
    height: auto;
    pointer-events: none;
    transform: translate(-50%, -50%);
    display: none;
}
</style>

<p id="hoverarea">I'm <a href="javascript:void()">Trent Wiles</a>, a <u>Computer Science & Criminal Justice</u> student studying at Northeastern University. I program, cycle, and travel the world from time to time.
</p>

<script>
  // ONLY execute following content load!
  // Prevent hoverArea null issue
  document.addEventListener("DOMContentLoaded", () => {
    const hoverArea = document.getElementById("hoverarea");
    const img = document.getElementById("floating-image");
    hoverArea.addEventListener("mouseenter", () => {
        img.style.display = "block";
    });
    hoverArea.addEventListener("mouseleave", () => {
        img.style.display = "none";
    });
    hoverArea.addEventListener("mousemove", (event) => {
        // displace from mouse by 30px to improve visibility
        img.style.left = `${event.clientX + 30}px`;
        img.style.top = `${event.clientY + 30}px`;
    });
  });
</script>

<!-- TODO: adjust these locations, and their respective icons -->
<div class="btn-group">
  <h4><i class="fa-solid fa-location-dot"></i> Boston, MA</h4>
  <div class="holder-ignore-me"></div>
  <div class="holder-ignore-me"></div>
  <h4><i class="fa-solid fa-location-dot"></i> New Haven, CT</h4>
</div>

<div class="btn-group">
  <button class="btn btn-default btn-ghost"><a href="mailto:me@trentwil.es"><i class="fa-solid fa-envelope"></i> me@trentwil.es</a></button>
  <button class="btn btn-default btn-ghost"><a href="https://www.linkedin.com/in/trentwiles/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></button>
  <button class="btn btn-default btn-ghost"><a href="https://github.com/trentwiles" target="_blank"><i class="fa-brands fa-github"></i> Github</a></button>
</div>
<style>
  /* spread out buttons, prevent grouping */
  .btn-group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
  }

.btn-group .btn {
display: inline-block;
}
</style>

<hr>
<h2 id="skills">Skills</h2>
<h4>> Languages</h4>
<div class="btn-group">
  <button class="btn btn-primary"><i class="fa-brands fa-java"></i>   Java</button>
  <button class="btn btn-primary"><i class="fa-brands fa-js"></i> Javascript</button>
  <button class="btn btn-primary"><i class="fa-brands fa-python"></i> Python</button>
  <button class="btn btn-primary"><i class="fa-brands fa-html5"></i> HTML/CSS</button>
  <button class="btn btn-primary"><i class="fa-brands fa-html5"></i> Kotlin</button>
</div>
<br>
<h4>> Frameworks</h4>
<div class="btn-group">
  <button class="btn btn-primary"><i class="fa-solid fa-flask"></i>   Flask</button>
  <button class="btn btn-primary"><i class="fa-solid fa-truck-fast"></i> ExpressJS</button>
  <button class="btn btn-primary"><i class="fa-solid fa-flask-vial"></i> JUnit</button>
  <button class="btn btn-primary"><i class="fa-solid fa-eye-dropper"></i> Jest</button>
  <button class="btn btn-primary"><i class="fa-solid fa-gears"></i> JQuery</button>
</div>
<br>
<h4>> Databases</h4>
<div class="btn-group">
  <button class="btn btn-primary"><i class="fa-solid fa-database"></i>   PostgreSQL</button>
  <button class="btn btn-primary"><i class="fa-solid fa-database"></i> MySQL</button>
  <button class="btn btn-primary"><i class="fa-solid fa-database"></i> SQLite</button>
  <button class="btn btn-primary"><i class="fa-solid fa-database"></i> MongoDB</button>
  <button class="btn btn-primary"><i class="fa-solid fa-database"></i> Redis</button>
</div>
<br>
<h4>> Infrastructure</h4>
<div class="btn-group">
  <button class="btn btn-primary"><i class="fa-solid fa-server"></i>   Caddy</button>
  <button class="btn btn-primary"><i class="fa-brands fa-github"></i> Github</button>
  <button class="btn btn-primary"><i class="fa-brands fa-digital-ocean"></i> DigitalOcean</button>
  <button class="btn btn-primary"><i class="fa-brands fa-linux"></i> Linux</button>
  <button class="btn btn-primary"><i class="fa-solid fa-gears"></i> Netlify</button>
</div>
<style>
  .fa-brands, .fa-solid {
    padding-right:10px;
  }
  .terminal-card a {
    color: #4335A7;
  }
  /* buttons are now fixed on mobile (big news!!!!) */
 .btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
    padding: 0 5px; /* edge bleeding prevention */
    overflow: hidden;
  }
  /* mobile button customization */
  @media (max-width: 768px) {
    .btn-group {
      justify-content: center;
    }
    .btn-group .btn {
      flex: 1 1 auto;
      /* keep button readiblity */
      min-width: 120px;
      /* prevention of left side overflow*/
      max-width: calc(50% - 5px);
      text-align: center;
    }
  }
</style>
<hr>
<h2 id="projects">Projects</h2>
<section id="section-1">
    <div class="terminal-card">
      <header>SitDownAndStudy (<a href="https://github.com/trentwiles/SitDownAndStudy">Github</a> | <a href="https://sitdownand.study"> Live Demo</a> )</header>
      <div>
        <p>Practice programming with AI-generated, LeetCode-style questions and run your code online. Created with <a href="https://asahoo.dev">Anish Sahoo</a>.</p>
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">NodeJS</button>
            <button class="btn btn-default btn-ghost">React</button>
            <button class="btn btn-default btn-ghost">Tailwind</button>
            <button class="btn btn-default btn-ghost">OpenAI API</button>
            <button class="btn btn-default btn-ghost">MongoDB</button>
        </div>
      </div>
    </div>
    <br>
    <div class="terminal-card">
      <header>Trace TL;DR (<a href="https://github.com/trentwiles/tracetldr">Github</a> | <a href="https://trace.trentwiles.com">Live Demo</a>)</header>
      <div>
        <p> Summarizes Northeastern's TRACE professor evaluations, using MongoDB and Google's Gemini AI.</p>
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">MongoDB</button>
            <button class="btn btn-default btn-ghost">Python</button>
            <button class="btn btn-default btn-ghost">Gemini</button>
            <button class="btn btn-default btn-ghost">Varnish</button>
            <button class="btn btn-default btn-ghost">JS/JQuery</button>
            <button class="btn btn-default btn-ghost">HTML/CSS</button>
        </div>
      </div>
    </div>
    <br>
    <div class="terminal-card">
      <header>NodeNews (<a href="https://github.com/trentwiles/NodeNews">Github</a>)</header>
      <div>
        <p>Simple newsletter mailer with a user interface and a functioning admin panel. My first full scale project written in NodeJS.</p>
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">NodeJS</button>
            <button class="btn btn-default btn-ghost">SQLite</button>
            <button class="btn btn-default btn-ghost">ExpressJS</button>
        </div>
      </div>
    </div>
    <br>
    <div class="terminal-card">
      <header>Shore Line East API (<a href="https://github.com/trentwiles/shorelineeastapi">Github</a> | <a href="https://api-sle.trentwil.es/"> Live Demo</a>)</header>
      <div>
        <p>Unofficial API for Shore Line East, Connecticut's shoreline commuter rail system. Developed by scraping data from their website.</p>
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">Python</button>
            <button class="btn btn-default btn-ghost">Beautiful Soup</button>
            <button class="btn btn-default btn-ghost">Varnish</button>
        </div> 
      </div>
    </div>
    <br>
    <div class="terminal-card">
      <header>BART API (<a href="https://github.com/trentwiles/BARTAPI">Github</a> | <a href="https://bart.trentwil.es/"> Live Demo</a> )</header>
      <div>
        <p>I reworked the BART API, scraping train times and station information directly from their website. It it designed as an unofficial replacement for the current (broken) API.</p>
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">Caddy Server</button>
            <button class="btn btn-default btn-ghost">Beautiful Soup</button>
            <button class="btn btn-default btn-ghost">Python</button>
        </div>      
      </div>
    </div>
    <br>
    <div class="terminal-card">
      <header>Notion Automated Export (<a href="https://github.com/trentwiles/NotionAutoExport">Github</a> | <a href="https://youtu.be/pp7c7q78A3g"> Video Demo</a>)</header>
      <div>
        <p>Simple CLI script to export a Notion page as static HTML and unzip the contents into a directory. Built by reverse engineering Notion's Internal API, as the official Notion API has no such option.</p> 
        <div class="btn-group">
            <button class="btn btn-default btn-ghost">Python</button>
        </div>  
      </div>
    </div>
</section>

<hr>
<h2>Legacy Projects</h2>

<section id="section-2">
      <div class="terminal-card">
        <header>AP Calculus BC Final (<a href="https://github.com/trentwiles/calcbcfinal">Github</a> | <a href="https://integral.trentwil.es/"> Live Demo</a> )</header>
            <div>
                <p>Tool that compares Integrals to Riemann Sums and the Midpoint Rule. This is the final project for my AP Calculus BC class for my senior year of high school. (2023)</p>
                <div class="btn-group">
                    <button class="btn btn-default btn-ghost">Javascript</button>
                    <button class="btn btn-default btn-ghost">LaTeX</button>
                </div>
            </div>
      </div>
    <br>
        <div class="terminal-card">
        <header>Flag (<a href="https://github.com/trentwiles/flag">Github</a>)</header>
            <div>
                <p>Upload and watch videos. A primitive YouTube clone. (2021)</p>
                <div class="btn-group">
                    <button class="btn btn-default btn-ghost">PHP</button>
                    <button class="btn btn-default btn-ghost">MySQL</button>
                </div>
          </div>
    </div>
    <br>
        <div class="terminal-card">
        <header>1337git (<a href="https://github.com/trentwiles/1337git">Github</a>)</header>
            <div>
                <p>Private Github frontend. (2023)</p>
                <div class="btn-group">
                    <button class="btn btn-default btn-ghost">PHP</button>
                    <button class="btn btn-default btn-ghost">MySQL</button>
                    <button class="btn btn-default btn-ghost">Javascript</button>
                </div>
            </div>
    </div>
    <br>
        <div class="terminal-card">
        <header>Dangerous User DB <br> (<a class="customColor" href="https://github.com/trentwiles/DangerousUserDB">Github</a> | <a href="https://web.archive.org/web/20210616201659/https://discord.riverside.rocks/">Archived Demo</a>)</header>
            <div>
                <p>Track reports of fraud on Discord accounts. (2020)</p>
                <div class="btn-group">
                    <button class="btn btn-default btn-ghost">PHP</button>
                    <button class="btn btn-default btn-ghost">MySQL</button>
                    <button class="btn btn-default btn-ghost">Apache Web Server</button>
                </div>
            </div>
        </div>
    <br>
</section>
<hr>
