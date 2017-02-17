/**
 * Created by superman on 17/2/17.
 */

function Component(){
    let element = document.createElement('div');
    element.innerHTML = 'hello webpack2';

    return element;
}

document.body.appendChild(Component());