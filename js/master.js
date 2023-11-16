let shuffles = document.querySelectorAll('.filter-btns span');
let boxes = document.querySelectorAll('.projects .project');

shuffles.forEach((ele) => {
    ele.addEventListener('click', (shuffle) => {
        shuffles.forEach((span) =>{
            span.classList.remove('active');
        });
        shuffle.target.classList.add('active');
    });


    // handel projects filtered by dataset projects
    ele.addEventListener('click', function handelProjectsFilter() {
        boxes.forEach((projects) => {
            projects.style.display = 'none';
        });
        document.querySelectorAll(this.dataset.projects).forEach(project => {
            project.style.display = 'block';
        });
    });
});