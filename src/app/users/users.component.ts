
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserData } from '../services/user-data';
import { debounceTime } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserBootstrapModelComponent } from '../user-bootstrap-model/user-bootstrap-model.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUsers: UserData[] = [];
  searchForm!: FormGroup;
  username: string='';
  isModalOpen = false;
  selectedRow : any;
  
 

  constructor(private userService: UserService,private fb:FormBuilder, private modalService: BsModalService) {}

  ngOnInit() {
    this.userDetails();
    this.searchForm = this.fb.group({
      searchText:[]
    })
  }

  userDetails() {
    this.userService.getUsers().subscribe(
      (users: UserData[]) => {
        this.allUsers = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    ); 
  }


  

  onSearchTextChange(event:any){
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      if(this.searchForm.controls['searchText'].value.length > 1){
        const searchedEmployee = this.allUsers?.filter((b) => b.login.username.toLowerCase().startsWith(event.target.value))
        console.log('searched Employee', searchedEmployee);
        this.allUsers = searchedEmployee;
      }
      if(this.searchForm.controls['searchText'].value.length == 0){
        console.log("empty");
        this.userDetails();
      }
    })
  }


  openBootstrapModal(row: UserData){
    this.selectedRow = row;
    this.isModalOpen = true;
    // const initialState = {username:row.username,email:row.email,birthDate:row.birthDate};
    const initialState = {
      username: row.login.username,
      email: row.email,
      birthDate: row.birthDate
    };
    this.modalService.show(UserBootstrapModelComponent, { initialState});
  }

  closeModal(){ 
    this.isModalOpen = false;
  }
}
