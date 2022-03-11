interface ItestInterface {
    name:string;
    age:number
}

export default function Calculate(props: ItestInterface) {

    let x = 17
    let y = "4"

    

    return (<>
        <div>
            <input type="text" placeholder="nummer 1" />
            <input type="text" placeholder="nummer 2" />
            <button>Beräkna</button>
        </div>
        <div>Resultaten kommer hit sen, testar variabler {x} {y} och testar lite mer {x+Number(y)}</div>
        <div>testar props/värde från förälder {props.age} och {props.name}</div>
    </>)
}