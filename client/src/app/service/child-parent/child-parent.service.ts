import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ChildParentService {
    variable: any;
    secondVar: any;

    passVariable(index: any): any {
        this.variable = index;
    }

    getVariable(): any {
        return this.variable;
    }

    passSecondVariable(index: any): any {
        this.secondVar = index;
    }

    getSecondVariable(): any {
        return this.secondVar;
    }


}
