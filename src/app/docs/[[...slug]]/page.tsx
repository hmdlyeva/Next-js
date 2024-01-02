export default function Docs({params}:{
    params:{
        slug:string[]
    }
}){

    if(params.slug?.length === 2){
        return <h1>Docs for First {params.slug[0]} and for Second {params.slug[1]}</h1>
    }
    else if(params.slug?.length === 1){
        return <h1>{params.slug[0]}</h1>
    }
    return <h1>Docs page</h1>
}