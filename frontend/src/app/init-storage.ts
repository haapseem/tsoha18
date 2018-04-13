export class Init{
  write(x, y){ localStorage.setItem(x, y); }

  load(x){ return localStorage.getItem(x); }

  clear(){ localStorage.clear(); }
}
