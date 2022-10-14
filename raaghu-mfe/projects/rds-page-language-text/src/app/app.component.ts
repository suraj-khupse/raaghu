import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions, UserAuthService } from '@libs/shared';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getLanguageTexts } from 'projects/libs/state-management/src/lib/state/language-text/language-text.actions';
import { selectAllLanguageTexts } from 'projects/libs/state-management/src/lib/state/language-text/language-text.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { LanguageText } from '../modal/language-text';
declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'language-text';
  LanguageText: LanguageText = {
    baseValue: '',
    sourceName: '',
    baseLanguageName: '',
    languageName: '',
    value: '',
    key: ''
  };
  rdsLanguagetextTableMfeConfig: ComponentLoaderOptions;
  baselanguage: string;
  TargetCulturename: string
  source: string
  targetValue: string;
  targetFilter: string;
  filterText: string = '';
  languagetextTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Base Value', key: 'baseValue', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Target Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true },
    //{ displayName: 'Resource Name', key: 'ResourceName', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  languagetextTableData: any = [] = []
  listbaseLanguage: any[] = [];
  listTargetCulturename: any[] = []
  listsource: any[] = []
  listTargetValue: any[] = [
    { value: 'ALL', displayText: 'All' },
    { value: 'EMPTY', displayText: 'Empty Ones' }
  ]
  constructor(private http: HttpClient,
    private store: Store,
    public translate: TranslateService,
    private userAuthService: UserAuthService
  ) { }
  ngOnInit(): void {
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.getLanguageTextTable();
    this.getAllBaseLanguage();
    this.rdsLanguagetextTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.languagetextTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.languagetextTableData,
        recordsPerPage: 10,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have language text',
        noDataSubTitle: ''
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.languagetextTableData.findIndex((x: any) => x.userId === event.selectedData.userId);
            if (index !== -1) {
              this.languagetextTableData.splice(index, 1);
              const mfeConfig = this.languagetextTableData
              mfeConfig.input.tableData = [... this.languagetextTableData];
              this.rdsLanguagetextTableMfeConfig = mfeConfig;
            }
          } else if (event.actionId === 'edit') {
            this.EditlanguageText(undefined);
            if (event.selectedData) {
              this.LanguageText.baseValue = event.selectedData.baseValue;
              this.LanguageText.value = event.selectedData.value;
              this.LanguageText.key = event.selectedData.key;
              this.LanguageText.baseLanguageName = this.baselanguage;
              this.LanguageText.languageName = this.TargetCulturename;
              this.LanguageText.sourceName = this.source;
            }
          }

        }
      }
    }
    this.store.select(selectAllLanguageTexts).subscribe((res: any) => {
      this.languagetextTableData = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            key: element.key,
            baseValue: element.baseValue,
            value: element.targetValue,
          }
          this.languagetextTableData.push(item);
        });
        const mfeConfig = this.rdsLanguagetextTableMfeConfig
        mfeConfig.input.tableData = [... this.languagetextTableData];
        mfeConfig.input.refresh = true;
        this.rdsLanguagetextTableMfeConfig = mfeConfig;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  EditlanguageText(event): void {
    setTimeout(() => {
      var offcanvas = document.getElementById('EditlanguageText')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
  }

  getLanguageTextTable() {
    this.languagetextTableData = [];
    const languageTextDataParams: any = {
      maxResultCount: 50,
      skipCount: 0,
      sorting: '',
      sourceName: this.source,
      baseLanguageName: this.baselanguage,
      targetLanguageName: this.TargetCulturename,
      targetValueFilter: this.targetFilter,
      filterText: this.filterText
    }
    this.store.dispatch(getLanguageTexts(languageTextDataParams));
  }
  
  getAllBaseLanguage() {
    this.userAuthService.getLanguages().subscribe((response) => {
      var result = response;
      result.forEach(element => {
        const item: any = {
          displayText: element.displayName,
          value: element.name,
        }
        this.listbaseLanguage.push(item);
      });
    })
    this.userAuthService.getSources().subscribe((response) => {
      var result = response;
      result.forEach(element => {
        const item: any = {
          displayText: element.name,
          value: element.name,
        }
        this.listsource.push(item);
      });
    })
  }

  searchLanguageText(event: any) {
    this.filterText = event;
    this.getLanguageTextTable();
  }

  changeTarget() {
    this.languagetextTableData = [];
    this.getLanguageTextTable();
  }
}
