function show(element){
    element.classList.remove("hidden");
  }
  function hide(element){
    element.classList.add("hidden");
  }

  export default {show, hide};