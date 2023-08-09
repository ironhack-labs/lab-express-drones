window.onload = () => {

    fetch('http://localhost:3002/dronesAmount')
        .then((response) => response.json())
        .then((dronesAmount) => {

            let drone = document.getElementById("drone-1")

            for (let i = 0; i < dronesAmount; i++)
            {
                let droneClone = drone.cloneNode()

                let randomValueLeft = Math.random() * 100
                let randomValueOffsetAnimation = Math.random() * 12
                droneClone.style.left = `${randomValueLeft}%`
                droneClone.style.animationDelay = `-${randomValueOffsetAnimation}s`

                document.querySelector(".create-form").appendChild(droneClone)
            }

            drone.style.display = "none"

        })


}