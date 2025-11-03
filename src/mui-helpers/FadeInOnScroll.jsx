import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInOnScroll = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
