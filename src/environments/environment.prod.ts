export let Api_Url = '';
//Temporary addresses, change later **********************************************************
switch(window.location.hostname){
  case 'https//localhost:4200':
    Api_Url += 'http://localhost:49729/';
    break;
  default:
    Api_Url += 'http://localhost:49729/';
    break;
}
export const environment = {
  production: true
};
