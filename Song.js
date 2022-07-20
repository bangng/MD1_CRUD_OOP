class Song  {
    // id;
    name;
    lyrics;
    category;
    constructor(id,name,lyrics,category) {
        this.name = name;
        // this.id = id;
        this.lyrics = lyrics;
        this.category = category;

    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getLyrics(){
        return this.lyrics
    }
    setLyrics(lyrics){
        this.lyrics = lyrics
    }
    getCategory(){
        return this.category
    }
    setCategory(category){
        this.category= category
    }



}
// function select(){
//
//     let select = document.getElementById('selectCategory').value
// for (let i=0; i<listCategory.length;i++){
//     select
//
//
// }
// }



