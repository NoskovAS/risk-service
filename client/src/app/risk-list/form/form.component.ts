import { Component, OnInit, AfterContentChecked, OnChanges, OnDestroy, Input, Output, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, ValidatorFn } from '@angular/forms';
import { Data } from '../data.class';
import { Risk } from '../risk.class';
import { RiskListService } from '../../service/risk-list/risk-list.service';
import { TableService } from '../../service/table/table.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterContentChecked, OnDestroy {
    errorMessage: boolean = false;


    user; // User object
    public riskForm: FormGroup = null;

    items: Data[] = [];
    index: number = 0;

    riskSelected;
    suggestSelected;
    dergeeSelected;
    check: number = 1; // If it is true, suggestions input are included (riskname check in input)

    // Risk name options
    riskItems: any[] = [
        { id: 1, name: 'Реализация важного модуля в проекте' },
        { id: 2, name: 'Задержка в покупке оборудования/ПО' },
        { id: 3, name: 'Внутренние сложности календарного планирования' },
        { id: 4, name: 'Отсутствие коммуникации между представителем и заказчиком' },
        { id: 5, name: 'Недостаток квалифицированных специалистов' },
        { id: 6, name: 'Высокая вероятность изменения требований проекта' }
    ];

    suggestItems1: any[] = [
        { id: 1, name: 'Минимизация количества привлеченных для разработки проекта junior-программстов' },
        { id: 2, name: 'Разбиение задачи на короткие этапы' },
        { id: 3, name: 'Грамотная оценка рисков руководителями проекта' }
    ];

    suggestItems2: any[] = [
        { id: 1, name: 'Использование алтернантивного ПО' },
        { id: 2, name: 'ПО, моделирующее работу оборудования' },
        { id: 3, name: 'Использование программных заглушек для аппаратной части' }
    ];

    suggestItems3: any[] = [
        { id: 1, name: 'Создание резерва времени на случай ошибок планирования' },
        { id: 2, name: 'Максимальное привлечение программистов к оценке сроков' },
        { id: 3, name: 'Грамотная оценка рисков руководителями проекта' }
    ];

    suggestItems4: any[] = [
        { id: 1, name: 'Поддержка постоянного взаимодействия с заказчиком' },
        { id: 2, name: 'Согласование пользовательских интерфейсов и разработка прототипа продукта' },
        { id: 3, name: 'Периодические поставки тестовых версий конечным пользователям для их оценки' }
    ];

    suggestItems5: any[] = [
        { id: 1, name: 'Привлечение экспертов-консультантов на начальных этапах' },
        { id: 2, name: 'Учет в оценках трудоемкости издержек на обучение сотрудников' },
        { id: 3, name: 'Уменьшение потерь от текучести кадров, привлекая на начальном этапе избыточное число участников' },
        { id: 4, name: 'Учет в оценках «время разгона» для новых сотрудников' }
    ];

    suggestItems6: any[] = [
        { id: 1, name: 'Переоценка проекта каждый раз, когда требования добавляются / изменяются (уклонение)' },
        {
            id: 2,
            name: 'Итерационная разработка. Контракт с компенсацией затрат на основе «Time and Materials» (передача риска Заказчику)'
        },
        { id: 3, name: 'Учет в оценках трудоемкости и сроков возможности роста требований, например, на 50% (резервирование риска)' }
    ];

    degree: any[] = [
        { id: 1, name: 'Low' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'High' }
    ];


    constructor(private fb: FormBuilder,
        private riskListService: RiskListService,
        private tableService: TableService,
        private childParentService: ChildParentService
    ) {
        this.riskForm = fb.group({
            'riskname': ['', Validators.required],
            'hoursinfluence': ['', Validators.required],
            'costinfluence': ['', Validators.required],
            'probability': ['', Validators.required],
            'impact': ['', Validators.required],
            'riskSprints': ['', Validators.required],
            'numberOfSprints': ['', Validators.required],
            'date': new Date,
            'suggestions': ['', Validators.required],
            'validate': ''
        });
    }

    ngOnInit() {
        this.items = [];
        this.riskRecovery();
        this.user = JSON.parse(localStorage['user']);
    }

    ngAfterContentChecked() {
        this.riskForm.value.suggestions = this.suggestSelected;
        if (this.riskForm.value.riskname === 'Реализация важного модуля в проекте') {
            return this.check = 1;
        } else if (this.riskForm.value.riskname === 'Задержка в покупке оборудования/ПО') {
            return this.check = 2;
        } else if (this.riskForm.value.riskname === 'Внутренние сложности календарного планирования') {
            return this.check = 3;
        } else if (this.riskForm.value.riskname === 'Отсутствие коммуникации между представителем и заказчиком') {
            return this.check = 4;
        } else if (this.riskForm.value.riskname === 'Недостаток квалифицированных специалистов') {
            return this.check = 5;
        } else if (this.riskForm.value.riskname === 'Высокая вероятность изменения требований проекта') {
            return this.check = 6;
        }
        this.riskForm.value.suggestions = this.suggestSelected;
        if (this.items.length > 0) {
            this.index = (this.tableService.findMaxItem(this.items)) + 1;
        }
    }

    ngOnDestroy() { }

    @HostListener('document:click') onMouseEnter() {
        console.log('trrttr');
    }

    // Adding table values from array
    public addItem(form) {
        // Adding values
        this.items.push(new Data(
            form.value.riskname,
            this.tableService.priorityCalculate(
                this.tableService.formatProbability(form.value.probability),
                this.tableService.formatImpact(form.value.impact)
            ),
            form.value.hoursinfluence,
            form.value.costinfluence,
            this.tableService.chanceCalculate(form.value.riskSprints, form.value.numberOfSprints),
            form.value.date,
            form.value.suggestions,
            this.index)
        );

    }

    // Saving risks in the DB
    public onRiskSubmit(form) {
        const risk = {
            riskname: form.value.riskname,
            priority: this.tableService.priorityCalculate(
                this.tableService.formatProbability(form.value.probability),
                this.tableService.formatImpact(form.value.impact)
            ),
            hoursinfluence: form.value.hoursinfluence,
            costinfluence: form.value.costinfluence,
            commonChance: this.tableService.chanceCalculate(form.value.riskSprints, form.value.numberOfSprints),
            username: localStorage.getItem('username'),
            date: new Date,
            suggestions: form.value.suggestions,
            index: this.index
        };

        // Adding risks in the DB
        this.riskListService.addingRisk(risk).subscribe(data => {
            if (data.success) {
                console.log('Successful addition');
            } else {
                console.log('Wrong addition');
            }
        });
        this.index++;
    }

    // Recovery risks in table
    public riskRecovery() {
        const user = {
            username: localStorage.getItem('username'),
        };

        // get risks
        this.riskListService.getRisks(user).subscribe(data => {
            for (let i = 0; i !== data.length; i++) {
                this.items.push(new Data(data[i].riskname, data[i].priority, data[i].hoursinfluence,
                    data[i].costinfluence, data[i].commonChance, data[i].date, data[i].suggestions, data[i].index));
            }
        });
    }


    public clearFormInput(valuee: string) {
        this.riskForm.patchValue({ [valuee]: '' });
    }

    tableClear(emit) {
        this.index = 0;
    }
}
