import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  categories: string[] = [
    'All',
    'UI/UX',
    'Web Design',
    'Games',
  ]

  projects: any[] = [
    {
      category: 'UI/UX',
      img: '/assets/images/projects/uiux1.png'
    },
    {
      category: 'UI/UX',
      img: '/assets/images/projects/uiux2.png'
    },
    {
      category: 'UI/UX',
      img: '/assets/images/projects/uiux3.jpg'
    },
    {
      category: 'UI/UX',
      img: '/assets/images/projects/uiux4.jpg'
    },
    {
      category: 'Web Design',
      img: '/assets/images/projects/web1.jpg'
    },
    {
      category: 'Web Design',
      img: '/assets/images/projects/web2.png'
    },
    {
      category: 'Web Design',
      img: '/assets/images/projects/web3.jpg'
    },
    {
      category: 'Games',
      img: '/assets/images/projects/games1.jpg'
    },
    {
      category: 'Games',
      img: '/assets/images/projects/games2.jpg'
    },
    {
      category: 'Games',
      img: '/assets/images/projects/games3.jpg'
    }
  ]

  selectedCategory: string = this.categories[0];
  showedProjects: any[] = [...this.projects];

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    this.filterProjects();
  }

  filterProjects() {
    this.showedProjects = this.projects.filter(e => e.category === this.selectedCategory || this.selectedCategory === 'All');
  }
}
