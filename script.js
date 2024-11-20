function insert_Row() {
    //Write your code here
  let table=document.querySelector("#sampleTable")
    let newrow=document.createElement('tr')
    let newcell1=document.createElement('td')
    let newcell2=document.createElement('td')

    newcell1.innerHTML="a"
    newcell2.innerHTML="b"

    newrow.appendChild(newcell1)
    newrow.appendChild(newcell2)
    table.insertAdjacentElement('afterbegin',newrow)
  
}
