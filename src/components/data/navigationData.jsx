const NavigationData = [
    {
     href: 'home', 
     title: 'home',
     key: 1
    },
    {
     href: 'about', 
     title: 'about',
     key: 2
    },
    {
     href: 'products', 
     title: 'products',
     key: 3,
     categories : [
        { name : 'PC', link : 'PC', key : 1 },
        { name : 'Playstation 5', link : 'Playstation5', key : 2 },
        { name : 'Xbox One', link : 'XboxOne', key : 3 }
    ]
    },
]

export default NavigationData
