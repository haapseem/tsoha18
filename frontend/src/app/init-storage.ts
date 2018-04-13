export class Init{
  write(x, y){
    localStorage.setItem(x, y);
  }

  load(x){
    console.log(localStorage.getItem(x));
    return localStorage.getItem(x);
  }
}
