const app = document.querySelector(".app");
fetch("./js/Projects.json")
  .then((response) => response.json())
  .then((data) => {
    const allProjects = document.createElement("section");
    allProjects.className = "all_projects";

    data.forEach((project) => {
      let blank = true;
      const projectDiv = document.createElement("div");
      projectDiv.className = "project " + project.class;
      // project name element
      const projectName = document.createElement("h2");
      projectName.className = "project-name";
      projectName.innerHTML = project.name;
      // project image element
      const projectImage = document.createElement("img");
      projectImage.className = "project-image";
      projectImage.src = project.image;
      projectImage.alt = project.name;
      // project image element
      const projectDescription = document.createElement("p");
      projectDescription.className = "project-description";
      projectDescription.innerHTML = project.description;
      /* dev controls */
      const devControls = document.createElement("dev");
      devControls.className = "dev-controls";
      // project link;
      const projectLink = document.createElement("a");
      projectLink.className = "project-link";
      projectLink.href = project.url;
      projectLink.innerHTML = "live demo";
      // src code
      const projectSrc = document.createElement("a");
      projectSrc.className = "project-projectSrc";
      projectSrc.href = project.srcCode;
      projectSrc.innerHTML = "src";
      // handle go to new site on click
      if (blank) {
        projectLink.setAttribute("target", "_blank");
        projectSrc.setAttribute("target", "_blank");
      }
      devControls.appendChild(projectLink);
      devControls.appendChild(projectSrc);

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectImage);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(devControls);

      allProjects.appendChild(projectDiv);
    });
    app.appendChild(allProjects);

    let shuffles = document.querySelectorAll(".filter-btns span");
    let boxes = document.querySelectorAll(".all_projects .project");
    console.log(boxes);

    // projects filter
    shuffles.forEach((ele) => {
      ele.addEventListener("click", (shuffle) => {
        shuffles.forEach((span) => {
          span.classList.remove("active");
        });
        shuffle.target.classList.add("active");
      });
    
      // handel projects filtered by dataset projects
      ele.addEventListener("click", function handelProjectsFilter() {
        boxes.forEach((proj) => {
          proj.style.display = "none";
        });
        document.querySelectorAll(this.dataset.projects).forEach((project) => {
          project.style.display = "block";
        });
      });
    });
  })
  .catch((error) => console.error("Error loading the projects:", error));