const Projects = [
    {
        name : "SimpleCalculator.com",
        about : "A calculator is a machine which allows people to do math operations more easily. For example, most calculators will add, subtract, multiply, and divide.",
        img : "calci.jpg.jpeg",
        gitrepo : "https://github.com/sripriyabellary/Calculator.git",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`
        ],
        project_link : "https://sripriyabellary.github.io/Calculator/",
        project_type : "Individual Project"
    },
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
