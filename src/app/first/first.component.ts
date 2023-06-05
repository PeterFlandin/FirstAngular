import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

prenom : String = "je mappelle JeanJean";

color = 'green';

hd=false;


traitement() {
  alert("bonjour");
}


}
