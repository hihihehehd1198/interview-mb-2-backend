import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  queryAll(): any {
    try {
      return {
        menu: [
          {
            parentKey: null,
            key: "1",
            title: "a"
          },
          {
            parentKey: null,
            key: "2",
            title: "b"
          },
          {
            parentKey: "1",
            key: "1.1",
            title: "c"
          },
          {
            parentKey: "1",
            key: "1.2",
            title: "d"
          },
          {
            parentKey: "2",
            key: "2.1",
            title: "e"
          },
          {
            parentKey: "2.1",
            key: "2.1.1",
            title: "f"
          },
          {
            parentKey: "2.1.1",
            key: "2.1.1.1",
            title: "g"
          },
          {
            parentKey: "2.1.1.1",
            key: "2.1.1.1.1",
            title: "h"
          },
        ],
        form: {
          formControlsName: ['control1', 'controls2'],
          i18n: {
            en: {
              titleForm: "form",
              titleFormControl: ['control1', 'controls2'],
              buttonText: "submit"
            },
            vi: {
              titleForm: "biểu mẫu",
              titleFormControl: ['a', 'b'],
              buttonText: "Gửi form"
            }
          }
        }
      }
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
