var expand = document.querySelectorAll('.expand');
var expanded = document.querySelectorAll('.expanded');

for (var i=0;i<expand.length;i++){
    expand.item(i).addEventListener("click", myFunction);
}


function myFunction() {
    var num = this.getAttribute('data-num');
    if (expanded.item(num).getAttribute('data-state') == 'expanded') {
        expanded.item(num).setAttribute('data-state', 'collapsed');
		this.src='images/dummy.png';
		this.src='images/expand.svg';
    }else{
        expanded.item(num).setAttribute('data-state', 'expanded');
		this.src='images/dummy.png'
		this.src='images/collapse.svg'
    }
    

}