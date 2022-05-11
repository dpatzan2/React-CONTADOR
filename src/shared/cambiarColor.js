export const cambiarColor = (contador, setColor) => {
    let residuo = contador % 2;
    if(contador === 0){
        setColor('white')
        return;
    }
    switch (residuo) {
        case 0:
            if(contador > 0){
                // Positivo
                setColor('#4dd672')
            }else{
                // Negativo
                setColor('#de9f33')
            }
            break;
        case -1:
            setColor('#fa5f5f')
            break;
        case 1:
            setColor('#73b3f0')
            break;
    }
}