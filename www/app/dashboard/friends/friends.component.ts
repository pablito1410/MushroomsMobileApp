import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import { MdDialog} from "@angular/material";
import {SearchFriendsComponent} from "./search-friends/search-friends.component";
import {FriendService} from "../../services/friend.service";

@Component({
    moduleId: module.id,
    selector: 'friends-cmp',
    templateUrl: 'friends.component.html'
})
export class FriendsComponent implements OnInit {
    model: any = {};
    users: any[];
    selectedOption: string;

    constructor(
        public dialog: MdDialog,
        private friendService: FriendService) {}

    openSearchFriendsDialog() {
        let dialogRef = this.dialog.open(SearchFriendsComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    ngOnInit(){
        this.friendService.getAll().subscribe(
            value => this.users = value
        );
    }

    // ngOnInit(){
    //     this.users = [
    //         {username : 'mati'},
    //         {username : 'bogdan'},
    //         {username : 'marian'},
    //         {username : 'kasia'},
    //         {username : 'grzybiarz'},
    //         {username : 'muchomor'},
    //         {username : 'przemo'},
    //         {username : 'zbigniew'},
    //         {username : 'roman'},
    //         {username : 'jez'},
    //         {username : 'szybki'},
    //         {username : 'zbieracz'},
    //         {username : 'fajny'},
    //         {username : 'podgrzybek'},
    //         {username : 'grzyb'},
    //         {username : 'kurka'}
    //     ]
    // }
}