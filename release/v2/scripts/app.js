riot.tag2('a-app', '<div class="e-background"></div> <a-navigation links="{links}"></a-navigation> <div class="e-overlay"></div> <div class="e-main-wrapper"> <a-header></a-header> <main data-is="{content}"></main> <a-footer></a-footer> </div>', '', '', function(opts) {
    var self = this
    this.content = 'a-404-index'
    this.links = [
      { label: 'home', href: '/#!home' },
      { label: 'projects', href: '/#!projects' },
      { label: 'contact', href: '/#!contact' }
    ]

    route.stop()
    route.start(true)
    route.base('#!')
    route(              function(){ self.update({content: 'a-404-index'}) })
    route('/(|home)',      function(){ self.update({content: 'a-home-index'}) })
    route('/projects/web',   function(){ self.update({content: 'a-projects-web'}) })
    route('/projects/other',   function(){ self.update({content: 'a-projects-other'}) })
    route('/projects',   function(){ self.update({content: 'a-projects-index'}) })
    route('/contact',   function(){ self.update({content: 'a-contact-index'}) })
});

riot.tag2('a-404-index', '<section class="e-section"> <h2>Not found</h2> <p>This page not exists.</p> </section>', '', '', function(opts) {
});

riot.tag2('a-contact-index', '<article class="e-section"> <h2>Contact</h2> <p>I am always open for some chat/coffee talk. If You have something interesting to share with me, please contact me.</p> <section> <div>tel.: <span>+385 98 966 9983</span></div> <div>mail: <a href="mailto:matijabelec1@gmail.com?Subject=Hello%20Matija">matijabelec1@gmail.com</a></div> <div>linkedin: <a href="https://linkedin.com/in/matijabelec" target="_blank">matijabelec</a></div> <div>skype: <span>matijabelec</span></div> </section> </article>', '', '', function(opts) {
});

riot.tag2('a-home-index', '<section class="e-section"> <img class="e-matija" src="/files/images/matija.jpg" alt="matija"> <h2>Hi, I\'m Matija.</h2> <p>This is my personal website. Enjoy!</p> </section> <section class="e-section"> <div class="col-6"> <article> <h2>Experience</h2> <section class="e-experience-card"> <h3>Freelancer</h3> <p>December 2016 - Present</p> </section> <section class="e-experience-card"> <h3>ExaByte d.o.o.</h3> <h4>Web Developer</h4> <p>July 2016 - December 2016</p> </section> <section class="e-experience-card"> <h3>ORION informatika i trgovina, Varaždin</h3> <h4>Web Developer</h4> <p>October 2016 - July 2016</p> </section> <section class="e-experience-card"> <h3>I piceki to znaju team</h3> <h4>Owner</h4> <p>July 2014 - May 2016</p> </section> <section class="e-experience-card"> <h3>Bigpandadev</h3> <h4>Co-owner</h4> <p>September 2015 - April 2016</p> </section> <section class="e-experience-card"> <h3>Belec programiranje</h3> <h4>Owner</h4> <p>October 2012 - February 2016</p> </section> </article> </div> <div class="col-6"> <article> <h2>Education</h2> <section class="e-education-card"> <h3>Faculty of Organization and Informatics, Varaždin</h3> <h4>Bachelor\'s degree, Information Systems</h4> <p>2011 - 2016</p> </section> <section class="e-education-card"> <h3>Obrtnička škola Koprivnica</h3> <h4>Electrotechnician, Electrotechnician</h4> <p>2007 - 2011</p> </section> </article> </div> </section> <section class="e-section"> <article> <h2>Skills</h2> <ul class="e-skills-list"> <li>PHP</li> <li>MySQL</li> <li>jQuery</li> <li>Python</li> <li>JavaScript</li> <li>C++</li> <li>Linux</li> <li>SQLite</li> <li>HTML</li> <li>IoT</li> <li>AngularJS</li> <li>CSS</li> <li>MQTT</li> <li>wxWidgets</li> <li>PostgreSQL</li> <li>RabbitMQ</li> <li>Zend Framework</li> <li>Programming</li> <li>Symfony</li> <li>Program Development</li> <li>MVC</li> <li>Arduino</li> <li>Web Development</li> <li>SQL</li> <li>C#</li> <li>Databases</li> <li>Unix</li> <li>Teamwork</li> <li>OCR</li> <li>Cascading Style Sheets (CSS)</li> <li>Database Design</li> <li>Internet of Things</li> <li>Software Development</li> <li>Web Services</li> <li>Web Applications</li> </ul> </article> </section> <section class="e-section"> <h2>Contact</h2> <section> <div>tel.: <span>+385 98 966 9983</span></div> <div>mail: <a href="mailto:matijabelec1@gmail.com?Subject=Hello%20Matija">matijabelec1@gmail.com</a></div> <div>linkedin: <a href="https://linkedin.com/in/matijabelec" target="_blank">matijabelec</a></div> <div>skype: <span>matijabelec</span></div> </section> </section>', '', '', function(opts) {
});

riot.tag2('a-projects-index', '<section class="e-section"> <h2>My projects</h2> <p>To be added soon... please check back later!</p> </section>', '', '', function(opts) {
});

riot.tag2('a-footer', '<div>by <a href="http://matijabelec.com">matija</a> &copy; {new Date().getFullYear()}</div>', '', 'class="e-footer"', function(opts) {
});

riot.tag2('a-header', '<div>matijabelec.com</div>', '', 'class="e-header"', function(opts) {
});

riot.tag2('a-navigation', '<nav class="e-nav"> <ul> <li each="{link in opts.links}"> <a href="{link.href}">{link.label}</a> <ul if="{link.sub}"> <li each="{link2 in link.sub}"> <a href="{link2.href}">{link2.label}</a> </li> </ul> </li> </ul> </nav>', '', '', function(opts) {
});
