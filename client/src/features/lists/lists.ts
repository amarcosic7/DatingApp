import { Component, inject, OnInit, signal } from '@angular/core';
import { LikesService } from '../../core/services/likes-service';
import { Member } from '../../types/member';
import { MemberCard } from "../members/member-card/member-card";

@Component({
  selector: 'app-lists',
  imports: [MemberCard],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists implements OnInit{
  
  private likesService = inject(LikesService);
  protected members = signal<Member[]>([]);
  protected predicate = 'liked';

  tabs = [
    {label: 'Liked', value: 'liked'},
    {label: 'Liked me', value: 'likedBy'},
    {label: 'Mutual', value: 'mutual'}
  ]

  setPredicate(predicate: string){
    if(this.predicate != predicate){
      this.predicate = predicate;
      this.loadLikes();
    }
  }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(){
    this.likesService.getLikes(this.predicate).subscribe({
      next: members => this.members.set(members)
    })
  }
}
