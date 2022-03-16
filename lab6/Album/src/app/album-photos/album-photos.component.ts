import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[]=[];
  loaded:boolean=true;
  constructor( private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(){
    this.route.paramMap.subscribe(params=>{
      const id=+(params.get('id') || {} );
      this.loaded=false;
      this.albumsService.getPhotos(id).subscribe(photos=>{
        this.photos=photos;
        this.loaded=true;
      })
    });
  }
  returnBack(){
    this.location.back();
  }

}
