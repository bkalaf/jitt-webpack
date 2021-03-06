import * as fs from 'fs';

const menuInfos = [
    {
        name: 'Auctions',
        routes: [
            { name: 'Property', route: '/property' },
            { name: 'Lots', route: '/lots' },
            { name: 'Purchases', route: '/purchases' },
            { name: 'Inventory', route: '/inventory' },
        ],
    },
    {
        name: 'Products',
        routes: [
            { name: 'Vendors', route: '/vendors' },
            { name: 'Brands', route: '/brands' },
            { name: 'Products', route: '/products' },
            { name: 'Variants', route: '/variants' },
            { name: 'Categories', route: '/categories' },
            { name: 'Scans', route: '/scans' },
        ],
    },
    {
        name: 'Listings',
        routes: [
            { name: 'Listing', route: '/listing' },
            { name: 'Pricing', route: '/pricing ' },
            { name: 'Offers', route: '/offers' },
            { name: 'Sales', route: '/sales' },
        ],
    },
    {
        name: 'Shipments',
        routes: [
            { name: 'Customers', route: '/customers' },
            { name: 'Quotes', route: '/quote' },
            { name: 'Shipments', route: '/shipments' },
            { name: 'Tracking', route: '/tracking' },
        ],
    },
    {
        name: 'Finances',
        routes: [
            { name: 'Expenses', route: '/expenses' },
            { name: 'Payouts', route: '/payouts' },
        ],
    },
    {
        name: 'Queues',
        routes: [
            {
                name: 'DataIntegrity',
                route: '/data-integrity',
            },
            { name: 'ExternalFetch', route: '/data-fetch' },
            { name: 'PriceReview', route: '/price-review' },
            { name: 'BarcodePrint', route: '/barcode-print' },
        ],
    },
];

export default menuInfos;
