import { extendTheme } from "native-base"


export const TEMAS = extendTheme({
    colors:{
        purple:{
            300:'#8992BF',
            600:'#453F93',
        },
        white:'#fff',
        black:'#000'
    },
    fontSizes:{
        xs:12,
        sm:14,
        md:16,
        lg:20,
        xl:24,
    }
})



// 2. Get the type of the CustomTheme
type CustomThemeType = typeof TEMAS;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}