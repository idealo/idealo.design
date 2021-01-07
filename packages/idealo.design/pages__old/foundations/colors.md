
import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2019-01-15',
  title: 'Colors',
  summary:
    'I am learning how to build a blog using Markdown in a static web page build on top of Next.js'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>

# Colors #

## Colors Usage ##

### Deﬁnition ###

Color brings a design to life. Color is versatile; it's used to express emotion and tone, as well as place emphasis and create associations. 
Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.

### Guidelines ###
idealo color palette is designed and implemented in a themable manner. 
The universal color variables are determined by common roles and usage; it 
is not based singularly on a color value (i.e. unique hex code). The same 
color value may be assigned to multiple variables in a theme's palette when 
the values have distinctly diﬀerent roles.

A universal variable can also have multiple associated roles when the color is 
consistently used across those roles. This allows for uniform color 
application across themes while giving each theme the freedom to express 
its own individuality at a more detailed level.

### Primary palette ###
Our primary palette uses our brand colours to guide the eye and highlight the important information. Our primary colour palette establishes brand, usage for typography and user interface framework elements.

### Blue and grey  palette ###
Our secondary palette contains a variety of colors to keep things fresh and engaging. We lean on these colors when brand awareness is high. When used, it should support and complement the Primary Colour Palette. These colours enable wide variety in design. We utilise our functional palette to create visual language systems that our users can relate to and rely on throughout any digital journey and experience.

### Extended palette ###
The extended palette consists of all the useable tints and shades of grey. Usage of these shades varies depending on the touch point, but they come in handy for typography and components. 


### Color contrast | WCAG AA standards ###
All type color combinations on idealo must pass WCAG AA standards of 4.5:1 for normal text and 3:1 for large text. For larger text, if the font weight is light (300) or normal (400) the text should be no smaller than 24px. If the font weight is Semi-Bold (600) then the large text should be no smaller than 19px. In the table below are approved Carbon color combinations.

### Tools and resources ###

#### Sketch-Color-Contrast-Analyser: ####
Is a Sketch plugin that calculates the color contrast of two selected layers and evaluates it against the WCAG2.0. Available on github.com

#### Tanaguru contrast ﬁnder: ####
Is a Sketch plugin that calculates the color contrast of two selected layers and evaluates it against the WCAG2.0. Available on github.com
Is a web tool which ﬁnds a good constrasts, for web accessibility, between two given colors and suggests valid alternatives. Available on contrast-ﬁnder.tanaguru.com
