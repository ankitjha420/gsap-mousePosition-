gsap.registerPlugin(ScrollTrigger)


document.querySelector('body').addEventListener('mousemove', tilt)

function tilt(event) {
    
    const { offsetX, offsetY, target } = event
    const { clientWidth, clientHeight } = target

    // console.log(offsetX, offsetY, clientHeight, clientWidth)

    const xPos = (offsetX / clientWidth) - 0.5
    const yPos = (offsetY / clientHeight) - 0.5



    /* Selecting element to be tilter */

    const screen = document.getElementById('#screen')

    /* Adding gsap effect on screen */

    gsap.to('#screen', {duration: 4,
        x: xPos*50,
        y: yPos*75,
        rotationX: yPos*10,
        rotationY: xPos*40,
        ease: 'ease-in'})

}
console.log("ok")
