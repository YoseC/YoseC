import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [MatCardModule, MatButtonModule, CommonModule]
})
export class ProjectsComponent {
  projects = [
    { name: 'Proyecto 1', description: 'Descripción del proyecto 1', link: '#' },
    { name: 'Proyecto 2', description: 'Descripción del proyecto 2', link: '#' },
    { name: 'Proyecto 3', description: 'Descripción del proyecto 3', link: '#' }
  ];
}

