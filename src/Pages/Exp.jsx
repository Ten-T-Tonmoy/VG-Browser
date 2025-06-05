import Select from "react-select";

const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
];

const darkStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#1f2937", // Tailwind's gray-800
    borderColor: "#374151", // Tailwind's gray-700
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1f2937",
    color: "white",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#374151" : "#1f2937",
    color: "white",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  input: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af", // gray-400
  }),
};

export default function DarkSelect() {
  return (
    <div className="w-64">
      <Select options={options} styles={darkStyles} />
    </div>
  );
}


/**
 * {
    "id": 28,
    "slug": "red-dead-redemption-2",
    "name": "Red Dead Redemption 2",
    "name_original": "Red Dead Redemption 2",
    "description": "<p>America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. </p>\n<p>After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.</p>\n<p>From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.</p>",
    "metacritic": 96,
    "metacritic_platforms": [
        {
            "metascore": 97,
            "url": "https://www.metacritic.com/game/playstation-4/red-dead-redemption-2",
            "platform": {
                "platform": 18,
                "name": "PlayStation 4",
                "slug": "playstation4"
            }
        },
        {
            "metascore": 93,
            "url": "https://www.metacritic.com/game/pc/red-dead-redemption-2",
            "platform": {
                "platform": 4,
                "name": "PC",
                "slug": "pc"
            }
        },
        {
            "metascore": 97,
            "url": "https://www.metacritic.com/game/xbox-one/red-dead-redemption-2",
            "platform": {
                "platform": 1,
                "name": "Xbox One",
                "slug": "xbox-one"
            }
        }
    ],
    "released": "2018-10-26",
    "tba": false,
    "updated": "2025-06-05T01:41:01",
    "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "background_image_additional": "https://media.rawg.io/media/screenshots/f3d/f3d6c0eaf1db2bdbb44ad84f15e43f4f.jpg",
    "website": "https://www.rockstargames.com/reddeadredemption2/",
    "rating": 4.59,
    "rating_top": 5,
    "ratings": [
        {
            "id": 5,
            "title": "exceptional",
            "count": 3955,
            "percent": 73.6
        },
        {
            "id": 4,
            "title": "recommended",
            "count": 962,
            "percent": 17.9
        },
        {
            "id": 3,
            "title": "meh",
            "count": 291,
            "percent": 5.41
        },
        {
            "id": 1,
            "title": "skip",
            "count": 166,
            "percent": 3.09
        }
    ],
    "reactions": {
        "1": 60,
        "2": 11,
        "3": 38,
        "4": 12,
        "5": 8,
        "6": 7,
        "7": 24,
        "8": 3,
        "9": 4,
        "10": 29,
        "11": 9,
        "12": 19,
        "13": 1,
        "14": 3,
        "15": 2,
        "16": 3,
        "20": 1,
        "21": 2
    },
    "added": 16367,
    "added_by_status": {
        "yet": 992,
        "owned": 8634,
        "beaten": 3403,
        "toplay": 1647,
        "dropped": 741,
        "playing": 950
    },
    "playtime": 21,
    "screenshots_count": 47,
    "movies_count": 0,
    "creators_count": 8,
    "achievements_count": 278,
    "parent_achievements_count": 40,
    "reddit_url": "https://www.reddit.com/r/Red_Dead_Redemption_2/",
    "reddit_name": "",
    "reddit_description": "",
    "reddit_logo": "",
    "reddit_count": 1619,
    "twitch_count": 160,
    "youtube_count": 1000000,
    "reviews_text_count": 124,
    "ratings_count": 5250,
    "suggestions_count": 623,
    "alternative_names": [
        "RDR 2",
        "RDR2"
    ],
    "metacritic_url": "https://www.metacritic.com/game/xbox-one/red-dead-redemption-2",
    "parents_count": 0,
    "additions_count": 1,
    "game_series_count": 3,
    "user_game": null,
    "reviews_count": 5374,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "parent_platforms": [
        {
            "platform": {
                "id": 1,
                "name": "PC",
                "slug": "pc"
            }
        },
        {
            "platform": {
                "id": 2,
                "name": "PlayStation",
                "slug": "playstation"
            }
        },
        {
            "platform": {
                "id": 3,
                "name": "Xbox",
                "slug": "xbox"
            }
        }
    ],
    "platforms": [
        {
            "platform": {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 549702,
                "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {
                "minimum": "Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 7 - Service Pack 1 (6.1.7601)\nProcessor: Intel® Core™ i5-2500K / AMD FX-6300\nMemory: 8 GB RAM\nGraphics: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB\nNetwork: Broadband Internet connection\nStorage: 150 GB available space\nSound Card: Direct X Compatible",
                "recommended": "Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10 - April 2018 Update (v1803)\nProcessor: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X\nMemory: 12 GB RAM\nGraphics: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB\nNetwork: Broadband Internet connection\nStorage: 150 GB available space\nSound Card: Direct X Compatible"
            }
        },
        {
            "platform": {
                "id": 18,
                "name": "PlayStation 4",
                "slug": "playstation4",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 6920,
                "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {}
        },
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5696,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {}
        }
    ],
    "stores": [
        {
            "id": 257732,
            "url": "",
            "store": {
                "id": 3,
                "name": "PlayStation Store",
                "slug": "playstation-store",
                "domain": "store.playstation.com",
                "games_count": 8048,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            }
        },
        {
            "id": 374316,
            "url": "",
            "store": {
                "id": 11,
                "name": "Epic Games",
                "slug": "epic-games",
                "domain": "epicgames.com",
                "games_count": 1399,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            }
        },
        {
            "id": 384218,
            "url": "",
            "store": {
                "id": 1,
                "name": "Steam",
                "slug": "steam",
                "domain": "store.steampowered.com",
                "games_count": 112664,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            }
        },
        {
            "id": 48782,
            "url": "",
            "store": {
                "id": 2,
                "name": "Xbox Store",
                "slug": "xbox-store",
                "domain": "microsoft.com",
                "games_count": 4928,
                "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
            }
        }
    ],
    "developers": [
        {
            "id": 10,
            "name": "Rockstar Games",
            "slug": "rockstar-games",
            "games_count": 26,
            "image_background": "https://media.rawg.io/media/screenshots/a95/a95c031fe96063cc40ad377fd828d9ad.jpg"
        }
    ],
    "genres": [
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 187534,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
        }
    ],
    "tags": [
        {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "language": "eng",
            "games_count": 240777,
            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
        },
        {
            "id": 7,
            "name": "Multiplayer",
            "slug": "multiplayer",
            "language": "eng",
            "games_count": 40864,
            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
        },
        {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "language": "eng",
            "games_count": 37283,
            "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
        },
        {
            "id": 42,
            "name": "Great Soundtrack",
            "slug": "great-soundtrack",
            "language": "eng",
            "games_count": 3428,
            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
            "id": 18,
            "name": "Co-op",
            "slug": "co-op",
            "language": "eng",
            "games_count": 13340,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
        },
        {
            "id": 118,
            "name": "Story Rich",
            "slug": "story-rich",
            "language": "eng",
            "games_count": 25163,
            "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
        },
        {
            "id": 36,
            "name": "Open World",
            "slug": "open-world",
            "language": "eng",
            "games_count": 8646,
            "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
            "id": 8,
            "name": "First-Person",
            "slug": "first-person",
            "language": "eng",
            "games_count": 35248,
            "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
            "id": 149,
            "name": "Third Person",
            "slug": "third-person",
            "language": "eng",
            "games_count": 13560,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        },
        {
            "id": 40845,
            "name": "Partial Controller Support",
            "slug": "partial-controller-support",
            "language": "eng",
            "games_count": 13185,
            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
        },
        {
            "id": 30,
            "name": "FPS",
            "slug": "fps",
            "language": "eng",
            "games_count": 14351,
            "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
        },
        {
            "id": 9,
            "name": "Online Co-Op",
            "slug": "online-co-op",
            "language": "eng",
            "games_count": 6887,
            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        {
            "id": 26,
            "name": "Gore",
            "slug": "gore",
            "language": "eng",
            "games_count": 6265,
            "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
        },
        {
            "id": 6,
            "name": "Exploration",
            "slug": "exploration",
            "language": "eng",
            "games_count": 26919,
            "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
            "id": 37,
            "name": "Sandbox",
            "slug": "sandbox",
            "language": "eng",
            "games_count": 7908,
            "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
        },
        {
            "id": 34,
            "name": "Violent",
            "slug": "violent",
            "language": "eng",
            "games_count": 7365,
            "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
        },
        {
            "id": 150,
            "name": "Third-Person Shooter",
            "slug": "third-person-shooter",
            "language": "eng",
            "games_count": 3915,
            "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
        },
        {
            "id": 157,
            "name": "PvP",
            "slug": "pvp",
            "language": "eng",
            "games_count": 11035,
            "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
        },
        {
            "id": 40837,
            "name": "In-App Purchases",
            "slug": "in-app-purchases",
            "language": "eng",
            "games_count": 3138,
            "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
        },
        {
            "id": 192,
            "name": "Mature",
            "slug": "mature",
            "language": "eng",
            "games_count": 4136,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
        },
        {
            "id": 77,
            "name": "Realistic",
            "slug": "realistic",
            "language": "eng",
            "games_count": 7974,
            "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
        },
        {
            "id": 89,
            "name": "Historical",
            "slug": "historical",
            "language": "eng",
            "games_count": 3708,
            "image_background": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg"
        },
        {
            "id": 110,
            "name": "Cinematic",
            "slug": "cinematic",
            "language": "eng",
            "games_count": 2937,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
        },
        {
            "id": 144,
            "name": "Crime",
            "slug": "crime",
            "language": "eng",
            "games_count": 3118,
            "image_background": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg"
        },
        {
            "id": 45878,
            "name": "Online PvP",
            "slug": "online-pvp",
            "language": "eng",
            "games_count": 5742,
            "image_background": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg"
        },
        {
            "id": 478,
            "name": "3rd-Person Perspective",
            "slug": "3rd-person-perspective",
            "language": "eng",
            "games_count": 87,
            "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
        },
        {
            "id": 270,
            "name": "Blood",
            "slug": "blood",
            "language": "eng",
            "games_count": 2119,
            "image_background": "https://media.rawg.io/media/screenshots/e0a/e0abaefbcc99ef995be57d857806f2d2.jpeg"
        },
        {
            "id": 78,
            "name": "America",
            "slug": "america",
            "language": "eng",
            "games_count": 872,
            "image_background": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
        },
        {
            "id": 578,
            "name": "Masterpiece",
            "slug": "masterpiece",
            "language": "eng",
            "games_count": 302,
            "image_background": "https://media.rawg.io/media/screenshots/b20/b20a30ae9d910d948a24ca234eb4553d.jpg"
        },
        {
            "id": 577,
            "name": "Beautiful",
            "slug": "beautiful",
            "language": "eng",
            "games_count": 1872,
            "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
        },
        {
            "id": 181,
            "name": "Hunting",
            "slug": "hunting",
            "language": "eng",
            "games_count": 1039,
            "image_background": "https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg"
        },
        {
            "id": 152,
            "name": "Western",
            "slug": "western",
            "language": "eng",
            "games_count": 1381,
            "image_background": "https://media.rawg.io/media/games/ec1/ec132c684b3d57dbf1a86641b5a69f6b.jpg"
        },
        {
            "id": 5452,
            "name": "3rd-person",
            "slug": "3rd-person",
            "language": "eng",
            "games_count": 93,
            "image_background": "https://media.rawg.io/media/screenshots/fa7/fa74edcad003d71d5406a0b8976a5b88.jpg"
        }
    ],
    "publishers": [
        {
            "id": 2155,
            "name": "Rockstar Games",
            "slug": "rockstar-games",
            "games_count": 81,
            "image_background": "https://media.rawg.io/media/games/769/769b7f0f609f44bac86f2c791fee21dd.jpg"
        }
    ],
    "esrb_rating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
    },
    "clip": null,
    "description_raw": "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. \r\n\r\nAfter a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.\r\n\r\nFrom the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age."
}
 */