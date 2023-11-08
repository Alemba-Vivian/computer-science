const tree ={
    name:'John',
    children:[
        {
            name:'Jim',
            children:[]

        },
        {
            name:'Zoe',
            children:[
                {name:'kyle', children:[]},
                {name:'Sophia', children:[]}
            ]
        }
]
};



function printChildrenRecursive(t){
    if(t.children.length ===0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}

printChildrenRecursive(tree);



