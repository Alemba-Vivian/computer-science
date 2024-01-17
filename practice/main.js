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
                {name: 'Kyle', children: []},
                {name: 'Sophia', children: []}
            ]
        }
    ]
}

function printChildren(t){
    //using recursion method
    //case 1
    if(t.children.length === 0){
        return;
    }else{
        t.children.forEach(child => {
            console.log(child);
            printChildren(child);
        });
    }

}
printChildren(tree);