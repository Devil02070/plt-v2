import localFont from 'next/font/local'

export const Onest = localFont({
    variable: '--font-onest',
    src: [{
        path: './fonts/Onest-Light.ttf',
        weight: '300',
        style: 'normal'
    },
    {
        path: './fonts/Onest-Regular.ttf',
        weight: '400',
        style: 'normal'
    },
    {
        path: './fonts/Onest-Medium.ttf',
        weight: '500',
        style: 'normal'
    },
    {
        path: './fonts/Onest-SemiBold.ttf',
        weight: '600',
        style: 'normal'
    },
    {
        path: './fonts/Onest-Bold.ttf',
        weight: '700',
        style: 'normal'
    },
    {
        path: './fonts/Onest-ExtraBold.ttf',
        weight: '800',
        style: 'normal'
    }
    ]
})