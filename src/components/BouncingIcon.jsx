import { useSpring, animated } from '@react-spring/web';
import React from 'react'

export const BouncingIcon = ({ IconComponent, initialLeft, initialTop }) => {
    const [styles] = useSpring(() => ({
      from: { x: initialLeft, y: initialTop },
      to: async (next) => {
        while (true) {
          await next({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
        }
      },
      config: { tension: 1, frequency: 10 },
    }));
  return (
        <animated.div style={{ position: 'fixed', ...styles }}>
            <IconComponent size="50px" />
        </animated.div>
  )
}
