export type Listing = {
    url: string;
    title:string;
    rating: string | null;
    description: string;
    price: string ; 
    booking_metadata: string;
    rating_word: string;
    rating_count: string | null;
    }

export type Result = {
    content: {
        listing: Listing[];
        total_listings: string;
    }
}