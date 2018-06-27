import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ContentList from './ContentList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentList />, div);
});

const component = shallow(<ContentList params={{listType: 'series', letter: 'c'}} />);

describe('fetch error handler', () => {
    var response = {
        json: jest.fn(() => "returned")
    };
    it ('returns json method when ok', () => {
        response.ok = true;
        let expected = "returned",
            result = component.instance().errorHandler(response);

        expect(result).toEqual(expected);
    });
    it ('throws with status when not ok', () => {
        response.ok = false;
        response.statusText = 'faulty';
        let expected = "faulty",
            result = () => component.instance().errorHandler(response);

        expect(result).toThrowError(expected);
    });
})

it('sets selected prop true for AlphaLink letter that matches params letter', () => {
    const alphaA = component.find('AlphaLinks').at(0);
    const alphaC = component.find('AlphaLinks').at(2);
    expect(alphaA.prop('letter')).toBe('a');
    expect(alphaA.prop('selected')).toBe(false);

    expect(alphaC.prop('letter')).toBe('c');
    expect(alphaC.prop('selected')).toBe(true);
})

it('shows the Loader component if state list is empty', () => {
    expect(component.state('list')).toEqual([]);
    expect(component.find('Loader').length).toBe(1);
    expect(component.find('Pagination').length).toBe(0);
})

describe('Pagination component', () => {
    const list = [{
        "id": 117,
        "title": "G.I. Joe Vol. I (1999)",
        "description": null,
        "resourceURI": "http://gateway.marvel.com/v1/public/series/117",
        "urls": [{
            "type": "detail",
            "url": "http://marvel.com/comics/series/117/gi_joe_vol_i_1999?utm_campaign=apiRef&utm_source=e1ddc225cd15cf68b85164297175334a"
        }],
        "startYear": 1999,
        "endYear": 1999,
        "rating": "MARVEL PSR",
        "type": "collection",
        "modified": "-0001-11-30T00:00:00-0500",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/4bc66a261d965",
            "extension": "jpg"
        },
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/117/creators",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1293",
                "name": "Steven Grant",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                "name": "Larry Hama",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/199",
                "name": "Herb Trimpe",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/964",
                "name": "Don Perlin",
                "role": "penciller"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/333",
                "name": "Frank Springer",
                "role": "penciller"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1331",
                "name": "Mike Vosburg",
                "role": "penciller"
            }],
            "returned": 6
        },
        "characters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/117/characters",
            "items": [],
            "returned": 0
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/117/stories",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/118",
                "name": "Witness the first daring attempts of the villainous Cobra Commander and his minions to cause havoc around the world, only to hav",
                "type": "interiorStory"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/65195",
                "name": "G.I. JOE VOL. I TPB 0 cover",
                "type": "cover"
            }],
            "returned": 2
        },
        "comics": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/117/comics",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/1057",
                "name": "G.I. Joe Vol. I (Trade Paperback)"
            }],
            "returned": 1
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/117/events",
            "items": [],
            "returned": 0
        },
        "next": null,
        "previous": null
    }, {
        "id": 118,
        "title": "G.I. Joe Vol. II (1999)",
        "description": null,
        "resourceURI": "http://gateway.marvel.com/v1/public/series/118",
        "urls": [{
            "type": "detail",
            "url": "http://marvel.com/comics/series/118/gi_joe_vol_ii_1999?utm_campaign=apiRef&utm_source=e1ddc225cd15cf68b85164297175334a"
        }],
        "startYear": 1999,
        "endYear": 1999,
        "rating": "MARVEL PSR",
        "type": "collection",
        "modified": "-0001-11-30T00:00:00-0500",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4bc66a215acf5",
            "extension": "jpg"
        },
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/118/creators",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1293",
                "name": "Steven Grant",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                "name": "Larry Hama",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/6868",
                "name": "Geof Isherwood",
                "role": "penciller"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1331",
                "name": "Mike Vosburg",
                "role": "penciller"
            }],
            "returned": 4
        },
        "characters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/118/characters",
            "items": [],
            "returned": 0
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/118/stories",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/119",
                "name": "Cobra launches an unprecedented strike on Washington, D.C. and the Joes engage the enemy in an action-packed display of strategy",
                "type": "interiorStory"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/65196",
                "name": "G.I. JOE VOL. II TPB 0 cover",
                "type": "cover"
            }],
            "returned": 2
        },
        "comics": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/118/comics",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/1058",
                "name": "G.I. Joe Vol. II (Trade Paperback)"
            }],
            "returned": 1
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/118/events",
            "items": [],
            "returned": 0
        },
        "next": null,
        "previous": null
    }, {
        "id": 119,
        "title": "G.I. Joe Vol. III (1999)",
        "description": null,
        "resourceURI": "http://gateway.marvel.com/v1/public/series/119",
        "urls": [{
            "type": "detail",
            "url": "http://marvel.com/comics/series/119/gi_joe_vol_iii_1999?utm_campaign=apiRef&utm_source=e1ddc225cd15cf68b85164297175334a"
        }],
        "startYear": 1999,
        "endYear": 1999,
        "rating": "MARVEL PSR",
        "type": "collection",
        "modified": "-0001-11-30T00:00:00-0500",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/4bc66a1c6fc4e",
            "extension": "jpg"
        },
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/119/creators",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                "name": "Larry Hama",
                "role": "writer"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1342",
                "name": "Russ Heath",
                "role": "penciller"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/198",
                "name": "Marie Severin",
                "role": "penciller"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/333",
                "name": "Frank Springer",
                "role": "penciller"
            }],
            "returned": 4
        },
        "characters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/119/characters",
            "items": [],
            "returned": 0
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/119/stories",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/120",
                "name": "The original adventures of America's elite special-missions force continue with the recruitment of Roadblock and Duke; the emerg",
                "type": "interiorStory"
            }, {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/65197",
                "name": "G.I. JOE VOL. III TPB 0 cover",
                "type": "cover"
            }],
            "returned": 2
        },
        "comics": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/119/comics",
            "items": [{
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/1059",
                "name": "G.I. Joe Vol. III (Trade Paperback)"
            }],
            "returned": 1
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/series/119/events",
            "items": [],
            "returned": 0
        },
        "next": null,
        "previous": null
    }];
    it('renders Pagination component when state list has length', () => {
        component.setState({
            list
        });
        expect(component.find('Pagination').length).toBe(1);
        expect(component.find('Loader').length).toBe(0);
    })
    it('increases page and offset when increment clicked', () => {
        component.instance().fetchHandler = jest.fn();
        component.setState({
            list
        });
        expect(component.state('page')).toBe(0);
        expect(component.state('offset')).toBe(0);
        component.find('Pagination').simulate('increment');
        expect(component.state('page')).toBe(1);
        expect(component.state('offset')).toBe(50);
    });
    it('decreases page and offset when decrement clicked', () => {
        component.instance().fetchHandler = jest.fn();
        component.setState({
            list
        });
        expect(component.state('page')).toBe(1);
        expect(component.state('offset')).toBe(50);
        component.find('Pagination').simulate('decrement');
        expect(component.state('page')).toBe(0);
        expect(component.state('offset')).toBe(0);
    })
})
