(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  const links = [...document.querySelectorAll('.nav-link')];
  const publicationList = document.querySelector('.publication-list');
  if (publicationList) {
    publicationList.insertAdjacentHTML('beforeend', '<article class="publication-card"><p class="period">2025</p><div><h3>Regional Heatwave Prediction Using Deep Learning Models In Bangladesh</h3><p class="venue">IEEE &middot; 2nd International Conference on Information and Communication Technology (ICICT 2024)</p><p>Explored LSTM, Bi-LSTM and CNN models to predict heatwave days across four heatwave-prone districts in Bangladesh&mdash;Dhaka, Rajshahi, Bogra and Dinajpur&mdash;using 25 years of meteorological data. Bi-LSTM achieved the highest accuracy, supporting more effective early-warning systems.</p><a class="text-link" href="https://doi.org/10.1109/ICICT64387.2024.10839717" target="_blank" rel="noopener noreferrer">Read publication <span aria-hidden="true">&rarr;</span></a></div></article>');
    const publicationLinks = publicationList.querySelectorAll('.text-link');
    const directLinks = [
      'https://link.springer.com/chapter/10.1007/978-981-97-9112-5_20',
      'https://dl.acm.org/doi/10.1145/3723178.3723247'
    ];
    directLinks.forEach((href, index) => {
      const link = publicationLinks[index];
      if (!link) return;
      link.href = href;
      link.innerHTML = 'Read publication <span aria-hidden="true">&rarr;</span>';
    });
  }
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    timeline.innerHTML = '<article><p class="period">March 2025 &mdash; Present</p><div><h3>Junior Software Engineer</h3><p class="company">W3 Engineers Ltd.</p><ul class="experience-points"><li>Develop frontend features for PRESTO, an AI-based website builder built with GrapesJS, React and Next.js.</li><li>Build and integrate frontend features with application APIs.</li><li>Design and develop HTML, CSS and JavaScript templates for the PRESTO builder.</li></ul></div></article><article><p class="period">November 2024 &mdash; February 2025</p><div><h3>Software Engineer Intern</h3><p class="company">W3 Engineers Ltd.</p><ul class="experience-points"><li>Completed engineering assignments spanning frontend, backend, automation and AI development.</li><li>Worked with HTML, CSS, JavaScript, Node.js, Express, Python, Flask, Django, React, Next.js, Go, Beego, Selenium, Scrapy, LLMs and Git version control.</li><li>Contributed to HRcomrades, an AI hackathon project built with CrewAI and the ChatGPT API.</li></ul></div></article>';
  }
  const prestoTags = document.querySelector('.featured-project .tags');
  if (prestoTags) prestoTags.innerHTML = '<li>GrapesJS</li><li>React</li><li>Next.js</li><li>HTML</li><li>CSS</li><li>JavaScript</li>';
  const projects = document.querySelector('#projects');
  if (projects) {
    projects.innerHTML = '<div class="section-intro"><p class="eyebrow">04 / Portfolio</p><h2 id="projects-title">Professional Projects</h2><p>A selection of products and platforms I\'ve contributed to throughout my professional experience.</p></div><article class="featured-project"><div class="project-visual visual-presto"><span>PRESTO</span><small>AI-powered website builder</small></div><div class="project-content"><p class="eyebrow">Featured professional project</p><h3>PRESTO</h3><p class="project-subtitle">AI-Powered Website Builder</p><p>An AI-powered website building platform that enables users to create and customize websites through an intuitive visual editing experience.</p><p class="contribution"><strong>Contribution:</strong> Frontend development, reusable UI components, template development, API integration and GrapesJS-based visual editing features.</p><ul class="tags"><li>GrapesJS</li><li>React</li><li>Next.js</li><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></div></article><div class="other-projects"><article><div class="project-visual" style="min-height:9rem;background:#243143;"><span style="font-size:2rem">OwnerDirect</span><small>Vacation rental platform</small></div><p class="eyebrow">Professional Project</p><h3>OwnerDirect</h3><p>Contributed to the development and maintenance of a large-scale vacation rental platform by implementing frontend features and developing responsive UI components.</p><a class="text-link" href="https://ownerdirect.com/" target="_blank" rel="noopener noreferrer">Live Site <span aria-hidden="true">&rarr;</span></a></article><article><div class="project-visual" style="min-height:9rem;background:#29352f;"><span style="font-size:2rem">SmarTours</span><small>Travel booking platform</small></div><p class="eyebrow">Professional Project</p><h3>SmarTours</h3><p>Contributed to the development and enhancement of a travel booking platform by building responsive interfaces and improving user experience.</p><a class="text-link" href="https://smartours.com/" target="_blank" rel="noopener noreferrer">Live Site <span aria-hidden="true">&rarr;</span></a></article></div>';
  }
  const closeMenu = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (!entry.isIntersecting) return; links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }); }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
})();
