
import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2019-01-15',
  title: 'Colors',
  summary:
    'I am learning how to build a blog using Markdown in a static web page build on top of Next.js'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>

# Typography #

## Typography usage ##

### Deﬁnition ###
Typography is used to create clear hierarchies, useful organizations, and purposeful alignments that guide users through the product and experience. It is the core structure of any well designed interface.

### Guidelines ###
idealo uses the typeface Roboto.

#### Font weight ####
Font weights is an important typographic style that can add emphasis and is used to diﬀerentiate content hierarchy. Font weight and size pairings must be carefully balanced. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is signiﬁcantly larger than the bold.
Roboto provides a wide range of weights. However only Regular and Medium should be used for product design.


#### Line-height ####
Line-height is one of several factors that directly contribute to readability and pacing of copy. Line-heights are based on the size of the font itself. The Line-height of the copy text is used as the base unit for the baseline grid.

#### Line-length ####
Line-length, traditionally known as measure, is the number of characters in a single line. It also directly contributes to the readability and pacing of copy. Lines that are too long degrade eye tracking from line to line, making it diﬃcult to gauge which line to read next. In contrast, lines that are too short make it diﬃcult for a reader to maintain a steady reading rhythm. Short lines often create disproportionate ragged edges that negatively aﬀect the design.
Line-length: 52 - 78 characters

#### Body copy ####
We recommend using two sizes for body copy. The ﬁrst is UI speciﬁc. To maximize screen space we chose a smaller 14px / 0.875rem body copy 
size for the standard UI. However, for areas that have prolonged 
reading, like Documentation, we use a larger body copy size of 16px / 1rem to enhance readability.

### Colors ###
We mostly use the following palette for typography, but will make exceptions here and there - mostly for campaigns and interactive elements.
![alt text](https://image.png "Image Text")


### Contrast ###
Texts are usually written using “color_grey_900” (#2D2D2D) on white (#FFFFFF) background other possibilities are of course possible. You can ﬁnd below an example of the most common color combinations that we use on the idealo site. In case you need to use a diﬀerent color combination make sure that the contrast between background and text is optimal in order to oﬀer a perfect readibility of text.
Ideally the color contrast ratio should be at a 4.5:1 ratio.
![alt text](https://image.png "Image Text")
