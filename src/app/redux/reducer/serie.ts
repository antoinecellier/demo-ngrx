import {ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store'
import * as SerieActions from '../action/serie';
import toPayload from '../action/toPayload'
import * as _ from 'lodash'

export type Action = SerieActions.All

export interface SerieState { 
    search: String
    series: any[]
} 

const initialState : SerieState = {
    search: "",
    series: []
}

export const serieReducer: ActionReducer<SerieState> = (state = initialState, action: Action) => {
    let payload = toPayload(action)
    switch(action.type) {
        case SerieActions.UPDATE_SYNC_SEARCH:
            return {
                search: payload,
                series: payload ? series.filter(serie => serie.original_name.toUpperCase().includes(payload.toUpperCase())) : series
            }
        case SerieActions.GET_SYNC_SERIE: 
            return {
              ...state,
              series: series
            }
        default: {
            return state
        }
    }
}

// TODO: SELECTOR
export const selectSerieState = createFeatureSelector<SerieState>('serie')
export const selectSeries = createSelector(selectSerieState,(state) => state.series)
export const selectSearch = createSelector(selectSerieState, (state) => state.search)


const series = [
    {
      "original_name": "The Big Bang Theory",
      "genre_ids": [
        35
      ],
      "name": "The Big Bang Theory",
      "popularity": 235.635095,
      "origin_country": [
        "US"
      ],
      "vote_count": 1922,
      "first_air_date": "2007-09-24",
      "backdrop_path": "\/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg",
      "original_language": "en",
      "id": 1418,
      "vote_average": 7,
      "overview": "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
      "poster_path": "\/wQoosZYg9FqPrmI4zeCLRdEbqAB.jpg"
    },
    {
      "original_name": "Game of Thrones",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Game of Thrones",
      "popularity": 203.754264,
      "origin_country": [
        "US"
      ],
      "vote_count": 3623,
      "first_air_date": "2011-04-17",
      "backdrop_path": "\/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
      "original_language": "en",
      "id": 1399,
      "vote_average": 8.1,
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "poster_path": "\/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
    },
    {
      "original_name": "The Walking Dead",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "The Walking Dead",
      "popularity": 185.794846,
      "origin_country": [
        "US"
      ],
      "vote_count": 2391,
      "first_air_date": "2010-10-31",
      "backdrop_path": "\/h1qyblc5p9G3ZWIVK8ZrkpxcXgO.jpg",
      "original_language": "en",
      "id": 1402,
      "vote_average": 7.4,
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "poster_path": "\/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg"
    },
    {
      "original_name": "Breaking Bad",
      "genre_ids": [
        18
      ],
      "name": "Breaking Bad",
      "popularity": 139.124422,
      "origin_country": [
        "US"
      ],
      "vote_count": 1903,
      "first_air_date": "2008-01-19",
      "backdrop_path": "\/bzoZjhbpriBT2N5kwgK0weUfVOX.jpg",
      "original_language": "en",
      "id": 1396,
      "vote_average": 8.2,
      "overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
      "poster_path": "\/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
    },
    {
      "original_name": "The Simpsons",
      "genre_ids": [
        16,
        35
      ],
      "name": "The Simpsons",
      "popularity": 135.716547,
      "origin_country": [
        "US"
      ],
      "vote_count": 1058,
      "first_air_date": "1989-12-17",
      "backdrop_path": "\/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
      "original_language": "en",
      "id": 456,
      "vote_average": 7.1,
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "poster_path": "\/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
    },
    {
      "original_name": "Supernatural",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "name": "Supernatural",
      "popularity": 118.309181,
      "origin_country": [
        "US"
      ],
      "vote_count": 1033,
      "first_air_date": "2005-09-13",
      "backdrop_path": "\/koMUCyGWNtH5LXYbGqjsUwvgtsT.jpg",
      "original_language": "en",
      "id": 1622,
      "vote_average": 7.1,
      "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
      "poster_path": "\/pui1V389cQft0BVFu9pbsYLEW1Q.jpg"
    },
    {
      "original_name": "Gotham",
      "genre_ids": [
        80,
        18,
        14,
        53
      ],
      "name": "Gotham",
      "popularity": 117.353299,
      "origin_country": [
        "US"
      ],
      "vote_count": 547,
      "first_air_date": "2014-09-22",
      "backdrop_path": "\/mKBP1OCgCG0jw8DwVYlnYqVILtc.jpg",
      "original_language": "en",
      "id": 60708,
      "vote_average": 6.9,
      "overview": "Before there was Batman, there was GOTHAM. \n\nEveryone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them \u2013 the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker? ",
      "poster_path": "\/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg"
    },
    {
      "original_name": "State of Affairs",
      "genre_ids": [
        18
      ],
      "name": "State of Affairs",
      "popularity": 109.707626,
      "origin_country": [
        "US"
      ],
      "vote_count": 14,
      "first_air_date": "2014-11-17",
      "backdrop_path": "\/51UZLphy030BpeWpJGPXkrsImAq.jpg",
      "original_language": "en",
      "id": 60889,
      "vote_average": 5.1,
      "overview": "Each day the President is faced with dozens of life and death decisions, and to prioritize the biggest international crises facing the country, one top CIA analyst - Charleston Tucker - assembles the President's Daily Briefing.\n\nThis list of the most vital security issues facing the nation brings with it moral and political judgment calls for Charleston and her trusted group of brilliant analysts at the agency. Aside from the political minefields she has to walk, Charlie has a close personal relationship with the President because she was once engaged to her son before a tragic terrorist attack took his life. Charlie survived that attack and is now determined to bring the perpetrators to justice.\n\nNavigating a complex personal life and a pressure-cooker profession is, of course, a challenge, and Charlie sometimes engages in boundary-pushing behavior to avoid facing her grief. But when the clock strikes 2 a.m., she is all about her job - protecting her nation, serving her president and still trying to get to the bottom of her fianc\u00e9's murder that will reveal itself as a shocking mystery.",
      "poster_path": "\/i3f5HhR3EOsKZbDfUgHIiWmLijc.jpg"
    },
    {
      "original_name": "American Horror Story",
      "genre_ids": [
        18,
        9648
      ],
      "name": "American Horror Story",
      "popularity": 108.10366,
      "origin_country": [
        "US"
      ],
      "vote_count": 530,
      "first_air_date": "2011-10-05",
      "backdrop_path": "\/anDMMvgVV6pTNSxhHgiDPUjc4pH.jpg",
      "original_language": "en",
      "id": 1413,
      "vote_average": 6.9,
      "overview": "American Horror Story is an anthology horror drama series.",
      "poster_path": "\/gwSzP1cJL2HsBmGStN2vOg3d4Qd.jpg"
    },
    {
      "original_name": "Marvel's Iron Fist",
      "genre_ids": [
        80,
        18,
        10759,
        10765
      ],
      "name": "Marvel's Iron Fist",
      "popularity": 102.630996,
      "origin_country": [
        "US"
      ],
      "vote_count": 282,
      "first_air_date": "2017-03-17",
      "backdrop_path": "\/2uXQRWzzIWdh6jiG6rBIirYQyNK.jpg",
      "original_language": "en",
      "id": 62127,
      "vote_average": 6.4,
      "overview": "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
      "poster_path": "\/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
    },
    {
      "original_name": "South Park",
      "genre_ids": [
        16,
        35
      ],
      "name": "South Park",
      "popularity": 100.55627,
      "origin_country": [
        "US"
      ],
      "vote_count": 585,
      "first_air_date": "1997-08-13",
      "backdrop_path": "\/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
      "original_language": "en",
      "id": 2190,
      "vote_average": 7.8,
      "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
      "poster_path": "\/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
    },
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 99.233331,
      "origin_country": [
        "US"
      ],
      "vote_count": 1471,
      "first_air_date": "2014-10-07",
      "backdrop_path": "\/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 6.8,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "\/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
    },
    {
      "original_name": "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30ebGT",
      "genre_ids": [
        16,
        35,
        10759,
        10765
      ],
      "name": "Dragon Ball GT",
      "popularity": 98.845149,
      "origin_country": [
        "JP",
        "US"
      ],
      "vote_count": 54,
      "first_air_date": "1996-02-07",
      "backdrop_path": "\/9sZNSPbKhr9FdpKheYVvJmoQu2w.jpg",
      "original_language": "ja",
      "id": 12697,
      "vote_average": 6.1,
      "overview": "Ten years have passed since Goku left his friends and family to hone his skills. But Goku soon finds himself helpless against the mystical power of the Dragon Balls and an accidental wish made by the devious Emperor Pilaf. His desire; that Goku once again become a child! Not daunted by this small setback, Goku, together with Trunks, and his own granddaughter Pan, blast off into the outer reaches of space in search of the mysterious Blackstar Dragon Balls. But these Dragon Balls have a fatal secret: if not collected within one year Earth will be destroyed.",
      "poster_path": "\/dlj0hRaDa469SfqurlsWSR7QAhw.jpg"
    },
    {
      "original_name": "Doctor Who",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Doctor Who",
      "popularity": 95.403345,
      "origin_country": [
        "GB"
      ],
      "vote_count": 910,
      "first_air_date": "2005-03-26",
      "backdrop_path": "\/tQkigP2fItdzJWvtIhBvHxgs5yE.jpg",
      "original_language": "en",
      "id": 57243,
      "vote_average": 6.9,
      "overview": "The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street. But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living \u2013 more of a hobby actually, and he's very, very good at it. He's saved us from alien menaces and evil from before time began \u2013 but just who is he?",
      "poster_path": "\/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg"
    },
    {
      "original_name": "The Orville",
      "genre_ids": [
        35,
        10765
      ],
      "name": "The Orville",
      "popularity": 92.316532,
      "origin_country": [
        "US"
      ],
      "vote_count": 24,
      "first_air_date": "2017-09-10",
      "backdrop_path": "\/2Qg2fViQzWenpUaMjhv0kNhCbE9.jpg",
      "original_language": "en",
      "id": 71738,
      "vote_average": 6.2,
      "overview": "Follow the crew of the not-so-functional exploratory ship in the Earth's interstellar fleet, 300 years in the future.",
      "poster_path": "\/tHNxWnb9YauPEOdQRK7cJr0ncAX.jpg"
    },
    {
      "original_name": "Friends",
      "genre_ids": [
        35
      ],
      "name": "Friends",
      "popularity": 90.038209,
      "origin_country": [
        "US"
      ],
      "vote_count": 814,
      "first_air_date": "1994-09-22",
      "backdrop_path": "\/efiX8iir6GEBWCD0uCFIi5NAyYA.jpg",
      "original_language": "en",
      "id": 1668,
      "vote_average": 7.8,
      "overview": "Friends is an American sitcom revolving around a group of friends in the New York City borough of Manhattan. Episodes typically depict the friends' comedic and romantic adventures and career issues, such as Joey auditioning for roles or Rachel seeking jobs in the fashion industry. The six characters each have many dates and serious relationships, such as Monica with Richard Burke and Ross with Emily Waltham. Other frequently recurring characters include Ross and Monica's parents in Long Island, Ross's ex-wife and their son, Central Perk barista Gunther, Chandler's ex-girlfriend Janice, and Phoebe's twin sister Ursula.",
      "poster_path": "\/7buCWBTpiPrCF5Lt023dSC60rgS.jpg"
    },
    {
      "original_name": "Arrow",
      "genre_ids": [
        28,
        12,
        80,
        18,
        9648,
        878
      ],
      "name": "Arrow",
      "popularity": 88.618672,
      "origin_country": [
        "US"
      ],
      "vote_count": 1234,
      "first_air_date": "2012-10-10",
      "backdrop_path": "\/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
      "original_language": "en",
      "id": 1412,
      "vote_average": 6.1,
      "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
      "poster_path": "\/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
    },
    {
      "original_name": "Family Guy",
      "genre_ids": [
        16,
        35
      ],
      "name": "Family Guy",
      "popularity": 81.35928,
      "origin_country": [
        "US"
      ],
      "vote_count": 733,
      "first_air_date": "1999-01-31",
      "backdrop_path": "\/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
      "original_language": "en",
      "id": 1434,
      "vote_average": 6.7,
      "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      "poster_path": "\/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
    },
    {
      "original_name": "NCIS",
      "genre_ids": [
        80,
        18,
        10759
      ],
      "name": "NCIS",
      "popularity": 80.656086,
      "origin_country": [
        "US"
      ],
      "vote_count": 405,
      "first_air_date": "2003-09-23",
      "backdrop_path": "\/nymeWHYQ1JaWP2wyNW5a5WHiDCd.jpg",
      "original_language": "en",
      "id": 4614,
      "vote_average": 6.6,
      "overview": "NCIS is an American police procedural drama television series, revolving around a fictional team of special agents from the Naval Criminal Investigative Service, which conducts criminal investigations involving the U.S. Navy and Marine Corps.",
      "poster_path": "\/1ubAPydzsb9VzhqeUGGDA7DZCUy.jpg"
    },
    {
      "original_name": "Law & Order",
      "genre_ids": [
        18
      ],
      "name": "Law & Order",
      "popularity": 79.093255,
      "origin_country": [
        "US"
      ],
      "vote_count": 107,
      "first_air_date": "1990-09-13",
      "backdrop_path": "\/8WhWnYdOHDQgBBg52VhKwmFA0UQ.jpg",
      "original_language": "en",
      "id": 549,
      "vote_average": 7.2,
      "overview": "Law & Order is an American police procedural and legal drama television series, created by Dick Wolf and part of the Law & Order franchise. It originally aired on NBC and, in syndication, on various cable networks. Law & Order premiered on September 13, 1990, and completed its 20th and final season on May 24, 2010. At the time of its cancellation, Law & Order was the longest-running crime drama on American primetime television. After The Simpsons, both Law & Order and Gunsmoke tied for the second longest-running scripted American primetime series with ongoing characters.",
      "poster_path": "\/22C3s3PkS7D1F135n8t2uVazOhy.jpg"
    }
]

// export const selectState = createFeatureSelector<SerieState>('serie')
// export const selectSeries = createSelector(selectState, (state) => state.series)
// export const selectSearch = createSelector(selectState, (state) => state.search)