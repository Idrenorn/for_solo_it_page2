import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TUI_PASSWORD_TEXTS, tuiInputPasswordOptionsProvider} from '@taiga-ui/kit';
import {of} from 'rxjs';



@Component({
    selector: `my-app`,
    templateUrl: `./app.component.html`,
    styleUrls: ["./app.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      tuiInputPasswordOptionsProvider({
          icons: {
              hide: `tuiIconLockLarge`,
              show: `tuiIconLockOpenLarge`,
          },
      }),
      {
          provide: TUI_PASSWORD_TEXTS,
          useValue: of([``]),
      },
  ],
})

      
  

export class AppComponent {
    readonly testForm = new FormGroup({
        testValue: new FormControl(``),
    });
    readonly control = new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
  ]);
}
  export class TuiInputPasswordExample2 {
    testForm = new FormGroup({
        testValue: new FormControl(`password`, Validators.required),
    });
  
}
