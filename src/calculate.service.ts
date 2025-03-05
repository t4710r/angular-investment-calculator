// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculateService {
  public annualData = <any>[];
}
