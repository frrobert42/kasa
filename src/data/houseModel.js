export class House {
    constructor(house) {
        this.id = house.id;
        this.title = house.title;
        this.cover = house.cover;
        this.pictures = house.pictures;
        this.description = house.description;
        this.host = house.host;
        this.rating = house.rating;
        this.location = house.location;
        this.equipments = house.equipments;
        this.tags = house.tags;
        this.location = house.location;
    }

    id = '';
    title = '';
    cover = '';
    pictures;
    description = '';
    host;
    rating = '';
    location = '';
    equipments;
    tags;
}
