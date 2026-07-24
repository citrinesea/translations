document.addEventListener('DOMContentLoaded', function() {

    const themes = {
        'Senpai and Kouhai': {
            stories: [
                {
                    title: "Onigashima",
                    img: "images/previews/onigashima-kuro-unbloomed.jpg",
                    link: "https://citrinesea.github.io/translation/onigashima/",
                    description: "Keito, Souma and Tetora investigate a supsiciously-acting Kuro."
                },
                {
                    title: "Samurai and Ninjas",
                    img: "images/previews/warriors-and-ninjas.jpg",
                    link: "https://citrinesea.github.io/translation/samurais_and_ninjas/",
                    description: "Souma and Shinobu meet for the first time."
                },
                {
                    title: "Dominant",
                    img: "images/previews/dominant.jpg",
                    link: "https://citrinesea.github.io/translation/dominant/",
                    description: "Keito and Madara help Tetora cram for a history quiz in their own respective ways."
                },
                {
                    title: "My Kids Are Number One",
                    img: "images/previews/our_kids.jpg",
                    link: "https://citrinesea.github.io/translation/my_kids_are_number_one/",
                    description: "The seniors of OCEANS talk about their juniors."
                },
                {
                    title: "Keito Lecture: Spinoff Edition",
                    img: "images/previews/keitolecture.jpg",
                    link: "https://citrinesea.github.io/translation/keito_lecture_spinoff_edition/",
                    description: "Keito catches Hinata, Aira and Tetora commiserating about their bad grades."
                },
                {
                    title: "Hey Guys, Let's Have Some SUSHI!",
                    img: "images/previews/sushi.jpg",
                    link: "https://citrinesea.github.io/translation/lets_have_some_sushi/",
                    description: "Ibuki shows his seniors how to make American-style sushi."
                },
                {
                    title: "Taking Hold of a New Wind",
                    img: "images/previews/takinghold.jpg",
                    link: "https://citrinesea.github.io/translation/taking_hold_of_a_new_wind/",
                    description: "Souma acclimates to Ibuki and resolves on expanding his own worldview."
                }
            ]
        },
        'At AOUMI Aquarium': {
            stories: [
                {
                    title: "Dolphin Song",
                    img: "images/previews/dolphin_song.jpg",
                    link: "https://citrinesea.github.io/translation/onigashima/",
                    description: "Madara visits AOUMI Aquarium to check on Kanata."
                },
                {
                    title: "My Kids are Number One",
                    img: "images/previews/our_kids.jpg",
                    link: "https://citrinesea.github.io/translation/my_kids_are_number_one/",
                    description: "The seniors of OCEANS talk about their juniors."
                },
                {
                    title: "Ultramarine Cherry Blossom, A Petal",
                    img: "images/previews/soumafs2.jpg",
                    link: "https://citrinesea.github.io/translation/ultramarine_cherry_blossom_a_petal/",
                    description: "Souma takes pictures for his Feature Live while OCEANS sleeps over at AOUMI."
                }
            ]
        },
        'The Shinobu Sengoku Collection': {
            stories: [
                {
                    title: "Air Ride",
                    img: "images/previews/airride.jpg",
                    link: "https://citrinesea.github.io/translation/air_ride/",
                    description: "Mitsuru and Sora join Shinobu in Ninja Association activities."
                },
                {
                    title: "Youth Radio",
                    img: "images/previews/youth_radio.jpg",
                    link: "https://citrinesea.github.io/translation/youth_radio/",
                    description: "Makoto and Shinobu get to know each other while working for the Broadcasting Committee."
                },
                {
                    title: "Wink Killer",
                    img: "images/previews/wink_killer.jpg",
                    link: "https://citrinesea.github.io/translation/wink_killer/",
                    description: "Shinobu is tasked to uncover the mystery of seals littered throughout Seisoukan."
                },
                {
                    title: "Scroll of the Elements",
                    img: "images/previews/scrolls-shinobu-bloom.jpg",
                    link: "https://citrinesea.github.io/translation/scroll_of_the_elements/",
                    description: "Shinobu and Souma work together to lead the live Scroll of the Elements."
                },
                {
                    title: "Samurai and Ninjas",
                    img: "images/previews/warriors-and-ninjas.jpg",
                    link: "https://citrinesea.github.io/translation/samurais_and_ninjas/",
                    description: "Souma and Shinobu meet for the first time."
                },
                {
                    title: "Shinobu Substory 1",
                    img: "images/previews/shinobu_substory1.jpg",
                    link: "https://citrinesea.github.io/translation/shinobu_substory_1/",
                    description: "Anzu finds Shinobu stuck in a tree."
                },
                {
                    title: "Ninja Training",
                    img: "images/previews/ninjatraining.jpg",
                    link: "https://citrinesea.github.io/translation/ninja_training/",
                    description: "Anzu accompanies Shinobu in his ninja training."
                },
                {
                    title: "Network",
                    img: "images/previews/network.jpg",
                    link: "https://citrinesea.github.io/translation/network/",
                    description: "Makoto runs into Shinobu at the tennis courts."
                },
                {
                    title: "Emergency! Secret Mission",
                    img: "images/previews/secretmission.jpg",
                    link: "https://citrinesea.github.io/translation/emergency_secret_mission/",
                    description: "Shinobu goes on a stealth mission to hide his bad haircut."
                }
            ]
        },
        'The Souma Kanzaki Collection': {
            stories: [
                {
                    title: "BUTTERFLY",
                    img: "images/previews/butterfly.jpg",
                    link: "https://citrinesea.github.io/translation/battalion_butterfly/",
                    description: "Souma juggles managing the FanThanx event and becoming a senior."
                },
                {
                    title: "Scroll of the Elements",
                    img: "images/previews/scrolls-shinobu-bloom.jpg",
                    link: "https://citrinesea.github.io/translation/scroll_of_the_elements/",
                    description: "Shinobu and Souma work together to lead the live Scroll of the Elements."
                },
                {
                    title: "Samurai and Ninjas",
                    img: "images/previews/warriors-and-ninjas.jpg",
                    link: "https://citrinesea.github.io/translation/samurais_and_ninjas/",
                    description: "Souma and Shinobu meet for the first time."
                },
                {
                    title: "Droplet of a Flower",
                    img: "images/previews/droplet.jpg",
                    link: "https://citrinesea.github.io/translation/youth_radio/",
                    description: "Souma is cursed with a fortune that tells of watery misfortune."
                },
                {
                    title: "Matchless Warrior",
                    img: "images/previews/onemanarmy.jpg",
                    link: "https://citrinesea.github.io/translation/the_matchless_warrior/",
                    description: "Souma holds a siege when the student council threatens to take his sword."
                },
                {
                    title: "Hanafuda",
                    img: "images/previews/hanfuda.jpg",
                    link: "https://citrinesea.github.io/translation/hanafuda/",
                    description: "Souma learns of AKATSUKI's past after showing his classmates how to play hanafuda."
                },
                {
                    title: "Taking Hold of a New Wind",
                    img: "images/previews/takinghold.jpg",
                    link: "https://citrinesea.github.io/translation/taking_hold_of_a_new_wind/",
                    description: "Souma acclimates to Ibuki and resolves on expanding his own worldview."
                },
                {
                    title: "Ultramarine Cherry Blossom, A Petal",
                    img: "images/previews/soumafs2.jpg",
                    link: "https://citrinesea.github.io/translation/ultramarine_cherry_blossom_a_petal/",
                    description: "Souma takes pictures for his Feature Live while OCEANS sleeps over at AOUMI."
                },
                {
                    title: "Souma Substory 1",
                    img: "images/previews/souma_substory1.jpg",
                    link: "https://citrinesea.github.io/translation/souma_substory_1/",
                    description: "Souma ropes Anzu into helping with his training."
                },
                {
                    title: "Souma Substory 2",
                    img: "images/previews/souma_substory2.jpg",
                    link: "https://citrinesea.github.io/translation/souma_substory_2/",
                    description: "Souma makes okara donuts with Anzu."
                },
                {
                    title: "Souma Substory 3",
                    img: "images/previews/souma_substory3.jpg",
                    link: "https://citrinesea.github.io/translation/souma_substory_3/",
                    description: "Souma talks about his life in AKATSUKI."
                },
                {
                    title: "As Unbridled as a Heavenly Steed",
                    img: "images/previews/heavenlysteed.jpg",
                    link: "https://citrinesea.github.io/translation/as_unbridled_as_a_heavenly_steed/",
                    description: "Souma takes Tomoya to train on his family's mountain."
                }
            ]
        },
        'The Keito Hasumi Collection': {
            stories: [
                {
                    title: "Sailing Ceremony",
                    img: "images/previews/sailingceremony.jpg",
                    link: "https://citrinesea.github.io/translation/sailing_ceremony/",
                    description: "Keito collaborates with Subaru while trying to learn how best to stream."
                },
                {
                    title: "EYE FITTING",
                    img: "images/previews/eyefitting.jpg",
                    link: "https://citrinesea.github.io/translation/eye_fitting/",
                    description: "Keito lives his dream as the ambassador to an eyeglasses store."
                },
                {
                    title: "Arsène",
                    img: "images/previews/arsene.jpg",
                    link: "https://citrinesea.github.io/translation/Arsene/",
                    description: "The time Keito attends his own funeral."
                },
                {
                    title: "Agents",
                    img: "images/previews/agent.jpg",
                    link: "https://citrinesea.github.io/translation/agents",
                    description: "It's almost Christmas, Keito."
                },
                {
                    title: "Nice Jizo",
                    img: "images/previews/nice-jizo.jpg",
                    link: "https://citrinesea.github.io/translation/nice_jizo/",
                    description: "Keito comes across a sculpture on the MEGASPHERE."
                },
                {
                    title: "Tea Fight!",
                    img: "images/previews/teafight.jpg",
                    link: "https://citrinesea.github.io/translation/tea_fight/",
                    description: "Keito challenges Eichi to a tea-tasting competition."
                },
                {
                    title: "Dorm Supervisor's Awakening",
                    img: "images/previews/dorm.jpg",
                    link: "https://citrinesea.github.io/translation/dormitory_supervisors_awakening/",
                    description: "Hajime and Hokuto look after a bedridden Keito."
                },
                {
                    title: "Many Minds, One Flower",
                    img: "images/previews/flower.jpg",
                    link: "https://citrinesea.github.io/translation/many_minds_one_flower/",
                    description: "Keito learns the many ways of ikebana."
                },
                {
                    title: "Keito Lecture: Spinoff Edition",
                    img: "images/previews/keitolecture.jpg",
                    link: "https://citrinesea.github.io/translation/keito_lecture_spinoff_edition/",
                    description: "Keito catches Hinata, Aira and Tetora commiserating about their bad grades."
                },
                {
                    title: "Dominant",
                    img: "images/previews/dominant.jpg",
                    link: "https://citrinesea.github.io/translation/dominant/",
                    description: "Keito and Madara help Tetora cram for a history quiz in their own respective ways."
                },
                {
                    title: "Keito Idol Story 2",
                    img: "images/previews/keito_idolstory2.jpg",
                    link: "https://citrinesea.github.io/translation/keito_idolstory_2/",
                    description: "Keito, Kuro and Souma learn how to take selfies."
                },
                {
                    title: "A Soul in a Single Stroke",
                    img: "images/previews/skillsfromthepast.jpg",
                    link: "https://citrinesea.github.io/translation/soul_in_a_single_stroke/",
                    description: "Keito finds Eichi and Anzu in the student council room together."
                }
            ]
        },
        'Mizuhanome Appears': {
            stories: [
                {
                    title: "A Soul in a Single Stroke",
                    img: "images/previews/skillsfromthepast.jpg",
                    link: "https://citrinesea.github.io/translation/soul_in_a_single_stroke/",
                    description: "Keito finds Eichi and Anzu in the student council room together."
                },
                {
                    title: "Agents",
                    img: "images/previews/agent.jpg",
                    link: "https://citrinesea.github.io/translation/agents",
                    description: "It's almost Christmas, Keito."
                },
                {
                    title: "Toyland",
                    img: "images/previews/toyland.jpg",
                    link: "https://citrinesea.github.io/translation/toyland",
                    description: "Yuzuru needs help drawing concept-art for toys."
                },
                {
                    title: "Arsène",
                    img: "images/previews/arsene.jpg",
                    link: "https://citrinesea.github.io/translation/Arsene/",
                    description: "The time Keito attends his own funeral."
                },
                {
                    title: "Scroll of the Elements",
                    img: "images/previews/scrolls-shinobu-bloom.jpg",
                    link: "https://citrinesea.github.io/translation/scroll_of_the_elements/",
                    description: "Shinobu and Souma work together to lead the live Scroll of the Elements."
                }
            ]
        }
    };

    function getRandomTheme() {
        const themeNames = Object.keys(themes);
        const randomIndex = Math.floor(Math.random() * themeNames.length);
        return themeNames[randomIndex];
    }

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function getStoriesFromTheme(themeName, num = 5) {
        const theme = themes[themeName];
        if (!theme) return [];
        
        const shuffled = shuffleArray(theme.stories);
        return shuffled.slice(0, Math.min(num, shuffled.length));
    }

    function createStoryCard(story) {
        const card = document.createElement('div');
        card.className = 'story-card';
        
        const link = document.createElement('a');
        link.href = story.link || '#';
        if (story.link) {
            link.target = '_blank';
        }
        
        const img = document.createElement('img');
        img.src = story.img;
        img.alt = story.title;
        img.className = 'story-image';
        
        const info = document.createElement('div');
        info.className = 'story-info';
        
        const title = document.createElement('p');
        title.className = 'recc-title';
        title.textContent = story.title;
        
        const description = document.createElement('p');
        description.className = 'story-description';
        description.textContent = story.description || '';
        
        info.appendChild(title);
        info.appendChild(description);
        link.appendChild(img);
        link.appendChild(info);
        card.appendChild(link);
        
        return card;
    }

// whole function
    function displayRecommendations() {

        const themeName = getRandomTheme();
        
        const selectedStories = getStoriesFromTheme(themeName, 5);
        
        const recSection = document.querySelector('.category:first-of-type');
        const recTitle = recSection.querySelector('.recc-title');
                
        const themeHeaderWrapper = document.createElement('div');
        themeHeaderWrapper.className = 'theme-header-wrapper';
        
        const themeHeader = document.createElement('h4');
        themeHeader.textContent = "Rin's Curated Recommendations";
        
        const themeSubtitle = document.createElement('span');
        themeSubtitle.className = 'theme-subtitle';
        themeSubtitle.textContent = `${themeName}`;
        
        themeHeaderWrapper.appendChild(themeHeader);
        themeHeaderWrapper.appendChild(themeSubtitle);
        
        const recGrid = document.createElement('div');
        recGrid.className = 'recommendation-grid';
        
        selectedStories.forEach(story => {
            const card = createStoryCard(story);
            recGrid.appendChild(card);
        });
        
        recTitle.insertAdjacentElement('afterend', themeHeaderWrapper);
        themeHeaderWrapper.insertAdjacentElement('afterend', recGrid);
    }

    displayRecommendations();
});
