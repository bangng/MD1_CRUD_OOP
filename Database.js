class Database{
    constructor(divID) {
        this.divID = divID
        this.database = []
    }
add(){
        let nameInput = document.querySelector('#nameInput').value

    if (nameInput.trim()===''){
        alert('khong duoc de trong')
    }else {
        this.database.push(new Song(nameInput))
    }
    this.show()
}
delete(index){
        this.database.splice(index,1)
    this.show()
}
edit(index){
        let name = prompt('nameSong',this.database[index].name)
    if (name.trim()===''){
        alert('khong de trong')
    }else {
        this.database[index]=new Song(name)
        this.show()
    }
}
show(){
        this.listToTable(this.database)
}
search(name){
        let list= []
    this.database.forEach(element =>{
        if (element.name.toLowerCase().slice(0,name.length)===name.toLowerCase()){
            list.push(element)
        }
    })
    this.listToTable(list)
}
listToTable(list){
        let dataDiv = document.querySelector(this.divID)
    dataDiv.replaceChildren()

    let dataTable = document.createElement('table')
    dataDiv.append(dataTable)
    list.forEach((name))
}
}