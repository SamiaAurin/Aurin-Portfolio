//== typing animation ======
var typed = new Typed(".typing", {
    strings: ["","Fresh Graduate", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 40,
    loop:true
    })
    
    //== sidebar ======
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
                        for(let j=0; j<totalSection; j++) //youtube a totalNavList dise and kaaj korse amr kore nah
                            {
                                if(navList[j].querySelector("a").classList.contains("active"))
                                {
                                     //addBackSection(j);
                                     //console.log("back-section" + navList[j].querySelector("a"))
                                     allSection[j].classList.add("back-section");
                                }
                                navList[j].querySelector("a").classList.remove("active");
                            }
                       //console.log(this);
                       this.classList.add("active");
                       showSection(this);
                      
                    })
                }
                function showSection(element)
                {
                    for(let i = 0; i<totalSection; i++)
                    {
                       allSection[i].classList.remove("active");
                    } 
                   const target =  element.getAttribute("href").split("#")[1];
                   //target = href[1];
                   //console.log(target);
                   document.querySelector("#" + target).classList.add("active")
                }
        
            
                