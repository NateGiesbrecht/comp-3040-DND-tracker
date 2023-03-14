export const campaigns = [
  {
    id: '1',
    name: 'Fall of Olympus',
    description:
      'Hades has fallen, the gods are under attack. The party mustfight to save olympus!',
    photo:
      'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700685160.jpg',
    characters: [
      {
        id: 0,
        name: 'Mylo',
        avatar:
          'https://d.furaffinity.net/art/corelle-vairel/1589238081/1589238081.corelle-vairel_snskh.jpg',
        linkedCharacters: [3],
        linkedCities: [0],
        bio: 'Mylo is a tall, muscular human with dark hair and piercing blue eyes.',
        story:
          'He grew up in Balor and has lived there his entire life. Mylo is a skilled blacksmith, and his weapons and armor are highly sought after by adventurers and mercenaries alike. Despite his tough exterior, Mylo has a soft spot for his lover Kayla, and he will do anything to protect her.',
      },
      {
        id: 1,
        name: 'Karlach',
        avatar:
          'https://i.pinimg.com/originals/48/53/91/485391ab775f002594475afb2755ea73.png',
        linkedCharacters: [],
        linkedCities: [],
        bio: 'Karlach is a wise old elf with a long white beard and piercing green eyes.',
        story:
          'He lives in the city of Brighton and works as a scholar and historian, spending his days poring over ancient texts and artifacts. Karlach is a quiet and reserved individual, preferring to spend his time in solitude rather than in the company of others.',
      },
      {
        id: 2,
        name: 'Jack',
        avatar:
          'https://i.pinimg.com/736x/ab/95/ef/ab95efe44a2264082c36712850487544.jpg',
        linkedCharacters: [5],
        linkedCities: [2],
        bio: 'Jack is a lanky human with short, curly hair and a mischievous grin.',
        story:
          'He lives in the small town of Blinko and works as a bard, traveling from town to town to perform for audiences. Jack is a charismatic and charming individual, always able to make people laugh with his jokes and stories. He has a close relationship with his brother Karlo, and the two often send each other letters and gifts.',
      },
      {
        id: 3,
        name: 'Kayla',
        avatar:
          'https://i.etsystatic.com/27881193/r/il/ea4d96/2943371833/il_570xN.2943371833_fp70.jpg',
        linkedCharacters: [0],
        linkedCities: [0],
        bio: 'Kayla is a petite half-elf with long brown hair and bright green eyes.',
        story:
          "She was born and raised in Balor and works as a healer in the city's temple. Kayla is deeply in love with Mylo and spends much of her free time with him. She is a kind and gentle soul, always willing to lend a helping hand to those in need.",
      },
      {
        id: 4,
        name: 'May',
        avatar:
          'https://i.etsystatic.com/27881193/r/il/de1a02/2877680718/il_570xN.2877680718_nyza.jpg',
        linkedCharacters: [],
        linkedCities: [],
        bio: 'May is a young halfling with curly brown hair and bright blue eyes.',
        story:
          "She lives in the city of Brighton and works as a baker, running her own small bakery in the city's market district. May is a cheerful and friendly individual, always ready with a smile and a warm greeting for her customers. She is known throughout the city for her delicious pastries and breads, and her bakery is always busy with customers.",
      },
      {
        id: 5,
        name: 'karlo',
        avatar:
          'https://pbs.twimg.com/media/EOe9xKwU8AIjfMC?format=jpg&name=4096x4096',
        linkedCharacters: [2],
        linkedCities: [1],
        bio: 'Karlo is a rugged dwarf with a thick beard and piercing brown eyes.',
        story:
          'He lives in the city of Stormhelm and works as a miner in the nearby mountains. Karlo is a tough and stubborn individual, but he has a deep love for his younger brother Jack. Despite their differences, the two brothers remain close and would do anything for each other.',
      },
    ],
    cities: [
      {
        id: 0,
        name: 'Balor',
        story:
          "Recently, a group of pirates has been raiding ships near Balor, causing trade in the city to slow down. The local government has put out a bounty for any information on the pirates' whereabouts, and adventurers from all over have flocked to the city in search of the reward.",
        bio: 'Balor is a bustling port city located on the coast. Its streets are lined with tall buildings made of white stone, and its harbor is always filled with ships from distant lands. Balor is known throughout the realm as a center of trade and commerce, and its markets are always full of exotic goods from all corners of the world.',
        avatar:
          'https://cdn2.inkarnate.com/cdn-cgi/image/width=1800,height=1400/https://inkarnate-api-as-production.s3.amazonaws.com/yxa3kz0ew0ca5ej5995wq420hyl6',
        linkedCharacters: [0, 3],
      },
      {
        id: 1,
        name: 'Stormhelm',
        story:
          'Stormhelm is under constant threat from raiders and barbarian tribes that roam the surrounding wilderness. In recent months, the attacks have become more frequent and more organized, leading many to suspect that a powerful warlord has united the various tribes into a single, unstoppable force. The people of Stormhelm are mobilizing for war, and adventurers are needed to help defend the city and defeat the warlord once and for all.',
        bio: "Stormhelm is a fortified city nestled in the midst of towering mountains and surrounded by dense forests. The city's walls are made of solid stone and are manned by well-trained soldiers armed with the latest weapons and tactics. Despite its warlike appearance, Stormhelm is a center of culture and learning, with libraries and academies that rival those of the greatest cities in the world.",
        avatar:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f5ab51c-73d8-4949-9282-9e2c1c5b565e/daryx9b-ac73b464-e1c4-4b07-bc82-55388080f1c8.png/v1/fill/w_1024,h_767,q_80,strp/rabanastre___dnd_city_map_by_madwing_daryx9b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY3IiwicGF0aCI6IlwvZlwvNWY1YWI1MWMtNzNkOC00OTQ5LTkyODItOWUyYzFjNWI1NjVlXC9kYXJ5eDliLWFjNzNiNDY0LWUxYzQtNGIwNy1iYzgyLTU1Mzg4MDgwZjFjOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TLlvx5ZxlZDLvR532fmwK1hkAn23cNavyUD3oj9ewiM',
        linkedCharacters: [5],
      },
      {
        id: 2,
        name: 'Blinko Town',
        story:
          'Blinko Town is built on the ruins of an ancient city that was destroyed by a catastrophic event that some say was caused by dark magic. In recent months, strange happenings have been occurring in and around the town, with travelers disappearing without a trace and rumors of undead creatures stalking the desert at night. Adventurers are needed to uncover the source of the disturbances and put a stop to the evil that threatens Blinko Town and the surrounding region.',
        bio: "Blinko Town is a small, isolated settlement on the edge of a vast desert. The town's buildings are made of adobe and sandstone, and the streets are lined with palm trees and cacti. Despite its remote location, Blinko Town is a hub of activity, with traders and travelers from all over the world passing through on their way to distant lands.",
        avatar:
          'https://i0.wp.com/www.fantasticmaps.com/wp-content/uploads/2012/02/redwallwebres-1.jpg?resize=640%2C828',
        linkedCharacters: [2],
      },
      {
        id: 3,
        name: 'Brighton',
        story:
          "Brighton is home to a powerful wizard's guild that has long been a force for good in the region. Recently, however, rumors have been spreading that the guild has been corrupted by dark magic, and that its members are using their powers for their own selfish ends. The people of Brighton are divided, with some calling for the guild's dissolution and others defending it as a necessary force for maintaining order and protecting the city. Adventurers are needed to uncover the truth about the guild and to bring justice to those responsible for any wrongdoing.",
        bio: "Brighton is a vibrant coastal city with sandy beaches and a bustling harbor. The city's architecture is a mix of modern skyscrapers and historic buildings dating back to the colonial era. Brighton is a center of commerce and trade, with ships from all over the world docking at its harbor to trade goods and share news.",
        avatar:
          'https://i.seadn.io/gae/bdp_7I4nqItBKberQxtsy3YZCFgsxTlhblXpnaK63WUxh7iBx9APvX8cYzCjNSzgpFJiLU1Dqyi5d-VZKzz_YLpDEZ5VggkctEFhlEc?auto=format&w=1400&fr=1',
        linkedCharacters: [],
      },
    ],
    monsters: [],
    dungeons: [],
    storyNotes:
      'Players burned down a building that was vital to the story, find another plot hook.',
    currentQuest:
      'Kill the Gnolls that are tormenting the town. Their base is to the East of town.',
    worldStory:
      'BBEG plotting to kill the gods and take over olympus. Has a cult following helping him do this. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc. Ut tortor pretium viverra suspendisse potenti nullam. Lectus mauris ultrices eros in. Auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Praesent tristique magna sit amet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Nibh ipsum consequat nisl vel. Quam id leo in vitae turpis massa. Tortor condimentum lacinia quis vel eros donec ac odio. Id faucibus nisl tincidunt eget. Sit amet massa vitae tortor condimentum. Condimentum vitae sapien pellentesque habitant morbi tristique. Gravida dictum fusce ut placerat orci nulla. In arcu cursus euismod quis viverra nibh cras pulvinar.' +
      'Quam id leo in vitae turpis massa sed elementum. A cras semper auctor neque vitae tempus quam. Justo donec enim diam vulputate. In massa tempor nec feugiat nisl pretium. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Odio euismod lacinia at quis risus sed. Tellus molestie nunc non blandit massa enim nec dui nunc. Curabitur vitae nunc sed velit dignissim sodales. At ultrices mi tempus imperdiet nulla malesuada. Dui nunc mattis enim ut tellus elementum sagittis. Enim nunc faucibus a pellentesque sit amet porttitor. Cursus risus at ultrices mi tempus imperdiet nulla. Eget duis at tellus at urna condimentum. In fermentum et sollicitudin ac orci phasellus egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
  },
  {
    id: '2',
    name: 'Curse of Strahd',
    description:
      'The world is overrun by vampires, the party must fight to destroy them all.',
    photo:
      'https://www.colorwallpapers.com/uploads/wallpaper/dnd-wallpapers/width-853/9wBK7PK3k59A-dnd-beautiful-hd-desktop-wallpapers.jpg',
    characters: [
      {
        id: 0,
        name: 'Mylo',
        avatar:
          'https://d.furaffinity.net/art/corelle-vairel/1589238081/1589238081.corelle-vairel_snskh.jpg',
        linkedCharacters: [],
        linkedCities: [],
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        story:
          'Diam maecenas sed enim ut sem viverra. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. In mollis nunc sed id. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Eros donec ac odio tempor. Nulla facilisi nullam vehicula ipsum. Odio morbi quis commodo odio aenean sed adipiscing. Justo eget magna fermentum iaculis eu non. Ut lectus arcu bibendum at varius vel. Quisque egestas diam in arcu cursus euismod quis. Arcu cursus vitae congue mauris rhoncus. Maecenas accumsan lacus vel facilisis. Fermentum posuere urna nec tincidunt. At erat pellentesque adipiscing commodo elit at.',
      },
    ],
    cities: [
      {
        id: 3,
        name: 'Brighton',
        story: '',
        bio: '',
        avatar:
          'https://i.seadn.io/gae/bdp_7I4nqItBKberQxtsy3YZCFgsxTlhblXpnaK63WUxh7iBx9APvX8cYzCjNSzgpFJiLU1Dqyi5d-VZKzz_YLpDEZ5VggkctEFhlEc?auto=format&w=1400&fr=1',
        linkedCharacters: [],
      },
    ],
    monsters: [],
    dungeons: [],
    storyNotes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc. Ut tortor pretium viverra suspendisse potenti nullam. Lectus mauris ultrices eros in. Auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Praesent tristique magna sit amet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Nibh ipsum consequat nisl vel. Quam id leo in vitae turpis massa. Tortor condimentum lacinia quis vel eros donec ac odio. Id faucibus nisl tincidunt eget. Sit amet massa vitae tortor condimentum. Condimentum vitae sapien pellentesque habitant morbi tristique. Gravida dictum fusce ut placerat orci nulla. In arcu cursus euismod quis viverra nibh cras pulvinar.',
    currentQuest:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie nunc. Ut tortor pretium viverra suspendisse potenti nullam. Lectus mauris ultrices eros in. Auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Praesent tristique magna sit amet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Nibh ipsum consequat nisl vel. Quam id leo in vitae turpis massa. Tortor condimentum lacinia quis vel eros donec ac odio. Id faucibus nisl tincidunt eget. Sit amet massa vitae tortor condimentum. Condimentum vitae sapien pellentesque habitant morbi tristique. Gravida dictum fusce ut placerat orci nulla. In arcu cursus euismod quis viverra nibh cras pulvinar.',
    worldStory:
      'Quam id leo in vitae turpis massa sed elementum. A cras semper auctor neque vitae tempus quam. Justo donec enim diam vulputate. In massa tempor nec feugiat nisl pretium. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Odio euismod lacinia at quis risus sed. Tellus molestie nunc non blandit massa enim nec dui nunc. Curabitur vitae nunc sed velit dignissim sodales. At ultrices mi tempus imperdiet nulla malesuada. Dui nunc mattis enim ut tellus elementum sagittis. Enim nunc faucibus a pellentesque sit amet porttitor. Cursus risus at ultrices mi tempus imperdiet nulla. Eget duis at tellus at urna condimentum. In fermentum et sollicitudin ac orci phasellus egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.' +
      'Risus in hendrerit gravida rutrum quisque. Scelerisque eu ultrices vitae auctor eu. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Elementum nibh tellus molestie nunc non. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt arcu non sodales neque sodales. Hac habitasse platea dictumst quisque sagittis purus. Ipsum dolor sit amet consectetur adipiscing elit. Auctor elit sed vulputate mi sit amet mauris. Sagittis aliquam malesuada bibendum arcu vitae. Lacus luctus accumsan tortor posuere ac. Suspendisse sed nisi lacus sed viverra. Enim neque volutpat ac tincidunt vitae semper quis. Accumsan lacus vel facilisis volutpat est velit. Cras semper auctor neque vitae tempus quam. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.',
  },
];

// {
//     id: "",
//     name: "",
//     description: "",
//     photo: "" ,
//     characters: [],
//     cities: [],
//     monsters: [],
//     dungeons: [],
//     storyNotes: "",
//     currentQuest: "",
//     worldStory: ""
//   },
