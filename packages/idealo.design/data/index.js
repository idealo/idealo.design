
// WATCH OUT: Please make sure to keep pages.slugs in sync with components[].onPages

/*

 Schemas

 Slug: string

 Page {
   title
   url
   slug: Slug
 }

 Component {
   title
   description
   onPages[]: Slug
 }

 */

const data = {
    pages: [
        { title: 'Welcome', url: 'https://www.idealo.de', slug: 'welcome-page' },
        { title: 'ProP', url: 'https://www.idealo.de/preisvergleich/ProductCategory/4332.html', slug: 'prop-page' },
        { title: 'OOP', url: 'https://www.idealo.de/preisvergleich/OffersOfProduct/5738781_-iphone-x-apple.html', slug: 'oop-page' },
        { title: 'PCat', url: 'https://www.idealo.de/preisvergleich/ProductCategory/4332.html', slug: 'pcat-page' },
        { title: '404', url: 'https://www.idealo.de/404', slug: '404-page' },
        { title: 'SubPCat', url: 'https://www.idealo.de/preisvergleich/ProductCategory/4332.html', slug: 'subpcat-page' },
        { title: 'FAQ', url: '', slug: 'faq-page' },
        { title: 'My Orders', url: 'https://direktkauf.idealo.de/bestellungen/', slug: 'myorders-page' },
        { title: 'My Wishlist', url: 'https://www.idealo.de/wishlist/de/list', slug: 'mywishlist-page' },
        { title: 'User Settings', url: 'https://account.idealo.de/settings', slug: 'usersettings-page' },
        { title: 'Checkout', url: 'https://direktkauf.idealo.de/portal/checkout?execution=e1s1&i=XVQTPQR9', slug: 'checkout-page' },
        { title: 'Aftersales: Order Confirmation', url: 'zeit.de', slug: 'orderconfirmation-page' },
        { title: 'Google Shopping Lander', url: '', slug: 'gshoppinglander-page' },
        { title: 'Schnäppchen', URL: 'https://www.idealo.de/preisvergleich/MainSearchProductCategory/100oE0oJ4.html', slug: 'bestbuys-page' },
        { title: 'Partner', URL: '', slug: 'partner-page' },
        { title: 'Shops', URL: 'https://www.idealo.de/preisvergleich/AllePartner.html', slug: 'shops-page' },
        { title: 'Shop Details', URL: 'https://www.idealo.de/preisvergleich/Shop/26895.html', slug: 'shopdetails-page' },
        { title: 'Mainsearch', URL: 'https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=macbook', slug: 'mainsearch-page' },
        { title: 'Cluster', URL: 'https://www.idealo.de/preisvergleich/Typ/4002727169684.html', slug: 'cluster-page' },
        { title: 'Price Alerts', URL: 'https://mein.idealo.de/pricealerts/b622062f-7efc-47cb-9352-ebe04df2e7b6', slug: 'pricealerts-page' },
        { title: 'Data Privacy', URL: 'https://www.idealo.de/preisvergleich/Datenschutz.html', slug: 'dataprivacy-page' },
        { title: 'Newsletter Signup', URL: 'https://nachrichten.idealo.de/?source=ipc_footer', slug: 'newslettersignup-page' },
        { title: 'Terms', URL: 'https://www.idealo.de/preisvergleich/AGB.html', slug: 'terms-page' },
    ],
    components: [
        {
            title: 'Header',
            description: '',
            onPages: [
                'welcome-page', 'oop-page', 'prop-page', 'pcat-page', '404-page', 'subpcat-page', 'faq-page', 'myorders-page', 'mywishlist-page', 'usersettings-page', 'checkout-page', 'orderconfirmation-page', 'gshoppinglander-page', 'bestbuys-page', 'partner-page', 'shops-page', 'shopdetails-page'
            ]
        },
        {
            title: 'Feature Slider',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Last Seen Products',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Wishlist Best Buys',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Recommendations',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Popular Products',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Good Buy',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'idealo Flug',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'idealo Intro',
            description: '',
            onPages: [
                'welcome-page'
            ]
        },
        {
            title: 'Footer',
            description: '',

            onPages: [
                'welcome-page', 'oop-page', 'prop-page', 'pcat-page', '404-page', 'subpcat-page', 'faq-page', 'myorders-page', 'mywishlist-page', 'usersettings-page', 'checkout-page', 'orderconfirmation-page', 'gshoppinglander-page', 'bestbuys-page', 'partner-page', 'shops-page', 'shopdetails-page'
            ]
        },
        {
            title: 'Breadcrumbs',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Image Slider',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Add to Wishlist',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Product Meta',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Product Filter',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Price Chart',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Product Variants Filter',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar - Top Bargains',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar - Last Seen',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar - Top 10 in PCat',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar - Popular at idealo',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Sidebar - International Prices',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Offerlist - Filter',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Offerlist - Offerlist Item',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Expert Review',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Customer Review',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Test Reports',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Keyword Filter',
            description: '',

            onPages: [
                'oop-page'
            ]
        },
        {
            title: 'Newsletter Signup',
            description: '',

            onPages: [
                'oop-page'
            ]
        },



    ]
}

const queries = {
    fetchPages: () => {
        return data.pages
    },
    fetchComponents: () => {
        return data.components
    },
    fetchPageBySlug: (slug) => {
        return data.pages.filter(page => page.slug === slug)
    },
    fetchComponentsBySlug: (slug) => {
        return data.components.filter(component =>  component.onPages.indexOf(slug) > -1)
    }
}

export default queries
