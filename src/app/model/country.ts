export class Country {

    constructor(public name: String) { }

    static fromJson(json: Object): Country {
        const countryName = new Country(
            json['name']
        );
        return countryName;
    }
}