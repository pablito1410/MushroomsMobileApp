import {Component, OnInit} from '@angular/core';
import {Discovery} from "../../model/discovery";
import { MdDialog} from "@angular/material";
import {DiscoveryService} from "../../services/discovery.service";

@Component({
    moduleId: module.id,
    selector: 'discoveries-cmp',
    templateUrl: 'discoveries.component.html'
})
export class DiscoveriesComponent implements OnInit {
    model: any = {};
    discoveries: any[];
    selectedOption: string;

    constructor(
        public dialog: MdDialog,
        private discoveryService: DiscoveryService) {}

    ngOnInit(){
        // this.discoveryService.getAll().subscribe(
        //     value => this.discoveries = value
        // );

        this.discoveries = [
            {id : 'Podgrzybek'},
            {id : 'Maślak'},
            {id : 'Pieczarka'},
            {id : 'Kurka'},
            {id : 'Muchomor'}
        ]
    }

    openAddDiscoveriesDialog() {


    }
}