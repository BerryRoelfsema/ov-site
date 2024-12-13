export const getWidth = (width: string) => {
    switch (width) {
        case 'full':
            return 'w-full'
        case 'half':
            return 'w-1/2'
        case 'third':
            return 'w-1/3'
        case 'quarter':
            return 'w-1/4'
        case 'fifth':
            return 'w-1/5'
        default:
            return 'w-full'
    }
}

export const getHeight = (height: string) => {
    switch (height) {
        case 'full':
            return 'w-full'
        case 'half':
            return 'w-1/2'
        case 'third':
            return 'w-1/3'
        case 'quarter':
            return 'w-1/4'
        case 'fifth':
            return 'w-1/5'
        default:
            return 'w-full'
    }
}