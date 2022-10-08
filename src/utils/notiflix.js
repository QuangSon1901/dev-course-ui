import { Block } from 'notiflix/build/notiflix-block-aio';

// Block
const blockDots = (className) => {
    Block.dots(className, {
        backgroundColor: 'rgba(0,0,0,0.8)',
    });
};

const blockRemove = (className) => {
    Block.remove(className);
};

export { blockDots, blockRemove };
