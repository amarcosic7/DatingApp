import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { User } from '../types/user';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected title = 'Dating app';
  protected members = signal<User[]>([]);
  protected router = inject(Router);
    
  async ngOnInit(){
    this.members.set(await this.getMembers());
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accountService.curentUser.set(user);
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
