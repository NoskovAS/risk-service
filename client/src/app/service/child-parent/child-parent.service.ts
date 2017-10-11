import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ChildParentService {
    variable;

    passVariable(index) {
        this.variable = index;
    }

    getVariable() {
        return this.variable;
    }


}
