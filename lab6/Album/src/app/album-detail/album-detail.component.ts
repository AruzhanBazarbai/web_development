import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  item:Album | undefined;
  loaded:boolean=true;
  title: string="";
  constructor(private route: ActivatedRoute,
    private albumsService:AlbumsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem(){
    this.loaded=false;
    this.route.paramMap.subscribe(params => {
      const id=+(params.get('id') || {})
      this.albumsService.getItem(id).subscribe(item=>{
        this.item=item;
        this.loaded=true;
      });
    });
  }
  updatePost(item:Album){
    item.title=this.title;
    this.title="";
    this.albumsService.updateItem(item).subscribe(()=>{
      console.log(`${item.id} updated!!!`);
    });
  }
  returnBack(){
    this.location.back();
  }

}
