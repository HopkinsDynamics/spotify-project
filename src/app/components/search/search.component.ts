import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';
import {ProfileData} from "../../data/profile-data";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  done:boolean=false;
  track:boolean=false;
    categoryCarouselID:string="categoryID";


  constructor(private spotifyService:SpotifyService) {

  }

  ngOnInit() {
  }

  search() {
    //TODO: call search   function in spotifyService and parse response

      console.log("the string:"+ this.searchString);
    console.log(this.searchCategory);

      let promise:Promise<ResourceData[]>= this.spotifyService.searchFor(this.searchCategory,this.searchString);
      promise.then((response)=>{
          this.resources=response;
          console.log(  this.resources[0].name);
          console.log("about me promise: " +JSON.stringify(response));
          }
      ).then(()=>{
        //if type
          this.done=true;
          if(this.searchCategory==="artist"){this.track=false;}
          if(this.searchCategory==="album"){this.track=false;}
          if(this.searchCategory==="track"){this.track=true;}
      });

  }

}
