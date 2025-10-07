import React, { useRef } from 'react'

const Content = ({contactRef}) => {
    const sectionRef = useRef(null);


    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div style={{
        display: "flex", flexDirection: "column", gap: "20px", padding: "10px"
    }}>
        <div>
            <button onClick={scrollToSection}>scroll to section</button>
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div ref={sectionRef}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique repudiandae id dolores deserunt optio eius velit excepturi fugiat illo autem officiis at ex quam sunt saepe earum placeat labore sit dolore cum voluptatum, eos error! Magnam, quasi ad exercitationem repudiandae quisquam nemo ut placeat dicta iste? Iure autem culpa tenetur quidem laboriosam eum eaque in, est magnam beatae esse quas veniam nulla temporibus reiciendis harum mollitia enim qui animi dolor fuga accusantium? Harum iusto impedit, quis natus illum quibusdam?
        </div>
        <div>
            <div ref={contactRef}>
                <h3>Contact</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae, voluptatum temporibus veritatis itaque tempora at vero sed aut, laudantium harum. Totam sapiente ratione quas rerum? Sint fuga facere molestiae veritatis, optio nam aliquam at magni numquam ab similique tempore fugit necessitatibus dolores, nostrum non. Aliquid enim cumque, vitae ullam recusandae cum, illum quaerat quis totam consequatur fugiat sequi quidem saepe sapiente rerum iste eaque. Quasi ducimus est officia fugiat perferendis laborum quibusdam dolorem tenetur, quaerat totam, voluptatum nam earum!
                </p>
            </div>
        </div>
        <div style={{display: "flex", width: "100%",justifyContent: "flex-end"}}>
            <button style={{backgroundColor: "dodgerblue", borderRadius: '50%', padding: '10px', border: "none"}} onClick={scrollTop}>⬆️</button>
        </div>
    </div>
  )
}

export default Content