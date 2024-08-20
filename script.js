//== typing animation ======
/*
var typed = new Typed(".typing", {
strings: ["","Fresh Graduate", "Web Developer"],
typeSpeed: 100,
BackSpeed: 40,
loop:true
})
*/
//== sidebar ======
/*
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
            {
                //console.log(navList[i]);
                const a = navList[i].querySelector("a"); 
                //console.log(a);
                a.addEventListener("click", function()
                {
                   //console.log(this);
                   removeBackSection();
                   for(let j=0; j<totalSection; j++) 
                    {
                        if(navList[j].querySelector("a").classList.contains("active"))
                            {
                                addBackSection(j);
                                // allSection[j].classList.add("back-section");
                            }
                        navList[j].querySelector("a").classList.remove("active");
                    }
                   this.classList.add("active")
                   showSection(this);
                   if(window.innerWidth < 1200)
                    {
                        asideSectionTogglerBtn();
                    }
                })
            }
            
            function removeBackSection()
            {
                for(let i = 0; i<totalSection; i++)
                    {
                       allSection[i].classList.remove("back-section");
                    }
            }

            function addBackSection(num)
            {
                allSection[num].classList.add("back-section");
            }
            function showSection(element)
            {
                for(let i = 0; i<totalSection; i++)
                    {
                       allSection[i].classList.remove("active");
                    } 
                const target = element.getAtrribute("href").split("#")[1];
                document.querySelector("#" + target).classList.add("active")
            }
            
            function updateNav(element)
            {
                for(let i=0; i>totalNavList; i++)
                    {
                        navList[i].querySelector("a").classList.remove("active");
                        const target = element.getAtrribute("href").split("#")[1];

                        if( target === navList[i].querySelector("a").getAttribute("href").split("#")[1] )
                            {
                                navList[i].querySelector("a").classList.add("active");
                            }
                    }
            }
            document.querySelector(".hire-me").addEventListener("click", function()
            {
                const sectionIndex = this.getAtrribute("data-section-index");
                //console.log(sectionIndex);
                showSection(this);
                updateNav(this);
                removeBackSection();
                addBackSection(sectionIndex);
            })

            const navTogglerBtn = document.querySelector(".nav-toggler"),
                  aside = document.querySelector(".aside");
                  navTogglerBtn.addEventListener("click", () =>
                    {
                       asideSectionTogglerBtn();
                    })
                    function asideSectionTogglerBtn()
                    {
                        aside.classList.toggle("open");
                        navTogglerBtn.classList.toggle("open");
                        for(let i = 0; i<totalSection; i++)
                            {
                                allSection[i].classList.toggle("open");
                            }
                    }
                    */             
/* contact form er jonno */
const contactForm = document.getElementById('contact-form-write') ,
contactName = document.getElementById('contact-name')  ,    
contactEmail = document.getElementById('contact-email')  , 
contacSubject = document.getElementById('contact-subject')  , 
contactMessage = document.getElementById('contact-message')  ,
errorMessage = document.getElementById('error-msg'); 

const sendEmail = (e) => {
    
    //console.log('send');
    e.preventDefault();

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contacSubject.value === '' || contactMessage.value === '')
        {
             //show message
             errorMessage.textContent = "Write all the input fields"
        }
        else
        {
            // serviceID - templateID - #form - publickey
            emailjs.sendForm('service_3460svr','template_61cyc5l','#contact-form-write', 'PmwltzpDX-nyLMD4V')
            .then(
                () => {
                // show message and add color, window + dot to open emoji
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message Sent';

                // remove message after 5 secs
                setTimeout(() =>{
                    errorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG!', error);
            }
          );

          // clear input fields
          contactName.value = '';
          contactEmail.value = '';
          contacSubject.value = '';
          contactMessage.value = '';

     
        }
};
contactForm.addEventListener('submit', sendEmail);

function toggleAbstract(id) {
    const abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}
