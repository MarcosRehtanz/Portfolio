import React from 'react'
import achievements from '../../utils/achievements'
import { Achievement } from '../../components/Achievement/Achievement.component'

export const Achievements = () => {
    return (<div>Achievements
        {achievements.map(({ description, image, stacks, title }, i) => {
            return (
                <Achievement
                    key={i+title} 
                    description={description}
                    image={image}
                    stacks={stacks}
                    title={title}
                />
            )
        })
        }
    </div>)
}