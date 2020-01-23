import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";
import {ProfileData} from "../../data/profile-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = "???";
  // name:string;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;


  //TODO: inject the Spotify service
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService){
   //   var profile=new ProfileData();

  }
  // constructor(){}

  ngOnInit() {

  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

fillAboutMe(){

    let profile:ProfileData;
    let promise:Promise<ProfileData>= this.spotifyService.aboutMe();
      promise.then((response)=>{

          profile=response;

          console.log("about me promise: " +JSON.stringify(response));
      }
         ).then(()=>{
          this.name=profile.name;

          this.profile_pic=profile.imageURL;
          this.profile_link=profile.spotifyProfile;
      });


}

}
