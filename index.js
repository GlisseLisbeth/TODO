'use strict'

const render = (root) =>{
  root.empty();
  const wraper = $('<div class="wraper"></div>');
  
  wraper.append(Header());
  wraper.append(Todo());
  
  root.append(wraper);
}

const state = {
  todos: []
};

$( _ => {
  const root  = $('.root');
  render(root);
});