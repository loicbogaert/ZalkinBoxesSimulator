import React from 'react';

const Home = () => {

    const items1 = [  
        {
        name: 'Sunrise Wing',
        imageUrl: 'img/list1/img1.png',
        point: 500,
        id:1,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Sunrise Body Armour',
        imageUrl: 'img/list1/img2.png',
        point: 250,
        id:2,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Sunrise Cloak',
        imageUrl: 'img/list1/img3.png',
        point: 250,
        id:3,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Sunrise Character Effect',
        imageUrl: 'img/list1/img4.png',
        point: 250,
        id:4,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Sunrise shield',
        imageUrl: 'img/list1/img5.png',
        point: 250,
        id:5,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img6.png',
        point: 500,
        id:6,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img7.png',
        point: 250,
        id:7,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img8.png',
        point: 250,
        id:8,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img9.png',
        point: 500,
        id:9,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img10.png',
        point: 250,
        id:10,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img11.png',
        point: 250,
        id:11,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img12.png',
        point: 500,
        id:12,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img13.png',
        point: 250,
        id:13,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img14.png',
        point: 250,
        id:14,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img15.png',
        point: 500,
        id:15,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img16.png',
        point: 250,
        id:16,
        number: 1,
        rarity : "common"
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img17.png',
        point: 250,
        id:17,
        number: 1,
        rarity : "common"
    
    },
    
    {
        name: 'Obj2',
        imageUrl: 'img/list1/img18.png',
        point: 500,
        id:18,
        number: 1,
        rarity : "rare"
        
    },
    
    {
        name: 'Obj1',
        imageUrl: 'img/list1/img19.png',
        point: 250,
        id:19,
        number: 1,
        rarity : "rare"
    }]
    
    const items2 = [
        {
            name: 'Sunrise Wing',
            imageUrl: 'img/list2/imgg1.png',
            point: 500,
            id:20,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Sunrise Body Armour',
            imageUrl: 'img/list2/imgg2.png',
            point: 250,
            id:21,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Sunrise Cloak',
            imageUrl: 'img/list2/imgg3.png',
            point: 250,
            id:22,
            number: 1,
            rarity : "rare"
            
    
        },
    
        {
            name: 'Sunrise Character Effect',
            imageUrl: 'img/list2/imgg4.png',
            point: 250,
            id:23,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Sunrise shield',
            imageUrl: 'img/list2/imgg5.png',
            point: 250,
            id:24,
            number: 1,
            rarity : "rare"
            
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg6.png',
            point: 500,
            id:25,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg7.png',
            point: 250,
            id:26,
            number: 1,
            rarity : "rare"
            
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg8.png',
            point: 250,
            id:27,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg9.png',
            point: 500,
            id:28,
            number: 1,
            rarity : "rare"
            
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg10.png',
            point: 250,
            id:29,
            number: 1,
            rarity : "rare"
            
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg11.png',
            point: 250,
            id:30,
            number: 1,
            rarity : "rare"
            
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg12.png',
            point: 500,
            id:31,
            number: 1,
            rarity : "uncommon"
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg13.png',
            point: 250,
            id:32,
            number: 1,
            rarity : "uncommon"
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg14.png',
            point: 250,
            id:33,
            number: 1,
            rarity : "uncommon"
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg15.png',
            point: 500,
            id:34,
            number: 1,
            rarity : "uncommon"
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg16.png',
            point: 250,
            id:35,
            number: 1,
            rarity : "uncommon"
        },
    
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg17.png',
            point: 250,
            id:36,
            number: 1,
            rarity : "uncommon"
    
        },
    
        {
            name: 'Obj2',
            imageUrl: 'img/list2/imgg18.png',
            point: 500,
            id:37,
            number: 1,
            rarity : "uncommon"
        },
        
        {
            name: 'Obj1',
            imageUrl: 'img/list2/imgg19.png',
            point: 250,
            id:38,
            number: 1,
            rarity : "uncommon"
    
        },  
    ]

    localStorage.setItem('item1', JSON.stringify(items1))
    localStorage.setItem('item2', JSON.stringify(items2))

    return (
        <div className="home">
                <div className='splitScreenContainer'>
                    <a className="splitScreenContainer__link" href='#/items_choice_box'>
                        <div className='splitScreenContainer__part1'>
                            <h1>Simulator</h1>
                            <p>Try opening boxes for fun</p>
                        </div>
                    </a>

                    <a className="splitScreenContainer__link" href='#/items_choice'>
                        <div className='splitScreenContainer__part2'>
                            <h1>Calculator</h1>
                            <p>Use the calculator during your opening to see if </p>
                        </div>
                    </a>
                </div>
            <div className="home__coinContainer">
                <img className="home__coin1" src="./img/coin.png" alt="Poe coin"></img>
            </div>
            <div className="home__container">
                <h1 className="home__title">Zalkin's boxes simulator</h1>
            </div>
            <div className="home__coinContainer">
                <img className="home__coin2" src="./img/coin.png" alt="Poe coin icon"></img>
            </div>
        </div>
    );
};

export default Home;