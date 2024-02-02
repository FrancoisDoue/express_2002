import 'dotenv/config';
import db from "../config/db.js";
import { exit } from 'process';
import movieModel from '../src/models/movieModel.js';

import { faker } from '@faker-js/faker'

const getRandInRange = (min = 1, max =  50) => Math.round(Math.random() * (max - min) + min)

const numberOfDocuments = 250
const directorList = []

for( let i = 0; i < 50; i++){
    directorList.push(faker.person.fullName())
}


const runMoviesFixtures = async() => {
    for (let i = 1; i < numberOfDocuments; i++) {
        await movieModel.postMovie({
            title: faker.music.songName(),
            description: faker.lorem.paragraph(),
            director : directorList[getRandInRange(0, directorList.length-1)],
            releaseDate : faker.date.between({from: '1895-01-01', to: Date.now()})
        }).catch(err => {
            console.log(err)
            return err
        })
    }
    console.log('Fixtures added to DB')
    exit()
}

db.once('open', runMoviesFixtures)