const counters = document.querySelectorAll('.counter')
counters.forEach((counter)=>{
    counter.innerHTML = 0;

    const incrementcounter = () => {
        const targetcount = Number(counter.getAttribute('data-target'));  //converting string into number
        
        const startnum = Number(counter.innerHTML);
        const incr = targetcount / 100;

        if(startnum < targetcount ){
            counter.innerHTML = `${Math.round(startnum + incr)}`;
            setTimeout(incrementcounter, 10)
        }else{
            counter.innerHTML = targetcount;
        }
        
    }

    incrementcounter();
})