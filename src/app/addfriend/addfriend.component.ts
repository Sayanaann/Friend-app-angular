import { Component } from '@angular/core';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""


  readvalues=()=>
  {
let data:any = {"name":this.name,"friendName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
console.log(data)
  }
}
