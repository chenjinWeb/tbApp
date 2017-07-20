/**
 * Created by admin on 2017/6/13.
 */

import $router from './router';

export default function (){

  let token=window.localStorage.getItem("user");

  if(!token){
    $router.replace({
      name: 'login'
    })
    return false;
  }else{
    return true
  }

}



