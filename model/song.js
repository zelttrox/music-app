class Song {

    constructor(name, artist, path) {
        this.name = name
        this.artist = artist
        this.path = path
        this.route = (`${this.name}-${this.artist}`).toLowerCase()
        this.id = this.GenerateID()
        console.log("Successfully added song with Route: ", this.route)
    }

    GenerateID() {
        return Math.floor(Math.random() * 999999999999999)
    }

}

module.exports = Song
