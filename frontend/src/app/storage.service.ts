import { Injectable } from '@angular/core';
import { Init } from "./init-storage";

@Injectable()
export class StorageService extends Init {

  constructor() {
    super();
  }

  save(x, y){
    this.write(x, JSON.stringify(y));
  }

  getData(x){
    return this.load(x);
  }

  clear(){
    super.clear();
  }

}
