let shuffles = document.querySelectorAll(".filter-btns span");
let boxes = document.querySelectorAll(".all_projects .project");

shuffles.forEach((ele) => {
  ele.addEventListener("click", (shuffle) => {
    shuffles.forEach((span) => {
      span.classList.remove("active");
    });
    shuffle.target.classList.add("active");
  });

  // handel projects filtered by dataset projects
  ele.addEventListener("click", function handelProjectsFilter() {
    boxes.forEach((projects) => {
      projects.style.display = "none";
    });
    document.querySelectorAll(this.dataset.project).forEach((project) => {
      project.style.display = "block";
    });
  });
});
const app = document.querySelector(".app");

fetch("./js/Projects.json")
  .then((response) => response.json())
  .then((data) => {
    const allProjects = document.createElement("section");
    allProjects.className = "all_projects";

    data.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = project.class;
      // project name element
      const projectName = document.createElement("h2");
      projectName.className = "project-name";
      projectName.innerHTML = project.name;
      // project image element
      const projectImage = document.createElement("img");
      projectImage.src = project.image;
      projectImage.alt = project.name;
      // project image element
      const projectDescription = document.createElement("p");
      projectDescription.className = "project-description";
      projectDescription.innerHTML = project.description;
      // project link
      const projectLink = document.createElement("a");
      projectLink.className = "project-link";
      projectLink.href = project.url;
      const eyeLink = document.createElement("img");
      eyeLink.src = "../assets/eys.jpeg";
      eyeLink.alt = `eyelive`;
      projectLink.appendChild(eyeLink);

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectImage);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(projectLink);
      allProjects.appendChild(projectDiv);
    });
    app.appendChild(allProjects);
  })
  .catch((error) => console.error("Error loading the projects:", error));
