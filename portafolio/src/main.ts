import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/features/home/home.component';
import { AboutComponent } from './app/features/about/about.component';
import { ProjectsComponent } from './app/features/projects/projects.component';
import { ContactComponent } from './app/features/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ],
});
